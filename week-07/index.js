function abbrevName(name) {
  let splitName = name.split(" ");
  // console.log(splitName);

  let firstInitial = splitName[0].charAt(0).toUpperCase();

  // console.log(firstInitial);

  let secondInitial = splitName[1].charAt(0).toUpperCase();
  // console.log(secondInitial);

  console.log(firstInitial + "." + secondInitial);
}

abbrevName("Courtney Daugherty");

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump <= mpg * fuelLeft) {
    console.log(true);
  } else {
    console.log(false);
  }
};

zeroFuel(100, 50, 1);

const binaryArrayToNumber = (arr) => {
  //working with an array.
  let joined = arr.join("");
  console.log(joined);
  //convert equiv binary value to an integer.
  let converted = parseInt(joined, 2);
  console.log(converted);
};
binaryArrayToNumber([0, 0, 0, 1]);
binaryArrayToNumber([0, 0, 1, 0]);
binaryArrayToNumber([1, 1, 1, 1]);
binaryArrayToNumber([0, 1, 1, 0]);




function alphabetPosition(text) {
  text.split(" ").join("");
  var char = "";
  var arr = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (var i = 0; i < text.length; i++) {
    char = text.charAt(i).toLowerCase();
    if (alphabet.indexOf(char) > -1) {
      arr.push(alphabet.indexOf(char));
    }
  }
  console.log(arr);
}
alphabetPosition("I love sour apples in my soup for dinner");