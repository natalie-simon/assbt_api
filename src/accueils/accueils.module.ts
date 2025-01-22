import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccueilsController } from './accueils.controller';
import { AccueilsService } from './services/accueils.service';
import { Accueil } from 'src/accueils/accueil.entity';

/**
 * Gestion du module Accueils
 */
@Module({
  imports: [TypeOrmModule.forFeature([Accueil])],
  controllers: [AccueilsController],
  providers: [AccueilsService],
})
export class AccueilsModule {}
