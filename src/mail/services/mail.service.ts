import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';
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
}
