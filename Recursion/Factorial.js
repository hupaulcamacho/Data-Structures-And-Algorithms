// Write a factorial function that takes a positive integer, n as a parameter and prints the result of  n!(n factorial).

const factorial = function(n) {
    let result;
    if (n <= 1) {
        return 1
    } else {
        result = n * factorial(n - 1)
        return result
    }
}
