// optimal two pointers approach

function IsPalindrome(word){
    let left = 0;
    let right = word.length-1;

    while(left < right){
        if(word[left] !== word[right]){
            return false;
        }
        right--;
        left++;
    }
    return true;
}

let check = IsPalindrome("pop")
console.log(check)