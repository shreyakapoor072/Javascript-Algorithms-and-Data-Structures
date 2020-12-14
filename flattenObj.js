let obj2 = {
    user: {
      name: "Vaibhav",
      address: {
        state: "Delhi",
        zone: "South West"
      },
    }
   };
   
   
   function flattenObj(obj) {
       let result = {};
   
       function flatten(obj, newKey = ''){
        let keys = Object.keys(obj), len = keys.length, i=0;
           while(i<len){
              let finalKey = newKey ? `${newKey}.${keys[i]}` : keys[i];
               if(typeof obj[keys[i]] === 'object') {
                   flatten(obj[keys[i]], finalKey)
               } else {
                  result[finalKey] = obj[keys[i]];
               }
               i++;   
           }  
       }
   
       flatten(obj);
       return result;
   }
   
   flattenObj(obj2);