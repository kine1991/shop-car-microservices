import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import carRouter from './routes/carRoutes';
import carTypeRouter from './routes/carTypeRoutes';
import globalErrorHandler from './controllers/errorController';

const app = express();

// bodyParser
app.use(express.json({ limit: '10kb' })); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/cars', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send('root')
});

// cookie
app.use(cookieParser());

// app.get('/api', (req, res) => {
//   res.send('/api')
// });

app.get('/api/cars2', (req, res) => {
  res.send('cars /api')
});

// ROUTES
app.use('/api/cars/types', carTypeRouter);
app.use('/api/cars', carRouter);

// ERROR HANDLER
app.use(globalErrorHandler);

export default app;