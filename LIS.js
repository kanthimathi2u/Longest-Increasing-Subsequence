Have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and 
return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list 
where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence 
does not need to be contiguous or unique, and there can be several different subsequences. 
For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6]. 
For this input, your program should return 3 because that is the length of the longest increasing subsequence. 
Use the Parameter Testing feature in the box below to test your code with different arguments.

function LongestIncreasingSequence(arr) { 

  // code goes here  
  
  // To create array with longest increasing subsequence 
  
  const lengthsArray = Array(arr.length).fill(1);

  let previousElementIndex = 0;
  let currentElementIndex = 1;

  while (currentElementIndex < arr.length) {
    if (arr[previousElementIndex] < arr[currentElementIndex]) {
      // If current element is greater then the previous element then the current element is a part of increasing subsequence
      // Increase the length of the subsequence by one from the previous length
      
      const newLength = lengthsArray[previousElementIndex] + 1;
      if (newLength > lengthsArray[currentElementIndex]) {
        // Increase the length only when previous element length is greater than or equal to the subsequence length
        
        lengthsArray[currentElementIndex] = newLength;
      }
    }

    // Iterate the check by moving the previous element index.
    previousElementIndex += 1;

    // If previous element index equals to current element index then move the current element to the next available element in the right 
    // and reset the previous element index to zero to be ready for the next iteration.
    
    if (previousElementIndex === currentElementIndex) {
      currentElementIndex += 1;
      previousElementIndex = 0;
    }
  }

  // Find the biggest element in lengthsArray.
  // This number is the biggest length of increasing subsequence.
  let longestIncreasingLength = 0;

  for (let i = 0; i < lengthsArray.length; i += 1) {
    if (lengthsArray[i] > longestIncreasingLength) {
      longestIncreasingLength = lengthsArray[i];
    }
  }

  return longestIncreasingLength; 
         
}
   
// keep this function call here 
LongestIncreasingSequence(readline());                            


  