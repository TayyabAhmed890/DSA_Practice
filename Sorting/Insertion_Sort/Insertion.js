// insertion sort

let arr = [9,4,1,10,8];

for(let i = 1;i < arr.length;i++){

    let key = arr[i]
    let ptr = i-1
    
    while(ptr >= 0 && arr[ptr] > key){
        arr[ptr + 1] = arr[ptr];
        ptr--;
    }

    arr[ptr+1] = key
}

console.log(arr)

