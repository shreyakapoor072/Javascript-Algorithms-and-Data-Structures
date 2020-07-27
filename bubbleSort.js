//bubble sort

function bubblesort(arr) {
    let i =0, j= 0, len = arr.length, temp;

    for(i=0;i<len;i++){
        for(j=0; j< len-i; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

bubblesort([5,3,6,1, -8, -4,2]);