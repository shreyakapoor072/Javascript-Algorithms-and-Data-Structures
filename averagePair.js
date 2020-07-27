function averagePair(arr, avg){
    if(arr.length === 0) 
      return false;
      
      let i = 0, j = arr.length;
      while(i < j) {
          let calAvg = (arr[i] + arr[j])/2;
          if(calAvg === avg) {
              return true;
          }
          else if(calAvg < avg) {
              i++;
          } else {
              j--
          }
          
      }
      return false;
  }
  
  averagePair([1,2,3],1.5)