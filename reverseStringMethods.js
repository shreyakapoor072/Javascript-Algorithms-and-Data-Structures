//in place reverse - i love to watch netflx -> netflix watch to love i

//with inbuilt
function reverseString(str) {
    return str.split(" ").reverse().join(" ");
}

//without inbuilt

function reverseStringNew(str) {
    let start = 0, end, reverseStr = '', i;
    //used another empty string because original is immutable
    for(i=0; i<str.length; i++) {
        if(str[i] === " ") {
            let newStr = str.slice(start, i);
            reverseStr += reverse(newStr) + ' ';
            start = i+1;
        }
    }

    reverseStr += reverse(str.slice(start, i));



    return reverse(reverseStr);
}

//normal reverse function in recursion
function reverse(str){
    if(!str) return '';

    return reverse(str.slice(1)) + str.charAt(0);
}



//reverse only words not whole sentence

function reverseWords(str) {
    let words = str.split(" "), result = '';

    words.forEach((item) => {
       result += item.split("").reverse().join("") + " ";
    })

    return result.slice(0, result.length-1);
}

reverseWords("welcome to india");
