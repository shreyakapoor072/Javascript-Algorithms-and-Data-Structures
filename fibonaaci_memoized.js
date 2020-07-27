/*function fib(n) {
    if(n <=2) return 1;

    return fib(n-1) + fib(n-2);
}*/

/* memoized approach */

function fib(n, memo = {}){
    if(memo[n]) return memo[n];

    if(n<=2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}