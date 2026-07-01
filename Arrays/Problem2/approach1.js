let array = [1, 3, 4, 6, 8, 10]
let target = 3

let left = 0;
let right = array.length-1

function TwoSum(arr){
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === target){
            return [left,right]
        }
        else if(sum < target){
            left++
        }else if(sum > target){
            right--
        }
    }
    return false;
}

let answer = TwoSum(array)
console.log(answer)