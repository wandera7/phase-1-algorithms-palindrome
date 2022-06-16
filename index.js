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
console.log(isPalindrome('racecar'))

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
