/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(s) {
    let copyArray = s.slice(); // we are slicing the array 
    let reverse = s.length - 1;

    for (let i = 0; i < s.length; i++) {
        s[i] = copyArray[reverse];
        reverse-- // this allows the last value to replace the one before it without making it all the same 
    }
    return s;
};


// another way to do it
var reverseString2Pointer = function (s) {
    return s.reverse();
};
