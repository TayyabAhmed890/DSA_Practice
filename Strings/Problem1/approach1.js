// palindrome problem

// brute force approach

// Time and space complexity is O(n)

let word = "pop";

function reverseString(word) {
  // create an empty array
    let arr = [];

  // start a for loop in reverse order
  for (let i = word.length; i >= 0; i--) {
    // push the all words in array
    arr.push(word[i]);
  }

  // convert the array into string again
    let str = arr.join('')
    return str
}

let getString = reverseString(word)

function checkPalindrome(word,string) {

  // better visualization
    console.log(`${word} : ${string}`)

  // check if word === string return true otherwise return false
    if(word === string){
        return true
    }
    return false
}

let check = checkPalindrome(word,getString)
console.log(check)