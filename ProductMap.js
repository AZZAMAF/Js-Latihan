const products = [
  { name: "Sepatu", price: 100000 },
  { name: "Kaos", price: 50000 },
  { name: "Topi", price: 30000 }
];

const discountsProduct = products.map(product => {
    return{
        ...product,
        discount: product.price * 0.1,
        total:product.price * 0.9
    }
})

// console.log(discountsProduct)

const cheapProducts = products.filter(product => {
    if(product.price < 70000)
    return {
        ...product,
        name: product.name,
        price: product.price,
    }
    
});

console.log(cheapProducts);

const ExProducts = products.filter(product => product.price > 40000)
const expensiveProducts = ExProducts.map(ex =>{
    return{
        name: ex.name.toUpperCase(),
        price: ex.price,
    }
})

console.log(ExProducts);
console.log(expensiveProducts);

