import express from 'express'
import UserController from './user.controller.js';

const route =  express.Router();

const usercontroller = new UserController();


route.post('/signIN',usercontroller.signIn);
route.post('/signUP',usercontroller.signUP);


export default route;