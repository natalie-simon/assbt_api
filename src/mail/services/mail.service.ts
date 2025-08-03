import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Activite, Membre } from '../../../generated/prisma';
import * as dotenv from 'dotenv';
import { MembreWithRelations } from 'src/partage/types/prisma-type';
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
  public async sendInscriptionNouveauMembre(membre: MembreWithRelations): Promise<void> {
    await this.mailerService.sendMail({
      to: process.env.MAIL_ADMIN,
      from: `Membre : ${membre.email}`,
      subject: "Un inscription d'un nouveau membre",
      template: './inscriptionNouveauMembre',
      context: {
        email: membre.email,
      },
    });
  }

  /**
   * Envoie d'un mail pour la réinitialisation du mot de passe
   * @param user
   * @param accessToken
   */
  public async sendMailReinitialisationMDP(
    membre: Membre,
    accessToken: string,
  ): Promise<void> {
    await this.mailerService.sendMail({
      to: membre.email,
      from: process.env.MAIL_ADMIN,
      subject: 'Réinitialisation de votre mot de passe',
      template: './reinitialisationMDP',
      context: {
        email: membre.email,
        token: accessToken,
        url: process.env.URL_FRONT,
      },
    });
  }

  /**
   * Envoie d'un mail pour la modification du mot de passe
   * @param user
   */
  public async sendMailMotDePasseModifie(membre: Membre): Promise<void> {
    await this.mailerService.sendMail({
      to: membre.email,
      from: process.env.MAIL_ADMIN,
      subject: 'Modification de votre mot de passe',
      template: './motDePasseModifie',
      context: {
        email: membre.email,
      },
    });
  }

  public async sendAnnulationActivite(activite: Activite, emailsParticipants: string[]): Promise<void> {
    // Envoie un email à l'admin et en CCI à tous les participants
    await this.mailerService.sendMail({
      to: process.env.MAIL_ADMIN,
      bcc: emailsParticipants, // CCI - les participants ne voient pas les emails des autres
      from: process.env.MAIL_ADMIN,
      subject: 'Annulation d\'une activité',
      template: './annulationActivite',
      context: {
        titre: activite.titre,
        date_heure_debut: activite.date_heure_debut,
        date_heure_fin: activite.date_heure_fin,
      },
    });
  }
}
