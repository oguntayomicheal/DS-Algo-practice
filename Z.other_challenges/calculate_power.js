// Write a program to calculate power - pow(x,n). 
// Example : input = (5, 2) output will be 5^2 = 25

// let arr = Array(5)
// console.log(arr)

const powerLoop = (x, n) => {
    let emptyArr = Array(n)
    let result = 1
    for (let i = 0; i < emptyArr.length; i++) {
        result *= x
    }
    return result
}



console.log(power(5,2))