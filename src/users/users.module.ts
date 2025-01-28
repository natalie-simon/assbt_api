import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { User } from './user.entity';
import { CreateUserProvider } from '../auth/services/create-user.provider';
import { AuthModule } from '../auth/auth.module';
import { FindOneByEmailProvider } from 'src/auth/services/find-one-by-email.provider';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'src/auth/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';

/**
 * Gestion du module Users
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
