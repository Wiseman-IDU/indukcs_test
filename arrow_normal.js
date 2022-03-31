/* https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
   https://webisfree.com/2017-06-08/es-6-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98(arrow-function)-%EC%A0%95%EB%B3%B4-%EB%B0%8F-%EC%98%88%EC%A0%9C%EB%B3%B4%EA%B8%B0
   https://flaviocopes.com/javascript-functions-vs-arrow-functions/
*/

/*
// Function declaration
function greet(who) {
    console.log(`Hello, ${who}!`);
}

// Function expression
const greet1 = function(who) {
    console.log(`Hello, ${who}!`);
}

// Arrow
const greet2 = (who) => {
    console.log(`Hello, ${who}!`);
}

greet('1');
greet1('2');
greet2('3');

function sum(a, b) {
    console.log(a + b);
}

const sum1 = function(a, b) {
    console.log(a + b);
}

const sum2 = (a, b) => {
    console.log(a + b);
}

sum(1, 3);
sum1(2, 4);
sum2(3, 5);
*/

const car = {
    brand: 'Ford',
    model: 'Fiesta',
    start: function() {
        console.log(`Started ${this.brand} ${this.model}`)
    },
    stop: () => {
        console.log(`Stopped ${this.brand} ${this.model}`)
    },
    others: (a, b) => {
        console.log(`others ${a} -> ${b}`)
    },
}
console.log(car.brand);
car.start();
car.others('start', 'stop');