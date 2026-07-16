// Find Vowels in the text

let text = "Kotlin";

function FindVowels(text) {
  let count = 0;
  let char = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (
      char[i] === "a" ||
      char[i] === "e" ||
      char[i] === "i" ||
      char[i] === "o" ||
      char[i] === "u"
    ) {
      count++;
    }
  }

  if (count === 0) {
    return "Vowels Not Found!";
  }

  return `Text: ${char}\nVowels: ${count}`;
}

let checkVowels = FindVowels(text);
console.log(checkVowels);
