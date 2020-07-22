import express from 'express';
import cookieParser from 'cookie-parser';

import userRouter from './routes/userRoutes';
import globalErrorHandler from './controllers/errorController';

const app = express();

// bodyParser
app.use(express.json({ limit: '10kb' })); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// cookie
app.use(cookieParser())

// ROUTES
app.use('/api/auth/users', userRouter);

// ERROR HANDLER
app.use(globalErrorHandler);

export default app;