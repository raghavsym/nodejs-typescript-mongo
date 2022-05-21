import * as express from 'express';
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.text({ type: 'text/plain' }))

import productRouter from './productRoutes';
import userRouter from './userRoutes';

// Routes
router.use("/product", productRouter);
router.use("/user", userRouter);

module.exports = router;