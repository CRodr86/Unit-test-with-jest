const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollar) => {
    let yen = 0;
    let euro = dollar / oneEuroIs.USD;
    yen = euro * oneEuroIs.JPY;
    return yen;     
}
console.log(fromDollarToYen(2.4))

const fromEuroToDollar = (euro) => {
    let dollar = 0;
    dollar = euro * oneEuroIs.USD;
    return dollar;
}
console.log(fromEuroToDollar(3.5))

const fromYenToPound = (yen) => {
    let pound = 0;
    let euro = yen / oneEuroIs.JPY;
    pound = euro * oneEuroIs.GBP;
    return pound;
}
console.log(fromYenToPound(500))

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };