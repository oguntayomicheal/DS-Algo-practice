// Write a program to calculate power - pow(x,n). 
// Example : input = (5, 2) output will be 5^2 = 25

const powerLoop = (x, n) => {
    let emptyArr = Array(n)
    let result = 1
    for (let i = 0; i < emptyArr.length; i++) {
        result *= x
    }
    return result
}

const powerRecurssion = (x, n) => {
    if (n == 0) {
        return 1
    } 
       return x * power(x, n -1)   
}

console.log(powerRecurssion(5,2))