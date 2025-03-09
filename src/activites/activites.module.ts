import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActiviteController } from './activite.controller';
import { Activite } from '../database/core/activite.entity';
import { ActiviteService } from './services/activite.service';
import { CategoriesActivitesModule } from '../categories-activites/categories-activites.module';
import { MembreActivite } from '../database/core/membre_activite.entity';
import { MembresModule } from '../membres/membres.module';

@Module({
  controllers: [ActiviteController],
  providers: [ActiviteService],
  imports: [
    MembresModule,
    TypeOrmModule.forFeature([Activite, MembreActivite]),
    CategoriesActivitesModule,
  ],
  exports: [ActiviteService],
})
export class ActivitesModule {}
