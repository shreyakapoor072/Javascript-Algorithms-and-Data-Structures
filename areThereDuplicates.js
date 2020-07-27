function areThereDuplicates(a,b,c) {
    const duplicate = {};
   for(let i=0; i< arguments.length; i++){
       if(duplicate[arguments[i]] > 1) {
           return true;
       } else {
        duplicate[arguments[i]] = (duplicate[arguments[i]] || 0) + 1; 
       }
   }
   
   return false;
}

areThereDuplicates(1,2,3)