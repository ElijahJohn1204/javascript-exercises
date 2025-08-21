const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz1234567890'

    const clean = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const cleanReverse = clean.split('').reverse().join('');

    return clean == cleanReverse
};

// Do not edit below this line
module.exports = palindromes;
