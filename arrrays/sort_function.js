function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }

  console.log(ascendingOrder([1, 5, 2, 3, 4]))

  function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

  console.log(["a", "d", "c", "a", "z", "g"].sort().reverse())