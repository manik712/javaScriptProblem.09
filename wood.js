  //  fixed: per item wood requirements 
    
    // 1.chair....3cft
// 2.table....10cft
// bed........50cft


// vary quenty...

function woodCalculator(chirQuentity, tableQuentity , bedQuentity){
   const  perChairWood =3;
   const  perTableWood =10;
   const perBedWood =50;

   const ChairWood =perChairWood * chirQuentity;
   const tableWood=perTableWood * tableQuentity;
   const bedWood =perBedWood *bedQuentity;


 const totalWoods =ChairWood + tableWood+ bedWood;

    return totalWoods;

}



const totalWood = woodCalculator(2, 2, 5);

console.log('total wood requered:',totalWood);



