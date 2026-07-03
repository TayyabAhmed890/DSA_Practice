let sortedArray = [1, 2, 3, 4, 5, 6, 10];
let target = 8;

function ThreeSum(arr, target) {
  for (let i = 0; i < arr.length - 2; i++) {

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
    
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        return [i, left, right];
      } else if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }
    }
  }

  return false;
}

let check = ThreeSum(sortedArray, target);
console.log(check);
