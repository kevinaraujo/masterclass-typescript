import { Request, Response } from 'express';

const users = [
    { name: 'Kevin', email: 'kevin@gmail.com'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
}