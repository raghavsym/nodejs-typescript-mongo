
import Product from '../../models/productModel';
import { INProduct } from '../../interfaces/productInterface'

export default class CategoryController {
    constructor() {}

    /**
     * 
     * @param req create product
     * @param res 
     */

    public async createProduct(req: any, res: any) {
      
        const product: INProduct = {
            name: req.body.name,
            price: req.body.price,
            currency: req.body.currency,
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
}