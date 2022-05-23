import * as express from 'express';
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({extended : false}));
// router.use(bodyParser.text({ type: 'text/plain' }))
router.use(bodyParser.json());

import productRouter from './productRoutes';
import productNewRouter from './v1/productRoutes';
import categoryRouter from './categoryRoutes';

// Routes
router.use("/product", productRouter);
router.use("/product/v1", productNewRouter);
router.use("/category", categoryRouter);

module.exports = router;