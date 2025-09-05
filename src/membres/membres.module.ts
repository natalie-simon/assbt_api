import { Module, forwardRef } from '@nestjs/common';
import { MembresController } from './membres.controller';
import { MembresService } from './services/membres.service';
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
    forwardRef(() => AuthModule),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  controllers: [MembresController],
  providers: [MembresService, CreateUserProvider, FindOneByEmailProvider],
  exports: [MembresService],
})
export class MembresModule {}
