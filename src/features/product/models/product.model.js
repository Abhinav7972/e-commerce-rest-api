export default class ProductModel
{
    constructor(id,name,description,imageURL,category,price,sizes)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageURL = imageURL;
        this.category = category;
        this.price = price;
        this.sizes = sizes;
    }

    static getAll()
    {
        return products;
    }

    static add(product)
    {
      product.id = products.length+1;
      products.push(product);
      return product;
    }
}


let products = [
    new ProductModel(1,'Batman T-shirt','cool T-shirt','https://i.pinimg.com/1200x/30/4b/d6/304bd6fd8aa03619144a510b0e8ba82a.jpg','T-shirts',300, ['S','M','XL','XXL']),
    new ProductModel(2,'spiderman T-shirt','spidey T-shirt','https://i.pinimg.com/736x/ba/d9/09/bad90919555f37155418cc2d31b2b392.jpg','T-shirts',500,['S','M','XL','XXL']),
    new ProductModel(3,'Ironman shirt','Iron man shirt','https://i.pinimg.com/1200x/5d/c8/b6/5dc8b6ca9a05ee57be085df201e375d0.jpg','shirts',1500,['S','M','XL','XXL']),

]