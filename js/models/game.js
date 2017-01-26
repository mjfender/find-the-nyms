
class Game {
  constructor(round= 1, level=1) {
    this.player1 = new Player(1)
    this.player2 = new Player(2)
    this.round = 0
    this.level = 0
  }

  advanceRound() {
    this.round ++
  }

  currentPlayer() {
    if (this.round % 2 === 0) {
      return 1
    } else {
      return 2
    }
  }

  
}