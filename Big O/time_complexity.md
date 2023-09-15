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


#1 has no dependence on the input. No matter the data size, it will always perform the same number of operations, so we call this constant time O(1). It performs the same number of operations each time because the loop always goes from 0 to 20, regardless of the value used for input.

Note that for O(1), the algorithm's output does not depend on the input.

// #1
function printHello(input) {
  let ten = 5 + 5;
  let twenty = 2 * ten;

  for (let i = 0; i < twenty; i++) {
    console.log('Hello, world!');
  }
}
