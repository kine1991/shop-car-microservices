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
    .then(() => console.log('DB (api service) connection successful!'))
    .catch(() => console.log('DB (api service) connection failed!'));

  return mongoose.connection;
}

const startServer = () => {
  console.log('startServer (api)');

  const port = process.env.PORT || 3001;

  app.listen(port, () => {
    console.log(`App (api) running on port ${port}...`);
  });
}

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer)



