import * as express from 'express';
const bodyParser = require('body-parser');
import * as authentication  from '../middleware/authentication'

const router = express.Router();
router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());

import productRouter from './productRoutes';
import productNewRouter from './v1/productRoutes';
import categoryRouter from './categoryRoutes';
import userRouter from './userRoutes';

// Routes
router.use("/product", productRouter);
router.use("/product/v1", productNewRouter);
router.use("/category", categoryRouter);
router.use("/user", userRouter);
router.use("/info", authentication.verifyJwt, userRouter);

module.exports = router;