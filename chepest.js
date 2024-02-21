const phonesss =[
     {name:'samsung', camera:15, storage:'32gb', price:35000, color :'silver'},
     {name:'walton', camera:12, storage:'32gb', price:22000, color :'silver'},
     {name:'iPhone', camera:120, storage:'32gb', price:120000, color :'silver'},
     {name:'xaomi', camera:12, storage:'32gb', price:52000, color :'silver'},
     {name:'oppo', camera:10, storage:'32gb', price:20000, color :'silver'},
     {name:'nokia', camera:1, storage:'32gb', price:44000, color :'silver'},
     {name:'htc', camera:12, storage:'32gb', price:62000, color :'silver'}



];

function cheapestPhone(phones){
      
         let chepest =phones[0];
        for(let i=0; i<phones.length; i++){
          const index = i;
          const element =phones[index];
          //  console.log(element);
        if(element.price < chepest.price){
            chepest=element;

        }



        }

     return chepest;


}

const mySelection = cheapestPhone(phonesss)

console.log(mySelection);


