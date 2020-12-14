//recursion
function flattenArray(arr) {
    let result = [];
    
    function flatten(newArr) {
        let i = 0;
        while(i < newArr.length) {
         if(Array.isArray(newArr[i])){
               flatten(newArr[i]);
          } else {
            result.push(newArr[i]);
          }
          i++;
        }
    } 

  flatten(arr);
  return result;


}

// using inbuilt functions

function flatArray(arr){
  return arr.flat(Infinity); // if we dont know depth pass infinity
}

flattenArray([[1, 2, 3], 4, [5, [6, 7]]] );
flatArray([[1, 2, 3], 4, [5, [6, 7]]] );