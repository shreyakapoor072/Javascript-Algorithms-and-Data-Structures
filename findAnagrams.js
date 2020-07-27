function findAnagrams(s,p) {
    let tempObj = {}, obj = {}, arr = [];

    for(let i=0; i< p.length; i++){
        obj[p[i]] = (obj[p[i]] || 0 ) + 1;
    }

    for(let i =0; i< s.length; i++){
        tempObj = Object.assign({}, obj);
        for(let j=0; j< p.length ;j++){
            if(tempObj[s[j+i]] > 0){
                tempObj[s[j+i]]--;
            } 
        }
        let sum = 0;
        for(let i in tempObj){
            sum = sum + tempObj[i];
        }

        if(sum === 0)
        arr.push(i);
    }

    return arr;
}


findAnagrams('abab','ab');

/*function findAnagrams(s,p) {
    let count, arr = [];


    for(let i =0; i< s.length; i++){
        count = p.length;
        for(let j=0; j < p.length ;j++){
            if(p.indexOf(s[j+i] !== -1)){
                count--;
            } 
        }
        
        if(count === 0)
        arr.push(i);
    }

    return arr;
}


findAnagrams('abab','ab');*/