//selection sort


function selectionSort(arr) {
    let min, temp;
    for(let i=0;i< arr.length; i++){
        min = i;
        for(let j = i+1; j < arr.length ; j++){
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
      
      if(min !== i) {
           temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            
      }
 
    }

    return arr;

}

selectionSort([4,3,5,1,2]);