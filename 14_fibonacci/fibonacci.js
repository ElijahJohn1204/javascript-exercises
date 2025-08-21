const fibonacci = function(fib) {
    const index = parseInt(fib);
    if (index < 0) return 'OOPS';

    let prev = 0;
    let current = 1;
    if (index == 0) return prev;
    if (index == 1) return current;

    let sum = prev + current;
    for (let i = 2; i < index; i++) {
        prev = current;
        current = sum;
        sum = prev + current;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
