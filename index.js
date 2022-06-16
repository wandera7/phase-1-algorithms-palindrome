function isPalindrome(word) {
  // Write your algorithm here
  const checkWord=Array.from(word)
  let lastLetter=checkWord.length-1
  for(let i=0;i<checkWord.length;i++){
    if(checkWord[i]===checkWord[lastLetter]){
      return true
    }
    else{
      return false
      
    }
    lastLetter--
  }

}

/* 
  Add your pseudocode here
  The function should be comparing the letters 
  from the beginning, being compared to the last
  and so forth
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
