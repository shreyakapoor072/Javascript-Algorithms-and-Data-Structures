function isSubsequence(subStr, str) {
    let i,j=0;

    for(i = 0; i< str.length; i++) {
        if(j === subStr.length) {
            return true;
        } else if(str[i] === subStr[j]) {
            j++;
        }
    }

    return false;
}

isSubsequence('abc','acb');