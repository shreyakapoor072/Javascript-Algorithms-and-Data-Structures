function capitalizeWords (arr) {
    let newArr = [];
    
    if(arr.length === 0) {
        return [];
    }
    
    newArr.push(arr[0].toUpperCase());
    newArr = newArr.concat(capitalizeWords(arr.slice(1)));
    
    return newArr;
  }
  
  capitalizeWords(['a', 'b','c']);