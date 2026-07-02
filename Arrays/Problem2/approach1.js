let array = [1, 3, 4, 6, 8, 10]
let target = 10


function TwoSum(arr,target){
let left = 0;
let right = arr.length-1
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

let answer = TwoSum(array,target)
console.log(answer)