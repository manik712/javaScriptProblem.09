const country = 'Bangladesh'
const age = 52;
const  isIndependent = true ;
const student ={
     id:121,
     class:11,
     name:'manik'
}

const friends = [12, 42, 11, 17, 21, 16, 15, 20]

function add( num1 , num2){

   return num1+ num2;

}





console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);
console.log(typeof add);


console.log(Array.isArray(friends));

console.log(friends.includes(15));
console.log(friends.includes(100));

if(friends.indexOf(15) !==-1){
  console.log('gfdf')
}
else{

console.log('nai')

}

const myFriend = [121, 45, 40, 78, 65, 455]


const allFriend = myFriend.concat(friends);
console.log(allFriend);



