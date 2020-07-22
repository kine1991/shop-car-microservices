import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { BadRequestError } from '../utils/errors';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  // console.log('cookies2', req.cookies)
  try {
    if (!req.cookies?.jwt) {
      next(new BadRequestError('You are not logged in! Please log in to get access.', 401));
    }
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string }

    const response = await axios.get(`${process.env.AUTH_API_URL}/users/${decoded.id}`);
    const currentUser = response.data.data.user;
    if (!currentUser) {
      next(new BadRequestError('The user belonging to this token does no longer exist.', 401));
    }
    // @ts-ignore
    req.user = currentUser;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      next(new BadRequestError('invalid token.', 401));
    }
    // console.log('error@', error);
    // console.log('error@@', error.name);

    next(new BadRequestError('Something went wrong', 500));
  }
};