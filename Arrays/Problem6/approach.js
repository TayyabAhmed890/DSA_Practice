// find second largest number

let arr = [9, 4, 1, 7, 11, 78, 45];

function FindSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return `Largest: ${largest}\nSecond Largest: ${secondLargest}`;
}

let check = FindSecondLargest(arr);
console.log(check);
