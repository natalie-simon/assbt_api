import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatutsController } from './statuts.controller';
import { StatutsService } from './services/statuts.service';
import { Statut } from './statut.entity';

/**
 * Gestion du module Statuts
 */
@Module({
  controllers: [StatutsController],
  providers: [StatutsService],
  exports: [StatutsService],
  imports: [TypeOrmModule.forFeature([Statut])],
})
export class StatutsModule {}