// palindrome problem

// brute force approach

// Time and space complexity is O(n)

let word = "tayyat";

function reverseString(word) {
    let arr = [];
  for (let i = word.length; i >= 0; i--) {
    arr.push(word[i]);
  }
    let str = arr.join('')
    return str
}

let getString = reverseString(word)

function checkPalindrome(word,string) {
    console.log(`${word} : ${string}`)
    if(word === string){
        return true
    }
    return false
}

let check = checkPalindrome(word,getString)
console.log(check)