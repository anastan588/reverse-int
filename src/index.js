module.exports = function reverse (n) {
    let number = Math.abs(n);
    let numberForArray = number.toString().split('');
    let reverseArray = numberForArray.reverse();
    let reverseString = reverseArray.join('');
    let reverseNumber = Number(reverseString);
    return reverseNumber;
}
