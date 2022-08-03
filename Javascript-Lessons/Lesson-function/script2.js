function myFunc(theObject) {
    theObject.make = 'Toyota';
}

const mycar = {
    make: 'handa',
    model: 'Accord',
    year: 1222,
};

//  x get the value "Honda "
const x = mycar.make;
console.log(x)

// the make property is changed by the function 

myFunc(mucar);

// y gets the value "Toyota"

const y = mycar.make;