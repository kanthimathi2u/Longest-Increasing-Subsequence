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


  
