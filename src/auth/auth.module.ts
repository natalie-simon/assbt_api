import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MembresModule } from '../membres/membres.module';
import { AuthService } from './services/auth.service';
import { BcryptProvider } from './services/bcrypt.provider';
import { HashingProvider } from './services/hashing.provider';
import { SignInProvider } from './services/sign-in.provider';
import { ConfigModule } from '@nestjs/config';
import  jwtConfig  from './config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: HashingProvider,
      useClass: BcryptProvider,
    },
    SignInProvider,
  ],
  imports: [forwardRef(() => MembresModule),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  exports: [AuthService, HashingProvider],
})
export class AuthModule {}
