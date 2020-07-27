
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let highest = Number.MIN_VALUE, secondHighest = Number.MIN_VALUE;

    for(let i=0; i< nums.length; i++){
        if(nums[i] > highest){
            secondHighest = highest;
            highest = nums[i];
        } else if( nums[i] > secondHighest && nums[i] < highest){
            secondHighest = nums[i];
        }
    }

    return secondHighest;
}

