//productID userID quantity 

export default class cartItemmodel
{
    constructor(productID,userID,quantity,id)
    {
       this.productID = productID,
       this.userID = userID,
       this.quantity = quantity
    }

    static add(productID,userID,quantity)
    {
       const cartItem = new cartItemmodel(productID,userID,quantity);
       cartItem.id = cartItems.length + 1;
       cartItems.push(cartItem);
       return cartItem;
    }

    static get(userID)
    {
        return cartItems.filter(i=> i.userID == userID)
    }
}

let cartItems = [
    new cartItemmodel(1,2,1,1)
]