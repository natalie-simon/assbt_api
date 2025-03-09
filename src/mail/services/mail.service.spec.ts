import { Test, TestingModule } from '@nestjs/testing';
import { MailService } from './mail.service';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from '../../database/core/membre.entity';

describe('MailService', () => {
  let mailService: MailService;
  let mailerService: MailerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MailService,
        {
          provide: MailerService,
          useValue: {
            sendMail: jest.fn(),
          },
        },
      ],
    }).compile();

    mailService = module.get<MailService>(MailService);
    mailerService = module.get<MailerService>(MailerService);
  });

  describe('sendInscriptionNouveauMembre', () => {
    it('should call sendMail with correct parameters', async () => {
      const user = new User();
      user.email = 'newmember@example.com';

      await mailService.sendInscriptionNouveauMembre(user);

      expect(mailerService.sendMail).toHaveBeenCalledWith({
        to: process.env.MAIL_ADMIN,
        from: `Membre : ${user.email}`,
        subject: "Un inscription d'un nouveau membre",
        template: './inscriptionNouveauMembre',
        context: {
          email: user.email,
        },
      });
    });
  });

  describe('sendMailReinitialisationMDP', () => {
    it('should call sendMail with correct parameters', async () => {
      const user = new User();
      user.email = 'user@example.com';
      const accessToken = 'mock-token';

      await mailService.sendMailReinitialisationMDP(user, accessToken);

      expect(mailerService.sendMail).toHaveBeenCalledWith({
        to: user.email,
        from: process.env.MAIL_ADMIN,
        subject: 'Réinitialisation de votre mot de passe',
        template: './reinitialisationMDP',
        context: {
          email: user.email,
          token: accessToken,
          url: process.env.URL_FRONT,
        },
      });
    });
  });

  describe('sendMailMotDePasseModifie', () => {
    it('should call sendMail with correct parameters', async () => {
      const user = new User();
      user.email = 'user@example.com';

      await mailService.sendMailMotDePasseModifie(user);

      expect(mailerService.sendMail).toHaveBeenCalledWith({
        to: user.email,
        from: process.env.MAIL_ADMIN,
        subject: 'Modification de votre mot de passe',
        template: './motDePasseModifie',
        context: {
          email: user.email,
        },
      });
    });
  });
});
