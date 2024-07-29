const _ = require('lodash');

let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13];

const chunkedArray = _.chunk(arr , 3)
console.log(chunkedArray);