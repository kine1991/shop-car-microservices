import { Request, Response } from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import Car from '../models/carModel';
import catchAsync from '../utils/catchAsync';
import { BadRequestError } from '../utils/errors';


export const getCars = catchAsync(async (req: Request, res: Response) => {
  // console.log('@@@@@');
  // console.log('req.query', req.query);
  const cars = await Car.find(req.query);
  // const cars = await Car.find({});

  res.status(200).json({
    results: cars.length,
    data: {
      cars
    }
  });
});

export const createCar = catchAsync(async (req: Request, res: Response) => {
  // @ts-ignore
  const newCar = await Car.create({ ...req.body, publisher: req.user?._id });

  res.json({
    car: newCar
  });
});

export const getCar = catchAsync(async (req: Request, res: Response) => {
  const car = await Car.findOne({ _id: req.params.id });
  const response = await axios.get(`${process.env.AUTH_API_URL}/users/${car?.publisher}`);

  res.status(200).json({
    data: {
      car,
      publisher: response.data.data.user
    }
  })
});

export const getFilter = catchAsync(async (req: Request, res: Response) => {
  const brands = await Car.distinct('brand');
  const transmissions = await Car.distinct('transmission');
  const drive_trains = await Car.distinct('drive_train');
  const fluel_types = await Car.distinct('fluel_type');
  const colors = await Car.distinct('color');
  const years = await Car.distinct('year');
  const types = await Car.distinct('type');
  // const minPrice: any = await Car.find().sort({ price: 1}).limit(1);
  // const maxPrice = await Car.find().sort({ price: -1}).limit(1);
  res.status(200).json({
    filter: {
      brands,
      transmissions,
      drive_trains,
      fluel_types,
      colors,
      years,
      types,
      // prices: [maxPrice.price, minPrice.price]
    }
  })
});

export const updateCar = catchAsync(async (req: Request, res: Response) => {
  const car = await Car.findById(req.params.id);

  // @ts-ignore
  if(car?.publisher !== car?.publisher.toString())  throw new BadRequestError(`You do not have any permission to edit this article`, 401);

  const editedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true
  });
  res.status(200).json({
    car: editedCar
  });
});

export const deleteCar = catchAsync(async (req: Request, res: Response) => {
  const car = await Car.findById(req.params.id);
  // @ts-ignore
  if(req.user?.role === 'admin' || req.user?._id.toString() === car?.publisher.toString()) {
    await Car.findByIdAndRemove(req.params.id);
  } else {
    throw new BadRequestError(`You do not have any permission to delete this car`, 401);
  }
  res.status(200).json({
    data: null
  });
});


export const seedCar = catchAsync(async (req: Request, res: Response) => {
  const cars = fs.readFileSync(path.resolve(__dirname, "./cars_before_publisher.json"), "utf8");
  const parsedCars = JSON.parse(cars);
  // console.log(JSON.parse(cars));
  // const parseType = JSON.parse(types);
  const users = await axios.get(`${process.env.AUTH_API_URL}/users`);
  const ids = users.data.data.users.map((user: any) => {
    return user._id
  });

  console.log('ids', ids);
  console.log('cars', parsedCars);
  const createdCars = parsedCars.map(async (car: any) => {
    const publisher = ids[Math.floor(Math.random() * ids.length)];
    car.publisher = publisher;
    const newCar = await Car.create(car);
    return newCar;
  });
  // console.log('$$', users.data.data.users);
  res.status(200).json({
    cars: createdCars
  })
});