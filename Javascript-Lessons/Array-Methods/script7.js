 // Total method
const items = [
    { name: 'Bike',  price:100},
    { name: 'TV',    price:200},
    { name: 'Album', price:10},
    { name: 'Bool',  price:5},
    { name: 'phone', price:500},
    { name:'Computer', price:1000},
    { name: 'keypoard', price:25},

]

const total =  items.reduce((currentTotal, item) =>{
    return item.price + currentTotal
}, 0)

console.log(total)