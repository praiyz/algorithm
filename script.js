function analyzeSentence(sentence) {
  let length = 0;
  let words = 0;
  let vowels = 0;
  let vowelsList = "aeiouAEIOU";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (char === ".") {
      break;
    }

    length++;

    if (vowelsList.includes(char)) {
      vowels++;
    }

    if (char === " ") {
      words++;
    }
  }

  if (length > 0) words++;

  console.log("Length of sentence:", length);
  console.log("Number of words:", words);
  console.log("Number of vowels:", vowels);
}

analyzeSentence("This is a test sentence.");
