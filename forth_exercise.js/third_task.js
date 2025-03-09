function store(products, newProducts) {
    let allProducts = {};
    for (let i = 0; i < products.length; i = i + 2) {
        allProducts[products[i]] = Number(products[i + 1]);
    }
    

    for (let i = 0; i < newProducts.length; i = i + 2) {
        
        if (newProducts[i] in allProducts) {
            allProducts[newProducts[i]] += Number(newProducts[i + 1]);

        }else {
            allProducts[newProducts[i]] = Number(newProducts[i + 1]);
        }
        
    }
    
    for (let [key, value] of Object.entries(allProducts)) {
        console.log(`${key} -> ${value}`);
    }
}

store(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)


