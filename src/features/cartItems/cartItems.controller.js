import cartItemmodel from "./cartItems.model.js";

export default class cartItemcontroller 
{
    add(req,res)
    {
        const {productID, quantity} = req.query;
        const userID = req.userID;
        cartItemmodel.add(productID,userID,quantity);
        res.status(201).send('cart is updated')
    }

    get(req,res)
    {
     const userID = req.userID;
     const items = cartItemmodel.get(userID);
     return res.status(200).send(items);
    }
}