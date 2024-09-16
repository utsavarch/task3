function longestChain(a) {
  if (a.length === 0) return 0;

  const numSet = new Set(a);
  let longchain = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentLength += 1;
      }

      longchain = Math.max(longchain, currentLength);
    }
  }

  return longchain;
}

console.log(longestChain([100, 4, 200, 1, 3, 2]));
console.log(longestChain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(longestChain([1, 2, 0, 1]));
console.log(longestChain([]));
console.log(longestChain([5, 1, 4, 2, 3, 6]));

/*
 Time Complexity: O(n)
 - set creation O(n) 
 - Iterating over the set O(n) 

 Space Complexity: O(n)
 - O(n) for the array of size n.
 */
