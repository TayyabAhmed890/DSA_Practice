// first need to sort array

let duplicates_arr = [1, 9, 3, 1, 10, 9];

// try to manual sort
function ManualSortArray(arr){
    for(let x = 0;x < arr.length;x++){
        for(let y = x+1;y < arr.length;y++){
            if(arr[x] > arr[y]){
                let temp = arr[x];
                arr[x] = arr[y]
                arr[y] = temp;
            }
        }
    }

    return arr;
}

// sort with method
function sortArray(arr) {
  if (arr) {
    arr.sort((a, b) => a - b);
    return arr;
  }

  return false;
}

function CheckDuplicates(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }

  return false;
}

// let array = sortArray(duplicates_arr);
let ManualSortedArray = ManualSortArray(duplicates_arr);

// console.log(array);
// console.log(ManualSortedArray);

let check = CheckDuplicates(ManualSortedArray);

console.log(check);
