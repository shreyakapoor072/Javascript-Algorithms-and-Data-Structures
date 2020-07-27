function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    for(let i=0; i<arr1.length; i++){
        const index = arr2.indexOf(arr1[i]*arr1[i]);
        if(index){
            arr2.splice(index,1);
        }else {
            return false;
        }
    }

    return true;
}

same([1,2], [4,1]);