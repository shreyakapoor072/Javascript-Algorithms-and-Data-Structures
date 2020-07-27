function naiveSearch(str, subStr){
    let p1 = 0, p2 = 0, count =0;

    while(p1 < str.length) {
        if(str[p1] === subStr[p2]){
            p1++;
            p2++;
        } else {
            p1++;
        }
        if(p2 === subStr.length){
            p2 = 0;
            count++;
        }
    }

    return count;
}

naiveSearch('loried loled', 'lo');