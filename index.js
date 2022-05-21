function isPalindrome(word) {
  // Write your algorithm 
  // Using METHOD 2
  let string = [...word];
  while(string.length > 1) {
    if(string[0] === string[string.length-1]) {
      string = string.slice(1, -1);
    } else {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  METHOD 1:
  initialize empty array called reverse

  iterate over each letter in the input string:
    push letter from end to beginning onto reverse
  
  convert reverse into string

  logical comparison input string to reverse string 
  
  return boolean 

  METHOD 2:
  initialize empty array called string

  convert input onto the [string]

  iterate over the array:
    logical equal comparison for the first and last element:
      if true:
        pop the letters or splice the array and repeat
      if false:
        return false as result
      else: 
        return true
*/

/*
  Add written explanation of your solution here
  METHOD 2:
  I selected method 2 becuase it would be a faster approach than METHOD 1,
  reversing every single letter in the word and then comparing it to the original.
  By comparing the beginning and ends of each string, we can arrive to the
  answer faster and use less of the computing resources. At the end of the while loop
  I have it return true always because when you get to 1 character left, it will always
  be a palindrome.
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
