//manage path to product controllers 



//1. import express 
import express from 'express'
import ProductController from './product.controller.js';

//2. initialise express router 
const router =  express.Router();
const productController = new ProductController()

//3. all paths to controller methods
router.get('/',productController.getAllProduct);
router.post('/',productController.addProduct)

export default router;