import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccueilsController } from './controllers/accueils/accueils.controller';
import { AccueilsService } from './services/accueils/accueils.service';
import { Accueil } from 'src/models/accueil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accueil])],
  controllers: [AccueilsController],
  providers: [AccueilsService],
})
export class AccueilsModule {}
