import mongoose from 'mongoose';

export interface CarTypeDoc extends mongoose.Document {
  _id: string;
  id: string;
  type: string;
  category: string;
  imageUrl: string;
}

// {
//   "type": "mersedes",
//   "imageUrl": "benz",
// }

const carTypeShema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, 'Type cannot be empty!']
  },
  category: {
    type: String,
    required: [true, 'Category cannot be empty!']
  },
  imageUrl: {
    type: String,
    default: '/img/cars/defaultCar.png'
  }
});

const CarType = mongoose.model<CarTypeDoc>('CarType', carTypeShema);

export default CarType;