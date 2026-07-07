// optimal two pointers approach

function IsPalindrome(word){
    // create two pointers
    let left = 0;
    let right = word.length-1;

    // start a while loop
    while(left < right){

        // compare if word[left] !== word[right] return false
        if(word[left] !== word[right]){
            return false;
        }

        // right decrement
        // left increment
        right--;
        left++;
    }
    // if condition is false return true
    return true;
}

let check = IsPalindrome("pop")
console.log(check)