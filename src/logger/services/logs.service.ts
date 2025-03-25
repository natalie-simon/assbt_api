import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, Logdocument } from '../schemas/log.schema';

/**
 * Interface LogQueryParams
 */
export interface LogQueryParams {
  /**
   * Niveau de log
   */
  level?: string;

  /**
   * Recherche
   */
  search?: string;

  /**
   * Pagination
   */
  page?: number;

  /**
   * Limite
   */
  limit?: number;
}

/**
 * LogsService
 */
@Injectable()
export class LogsService {
  /**
   * Constructor
   * @param logModel
   */
  constructor(@InjectModel(Log.name) private logModel: Model<Logdocument>) {}

  /**
   * Récupération de tous les logs avec filtres
   * @param queryParams
   * @returns
   */
  async findAll(queryParams: LogQueryParams): Promise<{
    logs: Log[];
    total: number;
    pages: number;
    currentPage: number;
  }> {
    const { level, search, page = 1, limit = 10 } = queryParams;

    const filter: any = {};

    if (level) {
      filter.level = level;
    }

    if (search) {
      filter.message = new RegExp(search, 'i');
    }

    const pageNum = Number(page);
    const limitNum = Number(limit);
    const skip = (pageNum - 1) * limitNum;

    const logs = await this.logModel
      .find(filter)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limitNum)
      .exec();

    const total = await this.logModel.countDocuments(filter).exec();
    const pages = Math.ceil(total / limitNum);

    return {
      logs,
      total,
      pages,
      currentPage: pageNum,
    };
  }
}
