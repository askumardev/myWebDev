//node js/arrays.js

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'KeyBoard', price: 25 }
]

const filteredItems = items.filter((item) => {
  return item.price <= 100
})
console.log(filteredItems)

const itemNames = items.map((item) => {
  return item.name
})
console.log(itemNames)

const foundNames = items.find((item) => {
  return item.name === 'Book'
})
console.log(foundNames)

items.forEach((item) => {
  console.log(item.name)
})