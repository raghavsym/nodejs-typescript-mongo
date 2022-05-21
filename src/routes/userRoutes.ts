import * as express from 'express';
const router = express.Router();

import User from '../controllers/userController';

const UserController = new User();

router.route("/getAllUsers").get(UserController.getAllUser);

export default router;