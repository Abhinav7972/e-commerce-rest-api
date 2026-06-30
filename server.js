//import express
import express from 'express'

//create server
const server = new express();

// create request handlers
server.get('/',(req,res)=> res.send('welcome to e-commerce api'))


//add listners
server.listen(3000,()=> console.log('server began at 3000'))