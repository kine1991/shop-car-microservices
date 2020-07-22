import mongoose from 'mongoose';

import app from './app';

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL!, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology:true
    })
    .then(() => console.log('DB (auth service) connection successful!'))
    .catch(() => console.log('DB (auth service) connection failed!'));

  return mongoose.connection;
}

const startServer = () => {
  console.log('startServer (auth)');

  const port = process.env.PORT || 3002;

  app.listen(port, () => {
    console.log(`App (auth) running on port ${port}...`);
  });
}

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer)



