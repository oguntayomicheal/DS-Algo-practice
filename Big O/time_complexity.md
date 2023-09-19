// File to add note on time complexity
// https://skilled.dev/course/big-o-time-and-space-complexity

Study on Big O 



What Big O Means
-----Summary----
Big O measures scalability of an algorithm/code, which means how long an algorithm takes to run. 
We judge speed based on the number of steps and not calculated time (ie. seconds or minutes).
We only care about the steps that increase based on the input size.

----How to calculate it -----
Try not to overthink it. Big O is a general and high-level representation of an algorithm. You are not expected to analyze a program line-by-line and account for every single operation. we ignore the line-by-line details of the code and don't care about every single calculation.

What you do is find the block of code in the algorithm that requires the most iterations through the input data structure. Then all you need is an understanding of the approximate time complexity for common scenarios — O(n) for single loops, O(n2) for nested loops, O(n log n) for sorting, etc.

We calculate Big O relative to the size of the input which we denote by n. So if we are given an array, array.length == n. We use the letter n because we're just saying we want to know approximately how many operations the algorithm would require for any array.length.

--- Constant time - O(1)
#1 has no dependence on the input. No matter the data size, it will always perform the same number of operations, so we call this constant time O(1). 

Constant time or O(1) means that we don't iterate through our data structureor the input. The operations that occur never increase, regardless of how our large our input gets.

Examples of constant time operations include: accessing a hash table by key, popping the last item of an array, or any normal arithmetic.


Note/Summary - for O(1) the algorithm's output does not depend on the input (Output is constant)

// #1
function printHello(input) {
  let ten = 5 + 5;
  let twenty = 2 * ten;

  for (let i = 0; i < twenty; i++) {
    console.log('Hello, world!');
  }
}

It performs the same number of operations each time because the loop always goes from 0 to 20, regardless of the value used for input.


--- Linear time - O(n) 
This happens where we iterate through our input data structure once (or sequentially). As long as we don't nest loops, we will operate in linear time.

If we have an input array with length 1,000,000, our for loop would iterate through one million items. If we have an input array with length 1,000,000,000, our for loop would iterate through one billion items. An O(n) time just means that the operations required is simply the length of the input. The operations and input size increase 1-for-1, or linearly.
This applies to other iteration methods such as forEach, map, filter, reduce. They all iterate through our input data structure once, just like a for loop.

Note/Summary - In O(n) there is single iteration through the input or data structure

Since #2 uses one for loop, it will iterate the input for all items once, and this is what we call O(n).

// #2
function printInput(input) {
  const n = input.length;
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function myAlgorithm(inputArray) {
  const n = inputArray.length;

  // We touch all n items, requiring O(n) operations
  for (let i = 0; i < n; i++) {
    // We don't care what happens in here as long as it's not another loop
  }
}

// myAlgorithm([1])  -->  input size = n = 1  -->  O(1) operations
// myAlgorithm([1, 2])  -->  input size = n = 2  -->  O(2) operations
// myAlgorithm([1, 2, 3])  -->  input size = n = 3  -->  O(3) operations
// ...
// myAlgorithm([1, 2, 3, ..., n])  -->  input size = n  -->  O(n) operations



--- Polynomial time O(n raised to a power)
The general name for when we raise n to a power is known as polynomial time. 

This happens when we nest loops.
The more nesting you have, the more the exponent increases. If you have three nested loops, then the complexity becomes O(n`3).

