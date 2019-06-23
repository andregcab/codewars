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