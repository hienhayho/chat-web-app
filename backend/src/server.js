import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
import connection from './configs/database.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use('/api/auth', authRouter);

(async () => {
    try {
        await connection();
        app.listen(PORT, HOST, () =>
            console.log(`App is listening at http://${HOST}:${PORT}`)
        );
    } catch (error) {
        console.log(error);
    }
})();