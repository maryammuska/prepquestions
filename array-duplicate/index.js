
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.




/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1 
    for(let i = 0; i < nums.length -1; i++){ // -1 to stop 1 element be4 end of array 
        if(nums [i] !== nums [i + 1]){ 
            nums[k] = nums [i + 1]
            k ++
        }
    }
    return k
};

// need to create a variable that has an index, and index has to start at the second number because the first number will always be unique; then you have to create a for loop to go over the index in a increasing order 
   // I
// [0,0,1,1,1,2,2,3,3,4]

// expected results:
// [0,1,2,3,4]