import mongoose from 'mongoose';

export interface CarDoc extends mongoose.Document {
  _id: string;
  id: string;
  brand: string;
  model_car: string;
  type: string;
  publisher: string;
  color: string;
  fluel_type: string;
  drive_train: string;
  transmission: string;
  price: number;
  year: number;
  imageUrl: string,
  description: string
}

// {
//   "brand": "mersedes",
//   "model_car": "benz",
//   "type": "sedan",
//   "publisher": "5eff3426eb343e00323acc26",
//   "color": "red",
//   "price": 1000,
//   "fluel_type": "gasoline",
//   "drive_train": "awd",
//   "transmission": "manual",
//   "horsepower": 222,
// }

const carShema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, 'Brand cannot be empty!']
  },
  model_car: {
    type: String,
    required: [true, 'Model cannot be empty!']
  },
  type: {
    type: String,
    required: [true, 'Body cannot be empty!']
  },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  color: {
    type: String
  },
  price: {
    type: Number,
    required: [true, 'Price cannot be empty!']
  },
  year: {
    type: Number,
    required: [true, 'Year cannot be empty!']
  },
  fluel_type: {
    type: String
  },
  drive_train: {
    type: String
  },
  transmission: {
    type: String
  },
  imageUrl: {
    type: String,
    default: '/img/cars/defaultCar.png'
  },
  description: {
    type: String,
    required: [true, 'Description cannot be empty!']
  }
}, { strict: false });

const Car = mongoose.model<CarDoc>('Car', carShema);

export default Car;