// Given a string as an input, write a program
// to print all non-empty substrings of that given string

// INput = 'abc'
// Output  = 'a', 'ab', 'abc', 'b', 'bc', 'c'

const subString1 = (string, length = string.length) => {
    const stringArr = [] 
    for ( i = 0; i < length; i++) {
     for (j= i+1; j<= length; j++) {
         const newString = string.slice(i,j)
         stringArr.push(newString)
     }
    }
    return stringArr
}


console.log(subString1('abc'))

//Things learnt

// string.charAt(index)