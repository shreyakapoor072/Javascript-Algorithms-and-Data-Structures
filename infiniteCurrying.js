function sum(a) { 
    let sum = a; 
    return function addSum(b) { 
        if(!b) { 
            return sum;
        } else {
            sum = sum + b;
            return addSum;
        }
    }
}


sum(1)(3)(4)();

