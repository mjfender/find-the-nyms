
class Game {
  constructor(round= 0, level= 0) {
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
      return this.player1
    } else {
      return this.player2
    }
  }

  getLevelValue(){
    switch (this.level){
      case 0:
        return ["synonym"]
        break;
      case 1:
        return ["antonym"]
        break;
      case 3:
        return ["synonym", "antonym"]
        break;
    }
  }

  }
