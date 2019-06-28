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