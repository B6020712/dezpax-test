import express, { Request, Response, Router } from 'express';
import storesRouter from './stores';

const app = express();
const port = process.env.BACKEND_PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        message: "Full Stack Developer Test"
    });
});

app.use('/stores', storesRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});