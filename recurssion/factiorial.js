// Using recurssion find the factorial of a number

// Input = 4
// Output = 4*3*2*1 = 24

const factorial = (num) => {
    if (num <= 0) {
        return 1
    }
    return num * factorial(num -1)
}

console.log(factorial(4))