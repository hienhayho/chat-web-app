import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.routes.js';
import messageRouter from './routes/message.routes.js';
import userRouter from './routes/user.routes.js';
import connection from './configs/database.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use('/api/auth', authRouter);
app.use('/api/messages', messageRouter);
app.use('/api/users', userRouter);

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