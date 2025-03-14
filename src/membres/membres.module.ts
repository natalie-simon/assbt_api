import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembresController } from './membres.controller';
import { MembresService } from "./services/membres.service";
import { Membre } from '../database/core/membre.entity';
import { CreateUserProvider } from '../auth/services/create-user.provider';
import { AuthModule } from '../auth/auth.module';
import { FindOneByEmailProvider } from '../auth/services/find-one-by-email.provider';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from '../auth/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { Profil } from 'src/database/core/profil.entity';

/**
 * Gestion du module UsersF
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([Membre, Profil]),
    forwardRef(() => AuthModule),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  controllers: [MembresController],
  providers: [MembresService, CreateUserProvider, FindOneByEmailProvider],
  exports: [MembresService],
})
export class MembresModule {}
