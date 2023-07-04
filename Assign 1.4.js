let str = 'brainmentors';

function rotateStringRight() {

  const lastChar = str.charAt(str.length - 1);
  const rotatedString = lastChar + str.substring(0, str.length - 1);

  str = rotatedString;

  console.log(str);
}

rotateStringRight();
