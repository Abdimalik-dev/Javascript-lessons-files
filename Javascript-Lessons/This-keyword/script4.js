  //create an object 
  const person = {
    price:  '   Each 25kg ' + ' kiish' + 12,
    item: "sugar (50 | xabo) " ,
    id: " ID:" + 30982 ,
    Total: " Total" + 100,
    fullName:function() {
        return this.id + this.price  + '' + this.item ;
    }

};

// dispaly data from the object :
document.getElementById("demo").innerHTML = person.fullName();