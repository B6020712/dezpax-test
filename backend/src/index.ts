import express, { Request, Response, Router } from 'express';
import 'dotenv/config';
import cors from 'cors';
import storesRouter from './stores';
const app = express();

var corsOption = {
    origin: `http://${process.env.BASEURL}:${process.env.FRONTEND_PORT}`,
    methods: ['GET']
}

app.use(cors(corsOption));
const server_port = process.env.BACKEND_PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        message: "Full Stack Developer Test"
    });
});

app.use('/stores', storesRouter);

app.listen(server_port, () => {
    console.log(`Listening on port ${server_port}`);
});