function isPalindrome(word) {
  // Write your algorithm here
  let splitString = word.split('')
  let reversedWord = splitString.reverse().join('')
  return (word === reversedWord) 
}

/* 
  Add your pseudocode here
  1. input a string
  2. reverse the string
    - split method the string into an array
    - reverse method the array in place
    - join method the array back into a string
  3. compare the input string with the reversed string
*/

/*
  Add written explanation of your solution here
  The function takes a string as an argument and first splits it using the split() method. It then reverses the array created by split and joins the array back into a string. 
  The last step compares the revered word string to the original string and returns true only if they are a match.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true")
  console.log("=>", isPalindrome("abba"))
}

module.exports = isPalindrome;
