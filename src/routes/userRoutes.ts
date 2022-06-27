import * as express from 'express';
const router = express.Router();

import User from '../controllers/userController';

const UserController = new User();

router.route("/register").post(UserController.registerUser);
router.route("/login").post(UserController.login);
router.route("/getAllUser").get(UserController.getAllUser);

export default router;