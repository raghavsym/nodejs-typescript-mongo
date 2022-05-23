import Category from '../models/categoriesModel';
import Product from '../models/productModel';
import { IProduct } from '../interfaces/productInterface'

export default class CategoryController {
    constructor() {}

    /**
     * 
     * @param req create product
     * @param res 
     */

    public async createProduct(req: any, res: any) {
      
        const product: IProduct = {
            name: req.body.name,
            price: req.body.price,
            categories: [req.body.category],
            created: new Date()
        }

        try{
            await Product.create(product);
            res.status(200).send({
                message: "Product created successfully"
            });
        }catch(e){
            console.log(e)
            res.status(400).send({
                message: "Error occured."
            });
        }
     
    }

    /**
     * Get all product
     * @param req 
     * @param res 
     */
    public async getAllProduct(req: any, res: any) {
        
        try{
            const products: any = await Product.find();
            res.status(200).send({
                message: "Product fetched successfully",
                data: products
            });
        }catch(e){
            console.log(e)
            res.status(400).send({
                message: "Error occured."
            });
        }
    }

    /**
     * Update product
     * @param req 
     * @param res 
     */
    public async updateProduct(req: any, res: any) {
        const productId = req.body.productId;
    
        try{
            const updateProduct: any = {
                name: req.body.name,
                price: req.body.price
            }
        
            await Product.findByIdAndUpdate(productId, updateProduct)
            res.status(200).send({
                message: "Product updated successfully."
            });
        }catch(e){
            console.log(e)
            res.status(400).send({
                message: "Error occured."
            });
        }
    }

    /**
     * Remove product permanently
     * @param req 
     * @param res 
     */
    public async removeProduct(req: any, res: any) {
        const productId = req.params.id;
        if(!productId){
            res.status(200).send({
                message: "Please provide product id."
            }); 
        }
        try{
            await Product.deleteOne({ _id: productId });
            res.status(200).send({
                message: "Product deleted successfully."
            });
        }catch(e){
            console.log(e)
            res.status(400).send({
                message: "Error occured."
            });
        }

    }
}