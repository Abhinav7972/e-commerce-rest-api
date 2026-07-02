import ProductModel from "../models/product.model.js"

export default class ProductController
{

    getAllProduct(req,res){
        const product = ProductModel.getAll()
         res.status(200).send(product)
    }
    
    addProduct(req,res) {
       console.log(req.body);
       console.log('this is post request');
       res.status(200).send('request send successfully');
        
    }

    rateProduct(req,res) {}

    getOneProduct(req,res) {}


}