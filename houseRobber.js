//dynamic programming - main concept is solve subproblems to get final result

const maxSum = (arr) => {
    let len = arr.length;
    let dp = new Array(len);
 
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
     
    for(let i=2; i<len; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
 
    return dp[len-1];
}