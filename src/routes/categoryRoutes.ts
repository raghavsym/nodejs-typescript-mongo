import * as express from 'express';
const router = express.Router();

import Category from '../controllers/categoryController';

const CategoryController = new Category();

router.route("/getAllProductsByCategories").get(CategoryController.getAllCategories);
router.route("/getAllProductsByCategories/:category").get(CategoryController.getAllProductsByCategories);


export default router;