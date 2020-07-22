import express from 'express';
import * as carTypeController from '../controllers/carTypeController';

const router = express.Router();

router.route('/')
  .get(carTypeController.getCarTypes)
  .post(carTypeController.createTypes)

// router.route('/seed').get(carTypeController.seedTypes)

export default router;