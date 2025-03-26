import { Inject, Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

/**
 * Service pour récupérer les informations du serveur
 */
@Injectable({ scope: Scope.REQUEST })
export class ServerInfoService {
  /**
   * Constructeur
   * @param configService Service de configuration
   * @param request Requête HTTP en cours
   */
  constructor(
    private readonly configService: ConfigService,
    @Inject(REQUEST) private readonly request: Request,
  ) {}

  /**
   * Récupère l'URL du serveur
   * @returns URL du serveur
   */
  public getServerUrl(): string {
    // Tentative de récupération depuis la configuration
    const configUrl = this.configService.get<string>('SERVER_URL');
    if (configUrl) {
      return configUrl;
    }

    // Récupération depuis la requête
    const req = this.request;
    if (req) {
      const protocol = req.protocol;
      const host = req.get('host');
      return `${protocol}://${host}`;
    }

    // Valeur par défaut
    return 'unknown-server';
  }
}
