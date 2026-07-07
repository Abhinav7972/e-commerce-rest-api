import jwt from 'jsonwebtoken'

export const jwtAuth = (req,res,next) =>{
    //read the token
     const token = req.headers["authorization"];

    //if no token error
     if(!token)
     {
        return res.status(401).send('unauthorised access')
     }

    //check if token is valid 
    try 
    {
    const payload = jwt.verify(token,"SOtTZG4qtMbgsw1e1aTBNAoNEA/JNUhAAPJHIXQPCCs=");
    console.log(payload)
    }
    catch(err)
    {
    return res.status(401).send('unauthorsed access');
    }

    //if valid call next middleware 
     next()
    //else give error
}