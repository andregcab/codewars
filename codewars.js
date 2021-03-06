// Total amount of points

function points(games) {
  let gamePoints = 0;

  games.map(game => {
    var x = game[0];
    var y = game[2];
    if (x > y) {
      gamePoints += 3;
    } else if (x < y) {
    } else if ((x = y)) {
      gamePoints++;
    }
  });
  return gamePoints;
}

//Sum without highest and lowest number

function sumArray(array) {
  if (!array) {
    return 0;
  }
  if (array.length < 1) {
    return 0;
  }
  console.log(array);
  var min = Math.min(...array);
  console.log(min);
  var max = Math.max(...array);
  console.log(max);
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    if (array.length == 1) {
      max -= min;
    }
    sum += array[i];
  }
  return sum - (max + min);
}

//Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  let sumArray = [0, 0];

  if (!input || input.length === 0) {
    return [];
  }
  for (i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      sumArray[0]++;
    } else if (input[i] <= 0) {
      sumArray[1] += input[i];
    }
  }
  return sumArray;
}

//Directions Reduction

function dirReduc(arr) {
  let newArr = arr;
  for (i = 0; i < newArr.length; i++) {
    console.log("top", arr);

    if (newArr[i] === "NORTH" && newArr[i + 1] === "SOUTH") {
      newArr.splice(i, 2);
      console.log("second", newArr);
      i -= 2;
    }
    if (newArr[i] === "SOUTH" && newArr[i + 1] === "NORTH") {
      newArr.splice(i, 2);
      console.log("third", newArr);
      i -= 2;
    }
    if (newArr[i] === "EAST" && newArr[i + 1] === "WEST") {
      newArr.splice(i, 2);
      console.log("fourth", newArr);
      i -= 2;
    }
    if (newArr[i] === "WEST" && newArr[i + 1] === "EAST") {
      newArr.splice(i, 2);
      console.log("fifth", newArr);
      i -= 2;
    }
  }

  return newArr;
}

//this was the closest to working

//   let firstArr = arr
//   arr.forEach((direction, i, org)=>{
//   if(direction === "EAST" || direction === "WEST"){
//     if((org[i+1] === "EAST" || org[i+1] === "WEST") && (org[i+2] === "EAST" || org[i+2] === "WEST")){
//       console.log(firstArr)
//       firstArr.splice(0,3)
//       console.log(firstArr)
//       console.log("current dir is still", direction)
//       firstArr.splice(firstArr.indexOf(direction),1)
//     } else if(org[i+1] === "EAST" || org[i+1] === "WEST"){
//         firstArr.splice(i,2)
//     }

//   } else {
//       if((org[i+1] === "NORTH" || org[i+1] === "SOUTH") && (org[i+2] === "NORTH" || org[i+2] === "SOUTH")){
//         console.log(firstArr)
//         firstArr.splice(0,3)
//         console.log(firstArr)
//         console.log("current dir is still", direction)
//         firstArr.splice(firstArr.indexOf(direction),1)
//         console.log("last console",firstArr)
//       } else if(org[i+1] === "NORTH" || org[i+1] === "SOUTH"){
//           firstArr.splice(i,2)
//     }
//   }

//     if(direction === "NORTH" && org[i+1] === "SOUTH"){
//       firstArr.splice(i,1)
//       firstArr.splice((i+1), 1)
//     }

//   });

//   if(direction === "NORTH" && newArr[i-1] === "SOUTH"){
//        newArr.splice("NORTH", 1)
//        newArr.splice("SOUTH")
//      }

//  if((newArr.indexOf("NORTH") - newArr.indexOf("SOUTH")) < 1){
//  newArr.splice("NORTH", 1)
//  newArr.splice("SOUTH", 1)
// }

//  ((newArr.indexOf("EAST") - newArr.indexOf("WEST")) > 1))){

//  newArr.splice("EAST", 1)
//  newArr.splice("WEST", 1)

//    if(direction === 'EAST' || direction === 'WEST'){ewcounter ++}
//    if(ewcounter > 2){return}

//Clocky Mc Clock-Face

var whatTimeIsIt = function(angle) {
  if (angle === 0 || angle === 360) {
    return "12:00";
  } else {
    let dMin = angle * 2;
    let hours = Math.floor(dMin / 60);
    let minutes = Math.floor(dMin % 60);
    if (hours === 0) {
      hours = "12";
    } else if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes === 0) {
      minutes += "0";
    } else if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
};

//Is there a vowel in there?

function isVow(a) {
  let newStr = a;
  for (i = 0; i < a.length; i++) {
    if (a[i] === 97) {
      a.splice(i, 1, "a");
    } else if (a[i] === 101) {
      a.splice(i, 1, "e");
    } else if (a[i] === 105) {
      a.splice(i, 1, "i");
    } else if (a[i] === 111) {
      a.splice(i, 1, "o");
    } else if (a[i] === 117) {
      a.splice(i, 1, "u");
    }
  }
  return newStr;
}

//Find the missing letter

function findMissingLetter(array) {
  let start = array[0];
  let charCodeS = start.charCodeAt(0);
  let end = array[array.length - 1];
  let charCodeE = end.charCodeAt(0);
  let newArray = [];

  for (charCodeS; charCodeS <= charCodeE; charCodeS++) {
    let letterToPush = String.fromCharCode(charCodeS);
    newArray.push(letterToPush);
  }

  let missingLetter = newArray.filter(letter => !array.includes(letter));

  return missingLetter[0];
}

//Street Fighter 2 - Character Selection

function streetFighterSelection(fighters, position, moves) {
  let x = position[0];
  let y = position[1];
  let fighterArray = [];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "up") {
      x = 0;
    }
    if (moves[i] === "down") {
      x = 1;
    }
    if (moves[i] === "right") {
      if (y === 5) {
        y = 0;
      } else {
        y += 1;
      }
    }
    if (moves[i] === "left") {
      if (y === 0) {
        y += 5;
      } else {
        y -= 1;
      }
    }
    fighterArray.push(fighters[x][y]);
  }
  return fighterArray;
}

//Expressions Matter

function expressionMatter(a, b, c) {
  let test1 = a * (b + c);
  let test2 = (a + b) * c;
  let test3 = a + b + c;
  let test4 = a * b * c;
  let numbers = [test1, test2, test3, test4];
  return Math.max(...numbers);
}

// Spacify

function spacify(str) {
  let newWord = "";
  for (let i = 0; i < str.length; i++) {
    i !== str.length - 1
      ? (newWord += str.charAt(i) + " ")
      : (newWord += str.charAt(i));
  }
  return newWord;
}

//Find the Parity Outlier

function findOutlier(integers) {
  let isEven = 0;
  let isOdd = 0;
  for (i = 0; i < 3; i++) {
    integers[i] % 2 === 0 ? isEven++ : isOdd++;
  }
  return isEven > isOdd
    ? integers.filter(num => num % 2 !== 0)[0]
    : integers.filter(num => num % 2 === 0)[0];
}

//sum of odd numbers

function rowSumOddNumbers(n) {
  let totalNumbers = ((n * (n + 1)) / 2) * 2 - 1;
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    counter += totalNumbers;
    totalNumbers -= 2;
  }
  return counter;
}

//L1 Set alarm

function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : false;
}

//Make Upper Case

const makeUpperCase = str => str.toUpperCase();

//Grasshopper - Summation

var summation = function(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

//Remove String Spaces

const noSpace = x => x.replace(/\s/g, "");

// V A P O R W A V E

const vaporcode = string =>
  string
    .replace(/\s/g, "")
    .split("")
    .join("  ")
    .toUpperCase();

//My head is at the wrong end!

const fixTheMeerkat = arr => arr.reverse();

//or

function fixTheMeerkat(arr) {
  return arr.reverse();
}

//Remove First and Last Character

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

//A Strange Trip To The Market

function isLockNessMonster(s) {
  return s.includes("tree fiddy")
    ? true
    : s.includes("$3.50")
    ? true
    : s.includes("three fifty")
    ? true
    : false;
}

//another solution
//const isLockNessMonster = (s) => /tree fiddy|three fifty|3.50/.test(s);

//Keep Hydrated!

function litres(time) {
  return Math.floor(time * 0.5);
}

//Mexican Wave

function wave(word) {
  let wordWave = [];
  for (let i = 0; i < word.length; i++) {
    let tmpWrd = word.split("");
    if (/^[A-Z]$/i.test(tmpWrd[i])) {
      let capLet = tmpWrd[i].toUpperCase();
      tmpWrd.splice(i, 1, capLet);
      wordWave.push(tmpWrd.join(""));
    }
  }
  return wordWave;
}

//Swap Values

function swapValues() {
  var args = Array.prototype.slice.call(arguments);
  var temp = args[0][0];
  var tempTwo = args[0][1];
  args[0][0] = tempTwo;
  args[0][1] = temp;
}

//Who Likes It

function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${names.length -
        2} others like this`;
  }
}

//Cat Years, Dog Years (2)

var ownedCatAndDog = function(catYears, dogYears) {
  let ownedYears = [];
  const earlyYears = years => (years >= 24 ? 2 : years >= 15 ? 1 : 0);

  if (catYears >= 28) {
    ownedYears.push(Math.floor((catYears - 24) / 4) + 2);
  } else {
    ownedYears.push(earlyYears(catYears));
  }

  if (dogYears >= 29) {
    ownedYears.push(Math.floor((dogYears - 24) / 5) + 2);
  } else {
    ownedYears.push(earlyYears(dogYears));
  }

  return ownedYears;
};

// Better solution

var ownedCatAndDog = function(cat, dog) {
  return [
    cat < 15 ? 0 : cat < 24 ? 1 : ((cat - 16) / 4) | 0,
    dog < 15 ? 0 : dog < 24 ? 1 : ((dog - 14) / 5) | 0
  ];
};

//Grasshopper - Personalized Message

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

//Sum of differences in an array

function sumOfDifferences(arr) {
  let theSum = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    theSum += arr[i] - arr[i + 1];
  }
  return Math.abs(theSum);
}

//Testing 1-2-3

var number = function(array) {
  let newArr = [];
  array.forEach((array, i) => {
    newArr.push(`${i + 1}: ${array}`);
  });
  return newArr;
};

//I love you a little...a lot....

function howMuchILoveYou(nbPetals) {
  switch (nbPetals % 6 || 6) {
    case 1:
      return "I love you";
      break;
    case 2:
      return "a little";
      break;
    case 3:
      return "a lot";
      break;
    case 4:
      return "passionately";
      break;
    case 5:
      return "madly";
      break;
    case 6:
      return "not at all";
  }
}

//You don't need switch
const howMuchILoveYou = n =>
  ["not at all", "I love you", "a little", "a lot", "passionately", "madly"][
    n % 6
  ];

//Calculate BMI

function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);

  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25) {
    return "Normal";
  } else if (bmi <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

//minMinMax

function minMinMax(array) {
  let minAb = Math.min(...array) + 1;
  while (array.includes(minAb)) {
    minAb++;
  }
  return [Math.min(...array), minAb, Math.max(...array)];
}

//Split Strings
function solution(str) {
  let splitStr = str.split("");
  let solutionArr = [];
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr.length !== 1) {
      solutionArr.push(`${splitStr[0]}${splitStr[1]}`);
      splitStr.splice(0, 2);
      i--;
    } else {
      solutionArr.push(`${splitStr[0]}_`);
    }
  }
  return solutionArr;
}

//Who has the most money?

function mostMoney(students) {
  let allMoney = [];
  for (let i = 0; i < students.length; i++) {
    let studentMoney = 0;
    studentMoney +=
      students[i].fives * 5 + students[i].tens * 10 + students[i].twenties * 20;
    allMoney.push(studentMoney);
  }
  if (Math.max(...allMoney) === Math.min(...allMoney) && students.length > 1) {
    return "all";
  } else {
    return students[allMoney.indexOf(Math.max(...allMoney))].name;
  }
}

//Remove Anchor from URL

const removeUrlAnchor = url =>
  url.indexOf("#") == -1 ? url : url.substring(0, url.indexOf("#"));

//sum of numbers

function getSum(a, b) {
  let max = Math.max(a, b);
  for (let i = max; i > Math.min(a, b); i--) {
    max += i - 1;
  }
  return max;
}

//Descending order

const descendingOrder = n =>
  Number(
    n
      .toString()
      .split("")
      .sort(function(a, b) {
        return b - a;
      })
      .join("")
  );

//Suitcase Packing

function fit_in(a, b, m, n) {
  return Math.pow(a * b, 2) < m * n ? true : false;
}

//Growing Plant

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let checkHeight = 0;
  let numberOfDays = 0;
  while (checkHeight < desiredHeight) {
    checkHeight += upSpeed;
    if (checkHeight < desiredHeight) {
      checkHeight -= downSpeed;
    }
    numberOfDays++;
  }
  return numberOfDays;
}

//Do I Get A Bonus?

const bonusTime = (salary, bonus) => (bonus ? `£${salary * 10}` : `£${salary}`);

//Kepp Up The Hoop

function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

//Generate Range of Integers

function generateRange(min, max, step) {
  let array = [min];
  let counter = min;
  for (let i = min; i < max; i++) {
    counter += step;
    array.push(counter);
    i = counter;
  }
  if (array[array.length - 1] > max) {
    array.pop();
  }
  if (array[array.length - 1] + step <= max) {
    array.push(max);
  }
  return array;
}

//Alan Partridge II - Apple Turnover

function apple(x) {
  return Math.pow(x, 2) > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

//Five without numbers!!

function unusualFive(word = "hello") {
  return word.length;
}

//Sort and Star

function twoSort(s) {
  let word = s.sort()[0].split("");
  for (let i = 0; i < word.length - 1; i++) {
    word[i] += "***";
  }
  return word.join("");
}

//Draw Stairs

function drawStairs(n) {
  let stairs = "";
  for (let i = 1; i < n; i++) {
    stairs += "I\n";
    stairs += " ".repeat(i);
  }
  stairs += "I";
  return stairs;
}

//For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

const quote = fighter =>
  fighter.toLowerCase().includes("george")
    ? "I am not impressed by your performance."
    : "I'd like to take this chance to apologize.. To absolutely NOBODY!";

//Reversed Strings

const solution = str =>
  str
    .split("")
    .reverse()
    .join("");

// get character from ASCII Value

function getChar(c) {
  return String.fromCharCode(c);
}

//Love vs Friendship

function wordsToMarks(string) {
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    total += string.charCodeAt(i) - 96;
  }
  return total;
}

//using REDUCE

function wordsToMarks(string) {
  return [...string].reduce(
    (acc, letter) => (acc += letter.charCodeAt() - 96),
    0
  );
}

//Breaking Chocolate Problem

function breakChocolate(n, m) {
  return n * m == 0 ? 0 : n * m - 1;
}

//Lost without a map

function maps(x) {
  return x.map(x => x * 2);
}

//Well of ideas

function well(x) {
  let goods = x.filter(n => n === "good");
  if (goods.length > 2) {
    return "I smell a series!";
  } else if (goods.length !== 0) {
    return "Publish!";
  } else {
    return "Fail!";
  }
}

//Sum Mixed Array

function sumMix(x) {
  return x.reduce((a, b) => Number(a) + Number(b));
}

function sumMix(x) {
  if (x.length === 1) return Number(x);
  else return x.reduce((a, b) => Number(a) + Number(b));
}

// Count the Monkeys

function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

//Summing a numbers digits

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
}

//The Wide Mouthed Frog

function mouthSize(animal) {
  return animal.toLowerCase() == "alligator" ? "small" : "wide";
}

//Borrower Speak

function borrow(s) {
  return s.replace(/\W/g, "").toLowerCase();
}

//What is between

function between(a, b) {
  let newArr = [];
  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }
  return newArr;
}

//The 'if' function

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

//Sum The Strings

function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

//Maximum Multiple

function maxMultiple(divisor, bound) {
  for (let i = bound; i > 0; i--) {
    if (i % divisor == 0) {
      return i;
    }
  }
}

//Square every digit ------ Should have used .map!!1

function squareDigits(num) {
  let numArray = String(num).split("");
  let numsSquared = [];
  for (let i = 0; i < numArray.length; i++) {
    numsSquared.push(Math.pow(numArray[i], 2));
  }
  return Number(numsSquared.join(""));
}

//Returning Duplicates

function duplicateCount(text) {
  let textArr = text.toLowerCase().split("");
  let findDuplicates = textArr.filter(
    (item, index) => textArr.indexOf(item) != index
  );
  return [...new Set(findDuplicates)].length;
}

//The Lamp: Revisited

class Lamp {
  constructor(color) {
    this.color = color;
    this.on = false;
  }

  toggleSwitch() {
    if (this.on == false) {
      this.on = true;
    } else {
      this.on = false;
    }
  }

  state() {
    if (this.on == false) {
      return "The lamp is off.";
    } else {
      return "The lamp is on.";
    }
  }
}

//Shortest Word

function findShort(s) {
  let biggest = s.split(" ").reduce((prev, cur) => {
    return cur.length < prev.length ? cur : prev;
  });
  return biggest.length;
}

//Lottery Machine

function lottery(str) {
  return (
    [...new Set(str.split("").filter(x => !isNaN(x)))].join("") ||
    "One more run!"
  );
}

//All Star Code Challenge #3

var removeVowels = function(str) {
  let newStr = str
    .toLowerCase()
    .split("")
    .filter(x => {
      if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
        return false;
      } else {
        return true;
      }
    });
  return newStr.join("");
};

//OR

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, ""); //hehe
}

//Bit Counting

var countBits = function(n) {
  return n
    .toString(2)
    .split("")
    .filter(x => x === "1").length;
};

//House Numbers Sum

function houseNumbersSum(inputArray) {
  let counter = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == 0) {
      return counter;
    } else {
      counter += inputArray[i];
    }
  }
  return counter;
}

//Calculate tip

function calculateTip(amount, rating) {
  console.log(amount, rating);
  switch (rating.toLowerCase()) {
    case "excellent":
      return Math.ceil(amount * 0.2);
      break;
    case "great":
      return Math.ceil(amount * 0.15);
      break;
    case "good":
      return Math.ceil(amount * 0.1);
      break;
    case "poor":
      return Math.ceil(amount * 0.05);
      break;
    case "terrible":
      return 0;
      break;
    default:
      return "Rating not recognised";
  }
}

//get the middle character

function getMiddle(s) {
  return s.length % 2 == 0
    ? String(
        s
          .split("")
          .splice([s.length / 2 - 1], 2)
          .join("")
      )
    : String(s.split("")[Math.floor(s.length / 2)]);
}

//Be concise

const n = "You're a(n) ";

const describeAge = a => {
  return a <= 12
    ? n + "kid"
    : a <= 17
    ? n + "teenager"
    : a <= 64
    ? n + "adult"
    : n + "elderly";
};

//Is Integer Array

function isIntArray(arr) {
  return arr
    ? arr.filter(x => Number(x) === x && x % 1 === 0).length === arr.length
    : false;
}

//Minumize Sum of array

function minSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total +=
      arr[arr.indexOf(Math.max(...arr))] * arr[arr.indexOf(Math.min(...arr))];
    arr.splice(arr.indexOf(Math.max(...arr)), 1);
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    i -= 1;
  }
  return total;
}

//Move in squared strings

function vertMirror(strng) {
  let sub = strng.split("\n");
  let vert = "";
  for (let i = 0; i < sub.length; i++) {
    vert +=
      sub[i]
        .split("")
        .reverse()
        .join("") + "\n";
  }
  return vert.substring(0, vert.length - 1);
}
function horMirror(strng) {
  let sub = strng.split("\n");
  let vert = [];
  for (let i = 0; i < sub.length; i++) {
    vert.unshift(sub[i] + "\n");
  }
  vert = vert.join("");
  return vert.substring(0, vert.length - 1);
}

function oper(fct, s) {
  return fct(s);
}

//Multiples of 3 or 5

function solution(number) {
  let numOfMult = 0;
  for (let i = 0; i < number; i++) {
    if ((i % 3 === 0) & (i % 5 === 0)) {
      numOfMult += i;
    } else if (i % 3 === 0) {
      numOfMult += i;
    } else if (i % 5 === 0) {
      numOfMult += i;
    }
  }
  return numOfMult;
}

//A rule of divisibility by 7

function seven(m) {
  if (m == 0) {
    return [0, 0];
  }
  let steps = 0;
  let numPop = 0;
  let final = [];
  let numTable = m;
  while (final.length !== 2) {
    numTable = String(numTable).split("");
    numPop = Number(numTable.pop()) * 2;
    numTable = Number(numTable.join(""));
    steps++;
    numTable -= numPop;
    if (numTable < 100) {
      final.push(numTable);
      final.push(steps);
    }
  }
  return final;
}

//Count the divisors of a number

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

//London CityHacker

function londonCityHacker(journey) {
  let fare = 0;
  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] === "string") {
      fare += 2.4;
    } else if (typeof journey[i] === "number") {
      if (typeof journey[i + 1] === "number") {
        busFare += 1.5;
        i++;
      } else {
        fare += 1.5;
      }
    }
  }
  return `£${(busFare + tubeFare).toFixed(2)}`;
}

//Expressions Matter Again!
// My code improved :)

function expressionMatter(a, b, c) {
  let w = (a + b) * c;
  let x = a * (b + c);
  let y = a + b + c;
  let z = a * b * c;
  return Math.max(w, x, y, z);
}

//Will you make it

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};

//Find Numbers which are divisible by a given number

const divisibleBy = (numbers, divisor) =>
  numbers.filter(n => n % divisor === 0);

//Odd or Even?
function oddOrEven(array) {
  return array.length === 0
    ? "even"
    : array.reduce((a, b) => a + b) % 2 === 0
    ? "even"
    : "odd";
}

//PANDEMIA

function infected(s) {
  let arr = s.split("");
  let total = 0;
  let infected = 0;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "X") {
      if (temp.includes("1")) {
        total += temp.length;
        infected += temp.length;
        temp = [];
      } else {
        total += temp.length;
        temp = [];
      }
    } else {
      temp.push(arr[i]);
    }
  }
  if (temp.includes("1")) {
    total += temp.length;
    infected += temp.length;
  } else total += temp.length;
  return 100 * (infected / total) || 0;
}

//Most Sales

function top3(products, amounts, prices) {
  let revenues = amounts.map((amount, i) => amount * prices[i]);
  let bestProducts = [];
  for (let i = 0; i < 3; i++) {
    bestProducts.push(products[revenues.indexOf(Math.max(...revenues))]);
    revenues[revenues.indexOf(Math.max(...revenues))] = -Infinity;
  }
  return bestProducts;
}

//Calculate Parity Bit

function checkParity(parity, bin) {
  let arr = bin.split("").sort((a, b) => a - b);
  let ones = arr.splice(arr.indexOf("1"), arr.length).length % 2 === 0;

  if (parity == "even") {
    return ones ? 0 : 1;
  } else if (parity == "odd") {
    return ones ? 1 : 0;
  }
}

//Return the first M multiples of N

function multiples(m, n) {
  return Array.from(Array(m), (_v, i) => (i + 1) * n);
}

//Trianguar Numbers

function isTriangular(t) {
  let n = Math.round(Math.sqrt(t * 2));
  return t === (n * (n + 1)) / 2;
}

//Sum of angles

function angle(n) {
  return (n - 2) * 180;
}
