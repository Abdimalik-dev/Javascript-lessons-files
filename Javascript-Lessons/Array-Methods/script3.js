const items = [
    { name: 'Bike',  price:100},
    { name: 'TV',    price:200},
    { name: 'Album', price:10},
    { name: 'Bool',  price:5},
    { name: 'phone', price:500},
    { name:'Computer', price:1000},
    { name: 'keypoard', price:25},

]

const foundItem = items.find((item) =>{
    return item.name === 'Album'
})

console.log(foundItem)