const finalPosition = function(moves) {
  let xCoordinate = 0;
  let yCoordinate = 0;
  

  for (var direction of moves) {
    
    if (direction === "north") {
      yCoordinate += 1; 

    } else if (direction === "south") {
      yCoordinate -= 1;

    }
    
    if (direction === "east") {
      xCoordinate += 1;

    } else if (direction === "west") {
      xCoordinate -= 1;

    }
    

  }
  
  return [xCoordinate, yCoordinate];
  
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));