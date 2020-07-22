import express from 'express';
import * as carController from '../controllers/carController';
import * as authController from '../controllers/authController';

const router = express.Router();

router.route('/')
  .get(carController.getCars)
  .post(authController.protect, carController.createCar);

router.route('/filter')
  .get(carController.getFilter)


// router.route('/seed')
//   .get(carController.seedCar)

router.route('/:id')
  .get(carController.getCar)
  .patch(authController.protect, carController.updateCar)
  .delete(authController.protect, carController.deleteCar);

export default router;