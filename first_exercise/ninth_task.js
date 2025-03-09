function solve(fruit, weight, price) {
    let money = weight * price / 1000
    console.log(`I need $${money.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`)
}

solve("Apple", 1500, 2.3)