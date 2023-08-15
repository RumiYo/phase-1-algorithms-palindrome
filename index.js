function isPalindrome(word) {
  // Write your algorithm here
  const inputWord = word;
  const reversedWord = word.split('').reverse().join('');
  return inputWord === reversedWord;
}

/* 
  Add your pseudocode here
  -Create function
  - Add 1 argument for the input word
  - Create the reversed word 
    - Split the word to each character
    - Put them back together
  - Check if the input word and the reversed word are the same
    - If yes, return true
    - If no, return false
*/

/*
  Add written explanation of your solution here
  If the word is completely the same word when it is reversed, return true.
  If not, return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
