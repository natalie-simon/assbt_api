import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
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

  @Get(':id')
  findAccueilById(@Param('id', ParseIntPipe) id: number) {
    return this.accueilsService.findAccueilById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createAccueils(@Body() createAccueilDto: CreateAccueilDto) {
    return this.accueilsService.createAccueil(createAccueilDto);
  }

  @Delete('delete/:id')
  deleteAccueil(@Param('id', ParseIntPipe) id: number) {
    return this.accueilsService.deleteAccueilById(id);
  }
}
