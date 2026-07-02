import ProductModel from "../models/product.model.js"

export default class ProductController
{

    getAllProduct(req,res){
        const product = ProductModel.getAll()
         res.status(200).send(product)
    }
    
    addProduct(req,res) {
    console.log(req.body);
    //    console.log('this is post request');
    //    res.status(200).send('request send successfully');
        const {name,price,sizes} = req.body;
           
        const newProduct = {
            name,
            price: parseFloat(price),
            sizes : sizes.split(','),
            imageURL: `/uploads/${req.file.filename}`,
        }

        const createdRecord = ProductModel.add(newProduct);
        res.status(201).send(createdRecord)
    }

    rateProduct(req,res) {}

    getOneProduct(req,res) {
        const id = req.params.id;
        const product = ProductModel.get(id);
        if(!product)
        {
            res.status(404).send('product not found')
        }
        else
        {
          res.status(200).send(product)
        }
    }


    filerProduct(req,res)
    {
        //extract values from query params
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const category = req.query.category;
        const result = ProductModel.filter(minPrice,maxPrice,category)
        res.status(200).send(result)
    }


}