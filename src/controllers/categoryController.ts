import Category from '../models/categoriesModel';
import Product from '../models/productModel';

export default class CategoryController {
    constructor() {}

    /**
     * fetch all the children (categories+items) at all category levels for a category
     * @param req 
     * @param res 
     */
    public async getAllCategories(req: any, res: any) {
        let categories = await Category.find({category: /^\/books/});

        let categoryArray = [];
        categories.forEach((x)=>{
            x.category.forEach((c)=>{
                categoryArray.push(c);
            })
        })

        const query = {categories: {$in: categoryArray}};
        const products = await Product.find(query);
        res.status(200).send(products);
    }

    /**
     * Fetch all the first-level children (categories+items) for a category.
     * @param req 
     * @param res 
     */
    public async getAllProductsByCategories(req: any, res: any) {
        const category = req.params.category;
        const query = {
            category: new RegExp(category)
        }

        let categories = await Category.find(query);
    
        let categoryArray = [];
        categories.forEach((x)=>{
            x.category.forEach((c)=>{
                categoryArray.push(c);
            })
        })

        const subQuery = {categories: {$in: categoryArray}};
        const products = await Product.find(subQuery);
        res.status(200).send(products);
    }
}