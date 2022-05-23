import * as express from 'express';
const router = express.Router();

import Product from '../../controllers/v1/productController';

const ProductController = new Product();

// Version controle of api at app level
router.route("/createProduct").post(ProductController.createProduct);

export default router;