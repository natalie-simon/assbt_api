import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActiviteController } from './activite.controller';
import { Activite } from '../database/core/activite.entity';
import { ActiviteService } from './services/activite.service';
import { CategoriesActivitesModule } from '../categories-activites/categories-activites.module';
import { MembreActivite } from 'src/database/core/membre_activite.entity';

@Module({
  controllers: [ActiviteController],
  providers: [ActiviteService],
  imports: [
    TypeOrmModule.forFeature([Activite, MembreActivite]),
    CategoriesActivitesModule,
  ],
  exports: [ActiviteService],
})
export class ActivitesModule {}
