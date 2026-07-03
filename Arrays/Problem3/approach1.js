let array = [10, 2, 13, 1, 9, 5];
let target = 12;

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    for (let k = j + 1; k < array.length; k++) {
      if (array[i] + array[j] + array[k] === target) {
        console.log([i, j, k]);
      }
    }
  }
}
