var removeKdigits = function(num, k) {
    if(num.length === k) {
        return "0";
    }
    for(let i = 0; i< num.length && i < k ; i++) {
        if(num[i] > num[i+1]){
            num.splice(0,1);
        }
    }
    
    return num;
};


removeKdigits("1234",2);