










const shoppingCard = [
  {name:'shoe', price:1200 ,quentity:2},
  {name:'shirt', price:2200 ,quentity:5},
  {name:'pant', price:3200,quentity:4},
  {name:'balt', price:600,quentity:3},
  {name:'balt', price:600,quentity:4}
  
]

function totalCost(products){

        let sum =0;
     for(let i = 0; i < products.length ; i++){
       const index =i ;
       const product =products[index];
       const productTotal = product.price * product.quentity

          sum = sum+productTotal;
  //      console.log(product);


     }


return sum

}



const myProduct = totalCost(shoppingCard);
  console.log(myProduct);












