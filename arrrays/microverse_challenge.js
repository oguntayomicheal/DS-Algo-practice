// Compare two arrays and return a new array with any items only found in one of the two given arrays, 
// but not both. In other words, return the symmetric difference of the two arrays.

// You can return the array with its elements in any order.

let arr11 = [1, 2, 3]
let arr21 = [5, 2, 1, 4]

const arrayCompare = (arr1, arr2) => {
    let newArray = new Set(arr1)

    let newArray2 = new Set(arr2) 
    let symmetricArray = []


    for( let i = 0; i < arr2.length; i++) {
        if ( !newArray.has(arr2[i]) ) {
            symmetricArray.push(arr2[i])
        } 
    }

    for( let i = 0; i < arr1.length; i++) {
        if ( !newArray2.has(arr1[i]) ) {
            symmetricArray.push(arr1[i])
        }
       
    }

    console.log(newArray2, newArray)


    return symmetricArray
}

console.log(arrayCompare(arr11, arr21))


// Time complexity = O(n) Linear time