import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActiviteController } from './activite.controller';
import { Activite } from '../database/core/activite.entity';
import { ActiviteService } from './services/activite.service';
import { CategoriesActivitesModule } from '../categories-activites/categories-activites.module';

@Module({
  controllers: [ActiviteController],
  providers: [ActiviteService],
  imports: [TypeOrmModule.forFeature([Activite]), CategoriesActivitesModule],
  exports: [ActiviteService],
})
export class ActivitesModule {}
