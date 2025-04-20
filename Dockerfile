# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Installation des dépendances de compilation nécessaires pour bcrypt
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else npm i; \
  fi

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build application
RUN npm run build

# Force rebuild of bcrypt to ensure it's compatible with the current architecture
RUN npm rebuild bcrypt --build-from-source

# Stage 2: Production
FROM node:18-alpine AS runner

WORKDIR /app

# Set environment variable
ENV NODE_ENV production

# Install production dependencies for bcrypt
RUN apk add --no-cache make g++

# Copy necessary files from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

# Expose API port
EXPOSE 3000

# Apply database migrations on startup and run the application
CMD ["/bin/sh", "-c", "npx prisma migrate deploy && node dist/main.js"]