function binarySearch(arr, num){
    let low = 0, high = arr.length, mid;
    mid = Math.floor((low + high)/2);
    
    if(low >= high){
        return -1;
    }
    
    if(arr[mid] === num) {
        return mid;
    } else if( arr[mid] > num){
        binarySearch(arr, low, mid-1);
    } else {
        binarySearch(arr, mid+1, high);
    }
    
  }
  
  binarySearch([2,3,4,5,6],6);