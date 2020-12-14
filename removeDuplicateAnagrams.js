let strs = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function removeAnagrams(arr){
    let obj = {}, sorted;
    for(let i in arr){
         sorted = arr[i].toLowerCase().split('').sort().join('');
         obj[sorted] = arr[i];
    }

    return Object.values(obj);
}

removeAnagrams(strs);