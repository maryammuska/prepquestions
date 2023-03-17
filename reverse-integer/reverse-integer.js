/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < 0) return -1 * reverse(-x);
    const solution = x.toString().split('').reverse().join('');
    return (solution > 2 **31 -1) ? 0 : parseInt(solution, 10);
};