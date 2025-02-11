const products =[
    {
        id:1,name:"Widget",price:50,quantity:120
    },
    {
        id:2 ,name:"Gadget" ,price:30 ,quantity:80
    },
    {id:3,name:"Doohickey",price:100,quantity:200}

]
const updated= products.map(product=>{
    if(product.quantity>100){
        product.price=product.price*90;
    }
    return product;
}
 );

 const discountProduct= updated.filter(product=>
      product.quantity>100
 );
 discountProduct.forEach(product=>{
    console.log(`Product: ${product.name} ,New Prices:${product.price},Quantity:${product.quantity}` )
 });
 console.log("updated Products",updated);
 console.log("Discounted Products",discountProduct);

