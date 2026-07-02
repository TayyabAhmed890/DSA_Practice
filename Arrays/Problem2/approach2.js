// find two sum in unsorted array

let array = [10, 7, 9, 3, 4, 2];
let target = 7;

function FindTwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
}

let check = FindTwoSum(array, target);
// console.log(check)

// optimal approach


function TwoSumWithHashMap(arr, target) {
    let diary = {};
  for (let x = 0; x < arr.length; x++) {
    let reqNum = target - arr[x];

    if (diary[reqNum] !== undefined) {
      return [diary[reqNum], x];
    }

    diary[arr[x]] = x;
  }
  return false;
}

let find = TwoSumWithHashMap(array,target)
console.log(find)

