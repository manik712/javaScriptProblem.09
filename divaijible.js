//1. if the  number is divisible by 3 then instead of the number show 'foo'
//1. if the  number is divisible by 5 then instead of the number show 'bar'
//1. if the  number is divisible by both 3  and 6 then instead of the number show 'foobar'
// outpit from 1-50



// for( i = 1 ; i <= 50; i++){
//     if(i%3===0){
//      console.log('foo');

//     }

//     else{
//     console.log(i);

//     }


// }



for( i = 1 ; i <= 50; i++){
  


     if (i%3===0 && i%5===0){
        console.log('foobar');
    }





  else  if(i%3===0){
     console.log('foo');

    }

    

  else  if(i%5===0){
        console.log('bar');
   
       }
   
     else{
     console.log(i);

     }

    }




// for( i = 1 ; i <= 50; i++){
//     if(i%5===0 && i%3===0){
//      console.log('foobar');

//     }

//     else{
//     console.log(i);

//     }


// }
















