import { Module } from '@nestjs/common';
import { ActiviteController } from './activite.controller';
import { ActiviteService } from './services/activite.service';
import { CategoriesActivitesModule } from '../categories-activites/categories-activites.module';
import { MembresModule } from '../membres/membres.module';

@Module({
  controllers: [ActiviteController],
  providers: [ActiviteService],
  imports: [MembresModule, CategoriesActivitesModule],
  exports: [ActiviteService],
})
export class ActivitesModule {}
