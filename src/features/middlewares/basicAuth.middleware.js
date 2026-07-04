import  UserModel from '../user/user.model.js';

const basicAuthoriser =  (req,res,next) =>{

    //1. check if authorization is empty
    const authHeader = req.get('Authorization');

    if(!authHeader)
    {
        return res.status(401).send('No authorization details found')
    }

    console.log(authHeader);

    //2. Extract the credentials Basic [credentials]  //encoded credentials
    const base64credentials = authHeader.replace('Basic ', ''); 
     console.log(base64credentials);

    //3. Decode the credentials 
     const decodedcred =  Buffer.from(base64credentials, 'base64').toString('utf-8');
     console.log(decodedcred); //[username:password]

     //4. Split the credentials into username and password
      const creds = decodedcred.split(':');

      const user = UserModel.getAll().find((u)=> u.email == creds[0] && u.password == creds[1]);

      if(user)
      {
       next();
      }
      else 
      {
        return res.status(401).send('incorrect credentials')
      }
}

export default basicAuthoriser;