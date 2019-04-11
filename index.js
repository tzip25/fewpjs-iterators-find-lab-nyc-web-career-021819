const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin (games) {
  let winningGame = games.find(game => game.result === "W")
  if(winningGame){
    return winningGame.year
  }
}
