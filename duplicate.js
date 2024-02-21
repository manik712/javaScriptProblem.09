const names = [ 'abul', 'babul', 'kabul', 'chabul','abul', 'dabul', 'gabul', 'edul', 'babul'];

function remoteDuplicate(names){
         const unique = [];
        for( let i=0 ; i<names.length ; i++){ 
        const index = i;
        const elements =names[index];
        // console.log(elements)
         if(unique.includes (elements) === false) {
           unique.push(elements);
         }


        }

return unique;

}

// console.log(myNames);

const uniqueNames = remoteDuplicate(names);
console.log(uniqueNames);








