
const shoppingCard = [
      {name:'shoe', price:1200},
      {name:'shirt', price:2200},
      {name:'pant', price:3200},
      {name:'balt', price:600}
      


]

function totalCost(products){

            let sum =0;
         for(let i = 0; i < products.length ; i++){
           const index =i ;
           const product =products[index];
              sum = sum+product.price;
      //      console.log(product);


         }


return sum

}



const myProduct = totalCost(shoppingCard);
      console.log(myProduct);













