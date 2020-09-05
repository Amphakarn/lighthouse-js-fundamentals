const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function(moves) {
  let x = 0;
  let y = 0;
  let finalPos = [];
  for (const move of moves) {
    switch (move) {
      case 'north':
        y = y + 1;
        break;
      case 'south':
        y = y - 1;
        break;
      case 'east':
        x++;
        break;
      case 'west':
        x--;
        break;
    }
  }
  finalPos.push(x,y);
  return finalPos;
}

console.log(finalPosition(moves));