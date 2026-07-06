import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken'

export default class UserController
{
    signUP(req,res)
    {
       const {name,email,password,type} = req.body;
      const users = UserModel.signUP(name,email,password,type)
       res.status(201).send(users)
    }


    signIn(req,res)
    {
      const result = UserModel.signIN(req.body.email,req.body.password);

      if(!result)
      {
        return res.status(400).send('invalid credentials')
      }
      else 
      {
        //create token
        const token = jwt.sign({userID:result.id,email:result.email},"SOtTZG4qtMbgsw1e1aTBNAoNEA/JNUhAAPJHIXQPCCs=",
          {
           expiresIn: '1h',
          });

        //send token
        return res.status(200).send(token)
      }
    }
}