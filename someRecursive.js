function someRecursive(arr, callback){
    if(arr.length ===  1){
        return callback(arr[0]);
    }
    
    if(callback(arr[0])) return true;
    
    return someRecursive(arr.slice(1), callback);
}

someRecursive([4,6,8], val => val > 10);