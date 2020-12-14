//remove duplicates using inbuilt functions

function removeDuplicate(str){
    return Array.from(new Set(str)).reverse().join('');
}

function removeDuplicateWithoutBuiltIn(str){
    let result = [], count ={}

    for(let i=0; i < str.length; i++){
        if(!count[str[i]]){
            count[str[i]] = 1;
        }
    }

    return Object.keys(count).join("");


}

removeDuplicate("abschsbda");
removeDuplicateWithoutBuiltIn("abschsbda");