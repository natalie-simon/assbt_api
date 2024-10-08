import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAccueilDto } from 'src/accueils/accueil.dtos';
import { AccueilsService } from 'src/accueils/services/accueils/accueils.service';

@Controller('accueils')
export class AccueilsController {
  constructor(private readonly accueilsService: AccueilsService) {}

  @Get()
  getAccueils() {
    return this.accueilsService.findAllAccueil();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createAccueils(@Body() createAccueilDto: CreateAccueilDto) {
    return this.accueilsService.createAccueil(createAccueilDto);
  }
}
