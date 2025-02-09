import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/database/core/user.entity';
import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Service de gestion des mails
 */
@Injectable()
export class MailService {
  /**
   * Constructeur
   * @param mailerService
   */
  constructor(private readonly mailerService: MailerService) {}

  /**
   * Envoie d'une mail pour l'inscription d'un nouveau membre
   * @param user
   */
  public async sendInscriptionNouveauMembre(user: User): Promise<void> {
    await this.mailerService.sendMail({
      to: process.env.MAIL_ADMIN,
      from: `Membre : ${user.email}`,
      subject: "Un inscription d'un nouveau membre",
      template: './inscriptionNouveauMembre',
      context: {
        email: user.email,
      },
    });
  }

  public async sendMailReinitialisationMDP(
    user: User,
    accessToken: string,
  ): Promise<void> {
    await this.mailerService.sendMail({
      to: user.email,
      from: process.env.MAIL_ADMIN,
      subject: 'Réinitialisation de votre mot de passe',
      template: './reinitialisationMDP',
      context: {
        email: user.email,
        token: accessToken,
      },
    });
  }
}
