import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from "./services/users.service";
import { User } from '../database/core/user.entity';
import { CreateUserProvider } from '../auth/services/create-user.provider';
import { AuthModule } from '../auth/auth.module';
import { FindOneByEmailProvider } from '../auth/services/find-one-by-email.provider';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from '../auth/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';

/**
 * Gestion du module UsersF
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => AuthModule),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  controllers: [UsersController],
  providers: [UsersService, CreateUserProvider, FindOneByEmailProvider],
  exports: [UsersService],
})
export class UsersModule {}
