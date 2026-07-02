//manage path to product controllers 



//1. import express 
import express from 'express'
import ProductController from './product.controller.js';
import {upload} from '../../middlewares/fileupload.middleware.js'

//2. initialise express router 
const router =  express.Router();
const productController = new ProductController()

//3. all paths to controller methods
router.get('/',productController.getAllProduct);
router.post('/',
    upload.single('imageURL'),
    productController.addProduct)

export default router;