import { IsOptional, IsString, IsInt, Min } from "class-validator";
import { Type } from "class-transformer";

/**
 * DTO pour la récupération des logs
 */
export class QueryLogsDto {
  /**
   * Niveau de log
   *
   * @type {string}
   * @memberof QueryLogsDto
   */
  @IsOptional()
  @IsString()
  level?: string;

  /**
   * Recherche par mot-clé
   *
   * @type {string}
   * @memberof QueryLogsDto
   */
  @IsOptional()
  @IsString()
  search?: string;

  /**
   * Page courante
   *
   * @type {number}
   * @memberof QueryLogsDto
   */
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  /**
   * Nombre de logs par page
   *
   * @type {number}
   * @memberof QueryLogsDto
   */
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 20;
}