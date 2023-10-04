function isPalindrome(word) {
  // Write your algorithm here
    
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the original cleaned string is the same as the reversed one
    return cleanStr === reversedStr;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
