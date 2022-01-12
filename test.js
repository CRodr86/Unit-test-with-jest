// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect(dollars).toBe(expected);
})

test("2.4 dollars should be 255.8 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(2.4)
    const expected = 2.4 / 1.2 * 127.9; 
    expect(yens).toBe(expected);
})

test("500 yens should be 3.13 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(500)
    const expected = 500 / 127.9 * 0.8; 
    expect(pounds).toBe(expected);
})