//Provide 3 unique implementations of the following function in JavaScript.

//Input: `n` - any integer

// Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`.

// Output: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.


var sum_to_n_a = function(n) {
    // your code here
    let res = (n * (n+1)) / 2;
    return res
};

var sum_to_n_b = function(n) {
    let total = 0;
    for(let i = 1; i <= n; i++){
      total += i;
    }
    return total;
};

var sum_to_n_c = function(n) {
    // your code here
    let a=1;
    let sum=0;
    while(a<=n){
        sum+=a++;
    }
    return(sum);
};
