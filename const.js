'use strict';
let arr = ['a,b,c'];
let obj = {
    0: 'a',
    1: 'b',
    p: 'c',
};
obj[11] = 'q,w,3';
console.log(obj[0]);
console.log(arr[0]);
console.log(obj[11]);
console.log(obj.p);

let storeDescription = {
    budget: 10000,
    employees: ['q', 'w', 'e'],
    products: { товар: 10000, товар2: 2 },
    open: true,
};
//const answer = prompt(Number('You are over 18', ''));
//console.log(answer + 5);
//document.write(storeDescription);

let incr = 10,
    decr = 10;

++incr;
--decr;

console.log(incr++);
console.log(decr--);
console.log(42 % 3);
