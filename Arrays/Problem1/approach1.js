let duplicates_arr = [1, 9, 3, 1, 10, 9];

function checkDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true
      }
    }
  }

  return false
}

let check = checkDuplicates(duplicates_arr);
console.log(check)