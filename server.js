//import express
import express from 'express'
import ProductRouter from './src/features/product/controllers/product.routes.js';



//create server
const server = new express();


// for all request related to product, redirect to product routes
//localhost:3200/api
server.use('/api/product',ProductRouter)

// create request handlers
server.get('/',(req,res)=> res.send('welcome to e-commerce api'))


//add listners
server.listen(3000,()=> console.log('server began at 3000'))