import {
  Controller,
  Get,
  Query,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LogsService } from './services/logs.service';
import { Auth } from '../auth/decorators/auth.decorator';
import { AuthTypes } from '../auth/enums/auth-types.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { RoleTypes } from '../auth/enums/role-types.enum';
import { QueryLogsDto } from './dtos/query-logs.dto';

/**
 * Controller  de gestion des logs
 */
@Controller('logs')
@Auth(AuthTypes.Bearer)
@Roles(RoleTypes.ADMIN)
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  /**
   * Récupération des logs avec filtres possibles
   * @param query
   * @returns
   */
  @Get()
  async findAll(@Query() query: QueryLogsDto) {
    try {
      return await this.logsService.findAll(query);
    } catch (error) {
      throw new HttpException(
        `Erreur lors de la récupération des logs : {error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
