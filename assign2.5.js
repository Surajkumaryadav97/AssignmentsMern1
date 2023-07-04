function countCharacters(str) {
  var charCount = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

var inputString = "brain mentors";
var characterOccurrences = countCharacters(inputString);
console.log(characterOccurrences);
