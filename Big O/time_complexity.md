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


