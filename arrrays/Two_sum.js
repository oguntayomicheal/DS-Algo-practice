// Question - Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

//Pseudocode
// store to store the array elements
//iterating through the array, 
// subtracting each element from the target and check if the remainder is in the array stored


// const twoSum = (array, target) => {

//     for (let i = 0; i<array.length; i++) {
       
//         for (let x = i + 1; x<array.length; x++) {
//             if (array[i] + array[x] == target) {
//                 return [i,x]
//             } 
//             return []
//         }
//     }
// }

const twoSum = (array, target) => {
    let myStore = new Map()

    for (let i = 0; i< array.length; i++) {
        let remainder = target -array[i]

        
        if (myStore.has(remainder)) {
            return [myStore.get(remainder), i]
        }
        myStore.set(array[i], i)
    }
    return []
}

console.log(twoSum([3,2,4], 6))
