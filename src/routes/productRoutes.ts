import * as express from 'express';
const router = express.Router();

import Product from '../controllers/productController';

const ProductController = new Product();

router.route("/getProducts").get(ProductController.getAllProduct);
router.route("/createProduct").post(ProductController.createProduct);
router.route("/updateProduct").post(ProductController.updateProduct);
router.route("/removeProduct/:id").get(ProductController.removeProduct);

export default router;