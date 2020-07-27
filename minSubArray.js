function minSubArray(arr, minSum) {
    let total = 0,end =0, start =0, minLen =0;


    while(start < arr.length) {

        if(total < minSum) {
            total += arr[start];
            start++;
        }else if( total >= minSum){
            minLen = start - end;
            total -= arr[end];
            end++;
        } 

    }

    return minLen;


}

minSubArray([2,3,1,2,4,3],7);

