const repeatString = function(str, num) {
    if (num == 0) {
        return "";
    } else if (num < 0) {
        return 'ERROR';
    }

    let i = 1;
    let output = str;
    while (i < num) {
        output += str;
        i++;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
