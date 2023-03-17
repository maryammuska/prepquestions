

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
