  //while
//  let count = 10;

//  while(count > 0){
//     console.log(count);
//     count++;//increment

//  }
 
//  let count = 10;

//  while(count > 0){
//     console.log(count);
//     count--;//decrate

//  } //while

// --------------------------------------------------------



// // Do while
//  let count = 10
//  do {
//     count--;
//     console.log(count);

//  } while(count > 0);
 
//------------------------------------------------------------------

/* intialize , testing condition ]
     structure of  (for loop ) 
       code exmple 
        for(initailize, test , increment){
        statement
       }*/

// for 
// let fruits = ['🥕', '🥕', '🥑', '🧄', '🍌'];
// for(let i = 0 ; i< fruits.length; i++){
//     console.log(fruits[i]);
// }
//--------------------------------------------------------------------------------



/*  structure of for in loop is this :
       code:
       for(variable in object){
        statement 
       }
*/

// for in loop
// let inf ={
//     name: 'ahmed',
//     age:20,
//     Height:180,
//     adress: '150 street',
// } 

// for (const property in inf){
//     console.log(property)
// }


let inf ={  // full information displayed 
    name: 'ahmed',
    age:20,
    Height:180,
    adress: '150 street',
}  

for (const property in inf){
    console.log(property + ':' + inf[property])
}

