//insertion sort

function insertionSort(arr) {
    let pos;
    for(let i=1; i< arr.length; i++){
        let temp = arr[i], pos = i;
        for(let j = i - 1; j >=0 ; j--){
                if(arr[j] > temp){
                    pos = j;
                    arr[j+1] = arr[j];
                }
        }
        arr[pos] = temp;
    }

    return arr;
}

insertionSort([4,2,3,1,5]);