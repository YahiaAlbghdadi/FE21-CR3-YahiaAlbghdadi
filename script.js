function calculatInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    return `your bill is ${starterPrice + maindishPrice + dessertPrice + beveragePrice}$.`
}

console.log(calculatInvoice(20, 0, 21, 88), calculatInvoice(10, 2, 299, 1), calculatInvoice(28, 47, 8, 10), calculatInvoice(29, 23, 8, 77))

function studentInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrce) {
    var dishesPriceMinus10Per = starterPrice + maindishPrice + dessertPrice;
    var dishesPriceMinus10Per = dishesPriceMinus10Per / 100 * 90;
    return `your bill with the dishes discount is ${dishesPriceMinus10Per + beveragePrce}$.`
}

console.log(studentInvoice(10, 28, 92, 22), studentInvoice(20, 11, 8, 2), studentInvoice(22, 22, 22, 22, ))