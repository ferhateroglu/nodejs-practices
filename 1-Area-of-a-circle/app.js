const calculate = require('./calculateCricleArea');
let r = process.argv[2];
let cricleArea = calculate.calculateArea(r);
console.log('cricle area is '+cricleArea);