const reverseString = function(str) {
    arr = [];
    for (let i = str.length - 1; i > -1; i--) {
        arr.push(str.at(i));
    }
    return arr.join("");

};

// Do not edit below this line
module.exports = reverseString;
