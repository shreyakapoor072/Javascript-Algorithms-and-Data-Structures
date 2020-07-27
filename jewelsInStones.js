var numJewelsInStones = function(J, S) {
    let jewelsObj = {}, num=0;
    
    for(let i=0; i<J.length; i++) {
        console.log(J[i]);
        jewelsObj[J[i]] = 0;
    }
    
    
    for(let i=0; i<S.length; i++) {
        if(jewelsObj[S[i]]){
            jewelsObj[S[i]]++;
        }
    }
    
    for( let i in jewelsObj){
        num = jewelsObj[i];
    }
    
    return num;
    
    
};

numJewelsInStones('aA', 'aAAbbb');