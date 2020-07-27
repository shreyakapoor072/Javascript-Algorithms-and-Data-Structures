function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    const freqCounter1 = {}, freqCounter2 = {};
     for(let i of str1) {
         freqCounter1[i] = ( freqCounter1[i] || 0 ) + 1;
     }
     for(let i of str2) {
         freqCounter2[i] = ( freqCounter2[i] || 0 ) + 1;
     }

     for(let i in freqCounter1) {
         if(!freqCounter2[i] || freqCounter1[i] !== freqCounter2[i]) {
             return false;
        }

     }

     return true;
}


validAnagram('abc','cab');