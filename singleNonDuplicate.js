var singleNonDuplicate = function(nums) {
    let low = 0, high = nums.length;
    
    while( low <= high) {
        let mid = Math.floor((low + high)/2);
        if(nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]){
            return nums[mid];
        } else if(mid%2 == 0){
            if(nums[mid] === nums[mid+1]){
                low = mid+1;
            } else {
                high = mid -1;
            }
        } else {
            if(nums[mid] === nums[mid -1]){
                low = mid +1;
            } else {
                high = mid -1;
            }
        }
        
    }
};

singleNonDuplicate([2,2,3,4,4,5,5,6,6]);