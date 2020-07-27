function countUnique(arr) {
    let pointer = arr[0];
    let count = 0;

    if(arr.length == 0) {
        return count;
    }

    for (let i=0; i< arr.length; i++){
        if(arr[i] !== pointer){
            pointer = arr[i];
            count++;
        }
    }

    return count+1;
}






countUnique([1,1,2]);