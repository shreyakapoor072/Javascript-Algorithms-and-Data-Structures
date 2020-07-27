/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let sum = 0;
    function minA(){
        let min, temp;
        for(let i=0;i < costs.length/2; i++){
            min = i;
            for(let j = i+1; j < costs.length ; j++){
                if(costs[j][0] < costs[min][0]) {
                    min = j;
                } else if(costs[j][0] === costs[min][0] && costs[j][0] < costs[j][1] ){
                    min = j;
                }
            }

          if(min !== i) {
               temp = costs[i];
                costs[i] = costs[min];
                costs[min] = temp;
          }
            
        sum += costs[i][0];

        }
    }
    

    minA();
    
    function minB(){
        let min, temp, len = costs.length;
        costs.splice(0,len/2);
        
        for(let i=0; i < len/2; i++){
            min = i;
            for(let j = i+1; j < len/2 ; j++){
                if(costs[j][1] < costs[min][1]) {
                    min = j;
                }
            }

          if(min !== i) {
               temp = costs[i];
                costs[i] = costs[min];
                costs[min] = temp;
          }
            
        sum += costs[i][1];
            
            
        }
    }
    
    minB();
    
    return sum;
};

twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]);