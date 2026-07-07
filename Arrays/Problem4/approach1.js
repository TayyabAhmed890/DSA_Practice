// Find Max and Min Number in Array

let arr = [12, 2, 34, 33, 1, 60];

function FindMinMax(arr) {
  let MIN = arr[0];
  let MAX = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    if (val < MIN) {
      MIN = val;
    }
    if (val > MAX) {
      MAX = val;
    }
  }

  return { MIN, MAX };
}

let check = FindMinMax(arr);
console.log(check);
