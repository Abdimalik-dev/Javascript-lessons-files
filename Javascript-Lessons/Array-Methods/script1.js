// Array method filter
// filter
const items = [
    { name: 'Bike',  price:100},
    { name: 'TV',    price:200},
    { name: 'Album', price:10},
    { name: 'Bool',  price:5},
    { name: 'phone', price:500},
    { name:'Computer', price:1000},
    { name: 'keypoard', price:25},

]

const filteredItems = items.filter((item) =>{
    return item.price <= 100
})

console.log(filteredItems)