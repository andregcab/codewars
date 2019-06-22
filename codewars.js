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
 