// Testing Objects for Properties
var  dishes = {
    plates:3,
    cups:5,
    forks:1,
    bowls:9,
   
   };
   
   delete dishes.cups;
   console.log(dishes);
   console.log(dishes.hasOwnProperty('plates'));
   console.log(dishes.hasOwnProperty('cups'));
