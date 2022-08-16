import nodemailer from 'nodemailer';
import { MailAdapter, SendMaildata } from "../mail-adapter";

// envio de email

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ecd222a95fc98d",
      pass: "03158d2c79e991"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMaildata) {

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Smooth <josewilson791@gmail.com>',
        subject: subject,
        html: body,
    });

    }
}