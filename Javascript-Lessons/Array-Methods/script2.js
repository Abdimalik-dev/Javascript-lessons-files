// Array method  Map
// MAP
const items = [
    { name: 'Bike',  price:100},
    { name: 'TV',    price:200},
    { name: 'Album', price:10},
    { name: 'Bool',  price:5},
    { name: 'phone', price:500},
    { name:'Computer', price:1000},
    { name: 'keypoard', price:25},

]

const ItemsNames = items.map((item) =>{
    return item.price
})

console.log(ItemsNames)