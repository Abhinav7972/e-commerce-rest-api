import UserModel from "./user.model.js";

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
        return res.send('login successful')
      }
    }
}