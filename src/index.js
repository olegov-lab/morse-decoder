const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = expr.slice();
  let word = "";
  let newWord = "";
  let result = "";

  for (let i = 0; i < arr.length; i += 10) {
    word = "";
    newWord = "";

    for (let j = 0; j < 10; j++) {
      word += expr[j + i];
    }

    if (word === "**********") {
      result += " ";
    } else {
      newWord = word.replace(/00/g, "").replace(/10/g, ".").replace(/11/g, "-");
      result += MORSE_TABLE[newWord];
    }
  }
  return result;
}

// let expr =
//   "10111111111111101010001110101000101011101010111111101010101011111111101110101010";

// console.log(decode(expr));

module.exports = {
  decode,
};
