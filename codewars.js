// Total amount of points

function points(games) {
  let gamePoints = 0
 
   games.map (game => {
   var x = game[0]
   var y = game[2] 
     if(x>y) {
     gamePoints += 3
   } else if (x<y) {
     
   }else if (x=y) {
     gamePoints ++
   } 
   }) 
    return gamePoints 
 }





 //Sum without highest and lowest number


 function sumArray(array) {
  if(!array){
  return 0
  } if(array.length < 1) {
  return 0
  } console.log(array)
    var min = Math.min(...array)
    console.log(min)
    var max = Math.max(...array)
    console.log(max)
    var sum = 0  
  
  for (var i = 0; i < array.length; i++) {
       if (array.length == 1) {
       max -= min 
       }  sum += array[i]
      } return sum - (max + min)
}


//Count of positives / sum of negatives

function countPositivesSumNegatives(input) {

  let sumArray = [0,0]
  
  if (!input || input.length === 0) {
        return [];
  }
  for(i = 0; i < input.length ; i ++) {
      if(input[i] > 0) {
        sumArray[0]++
      } else if(input[i] <= 0) {
        sumArray[1] += input[i]
      } 
  } return sumArray
}

//Directions Reduction

function dirReduc(arr){
  let newArr = arr
    for(i=0; i<newArr.length; i++){
    
      console.log("top",arr)
      
       if(newArr[i] === "NORTH" && newArr[i+1] === "SOUTH"){
        newArr.splice(i,2)
        console.log('second',newArr)
        i-=2
      }
      if(newArr[i] === "SOUTH" && newArr[i+1] === "NORTH"){
        newArr.splice(i,2)
        console.log('third',newArr)
        i-=2
      }
      if(newArr[i] === "EAST" && newArr[i+1] === "WEST"){
        newArr.splice(i,2)
        console.log("fourth",newArr)
        i-=2
      }
      if(newArr[i] === "WEST" && newArr[i+1] === "EAST"){
        newArr.splice(i,2)
        console.log('fifth',newArr)
        i-=2
        
      }
    } 
      
    return newArr
  };


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
  if(angle === 0 || angle === 360){
    return "12:00"
  } else {
      let dMin = angle * 2
      let hours = Math.floor(dMin/60)
      let minutes = Math.floor(dMin % 60)
      if(hours === 0){hours = "12"}else if(hours < 10){hours = (`0${hours}`)}
      if(minutes === 0){minutes += "0"}else if (minutes < 10){minutes = (`0${minutes}`)}
      return (`${hours}:${minutes}`)
    }
}


//Is there a vowel in there?


function isVow(a){
  let newStr = a
  for(i=0; i<a.length; i++){
    if(a[i] === 97){
      a.splice(i,1,"a")
    } else if(a[i] === 101){
      a.splice(i,1,"e")
    } else if(a[i] === 105){
      a.splice(i,1,"i")
    } else if(a[i] === 111){
      a.splice(i,1,"o")
    } else if(a[i] === 117){
      a.splice(i,1,"u")
    }
  }
  return newStr
}; 


//Find the missing letter

function findMissingLetter(array){
  
  let start = array[0]
  let charCodeS = start.charCodeAt(0)
  let end = array[array.length-1]
  let charCodeE = end.charCodeAt(0)
  let newArray = []

  for(charCodeS; charCodeS <= charCodeE; charCodeS++){  
    let letterToPush = String.fromCharCode(charCodeS)
    newArray.push(letterToPush)
  }

  let missingLetter = newArray.filter((letter) =>!array.includes(letter))

  return missingLetter[0]
}

//Street Fighter 2 - Character Selection


function streetFighterSelection(fighters, position, moves){
  
  let x = position[0]
  let y = position[1]
  let fighterArray = []

  for(let i = 0; i < moves.length; i++){
    if(moves[i] === 'up'){x = 0};
    if(moves[i] === 'down'){x = 1};
    if(moves[i] === 'right'){
    if(y === 5){
      y = 0
    } else {
      y += 1
    }
    }
    if(moves[i] === 'left'){
      if(y === 0){
        y += 5
    } else {
      y -= 1
    }
    }
    fighterArray.push(fighters[x][y])
  }
 return fighterArray
}

//Expressions Matter

function expressionMatter(a, b, c) {
  let test1 = a * (b + c)
  let test2 = (a + b) * c
  let test3 = a + b + c
  let test4 = a * b * c
  let numbers = [test1, test2, test3, test4]
  return Math.max(...numbers)
}



// Spacify 

function spacify(str) {
  let newWord = ''
for(let i = 0; i < str.length; i++){
  i !== str.length -1 ? newWord += (str.charAt(i) + ' ') : newWord += (str.charAt(i))
}
return newWord
}


//Find the Parity Outlier

function findOutlier(integers){
  let isEven = 0
  let isOdd = 0
  for(i = 0; i < 3; i++){
    integers[i] % 2 === 0 ? isEven ++ : isOdd ++
  }
  return isEven > isOdd ? integers.filter(num => num % 2 !== 0)[0] : integers.filter(num => num % 2 === 0)[0]
}

//sum of odd numbers 

function rowSumOddNumbers(n) {
	let totalNumbers = ((n*(n+1)/2) * 2) - 1 
  let counter = 0
  for(let i = 1; i <= n ; i++){
    counter += totalNumbers
    totalNumbers -= 2
  }
  return counter
}

//L1 Set alarm

function setAlarm(employed, vacation){
  return employed === true && vacation === false ? true : false
  
  }


//Make Upper Case

const makeUpperCase = (str) => str.toUpperCase();

//Grasshopper - Summation

var summation = function (num) {
  let sum = 0
  for (let i = 0; i <= num; i++) {
    sum += i
  }
  return sum
 }

//Remove String Spaces 

const noSpace = x => x.replace(/\s/g, '')


// V A P O R W A V E 

const vaporcode = string => string.replace(/\s/g, '').split('').join('  ').toUpperCase()

//My head is at the wrong end!

const fixTheMeerkat = arr => arr.reverse()

//or

function fixTheMeerkat(arr) {
  return arr.reverse()
}