import express from 'express';

import * as authController from '../controllers/authController';
import * as userController from '../controllers/userController';
import currentUserMiddleware from '../utils/current-user';

const router = express.Router();

router.route('/').get(userController.getUsers);
router.route('/sign-in').post(authController.signIn);
router.route('/sign-up').post(authController.signUp);
router.route('/change-password').patch(authController.protect, userController.changePassword);
router.route('/me').patch(
  authController.protect,
  userController.uploadUserPhoto,
  // userController.resizeUserPhoto,
  userController.updateMe
);
router.route('/current-user').get(currentUserMiddleware, authController.currentUser);
router.route('/check-auth').get(authController.checkAuth);
router.route('/logout').get(authController.logout);
// // delete test
// router.route('/delete-all-users').delete(userController.deleteAllUsers);
router.route('/:id').get(userController.getUser);

export default router;