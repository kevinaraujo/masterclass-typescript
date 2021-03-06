import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Kevin', email: 'kevin@gmail.com'},
    { name: 'Joao', email: 'joao@gmail.com'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: { name: 'Kevin', email: 'kevin@gmail.com'},
            message: { subject: 'Teste', body: 'Corpo do email' }
        });

        res.send();
    }
}