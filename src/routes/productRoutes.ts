import * as express from 'express';
const router = express.Router();

import Product from '../controllers/productController';

const ProductController = new Product();

router.route("/getAllProducts").get(ProductController.getAllProduct);

export default router;