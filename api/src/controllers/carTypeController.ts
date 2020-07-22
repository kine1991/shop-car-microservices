import { Request, Response } from 'express';
import CarType from '../models/carTypeModel';
import catchAsync from '../utils/catchAsync';

import fs from 'fs';
import path from 'path';

export const getCarTypes = catchAsync(async (req: Request, res: Response) => {
  const types = await CarType.find({});

  res.status(200).json({
    results: types.length,
    data: {
      types
    }
  });
});

export const createTypes = catchAsync(async (req: Request, res: Response) => {
  const createdTypes = await CarType.create(req.body);

  res.status(200).json({
    data: {
      createdTypes
    }
  });
});

export const seedTypes = catchAsync(async (req: Request, res: Response) => {
  const types = fs.readFileSync(path.resolve(__dirname, "./types.json"), "utf8");
  console.log(JSON.parse(types));
  const parseType = JSON.parse(types);

  const parseTypeAsync = parseType.map(async(type: any) => {
    const createdTypes = await CarType.create(type);
    console.log(type);
    return createdTypes
  })

  res.status(200).json({
    data: {
      types: parseTypeAsync
    }
  });
});
