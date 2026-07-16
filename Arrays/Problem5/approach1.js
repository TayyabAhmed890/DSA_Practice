// Find the Desire Number

let find = 90;
let numbers = [13,90,23,67,10];

function FindNumber(num,search){

    if(typeof search !== "number") return "Invalid Type!";

    for(let i = 0;i < num.length;i++){
        if(num[i] === search){
            return `${search} is Found on Index ${i}!`;
        }
    }

    return "Not Found!"
}

let checkNumber = FindNumber(numbers,find);
console.log(checkNumber)

