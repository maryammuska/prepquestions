// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
/*

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109 
*/


/* Psuedo- Code: 
Step 1: Sort the array in order 
Step 2: Create a for loop 
Step 3: Create conditional that would check the current value with the value of its neighbor to see if it is the same 
Step 4: If it is the same; then return True
Step 5: If not the same; then return false 


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums = nums.sort() // this will sort the array in order from least to greatest 
    for (i = 0; i < nums.length; i++){ 
     if (nums[i] == nums [i +1]){// checking to see if it is the same as the next value in the index
        return true // if the current number is the same as its next value, then return true
     }
     } 
     return false // otherwise return false
};
