class Game {
  constructor(round= 0, level= 0) {
    this.player1 = new Player(1)
    this.player2 = new Player(2)
    this.round = 0
    this.level = 0
    this.firstRun = true
  }

  advanceRound() {
    this.round ++
    // advance the game's level every 2 rounds
    if (this.round % 2 === 0) this.level = this.round / 2
  }

  currentPlayer() {
    if (this.round % 2 === 0) {
      return this.player1
    } else {
      return this.player2
    }
  }

  currentRules() {
    switch (this.level) {
      case 0:
        return "<h5>A <strong>synonym</strong> is a word that means the same thing as another word. <br><br> When you start the round, click the words that are </strong>synonyms</strong> of the large word at the top.</h5>"
        break;
      case 1:
        return "<h5>An <strong>antonym</strong> is a word that means the opposite thing as another word. <br><br>When you start the round, click the words that are <strong>antonyms</strong> of the large word at the top.</h5>"
        break;
      case 2:
        return "<h5>This level, choose <strong>either synonyms OR antonyms.</strong> <br><br>When you start the round, click the words that are <strong>synonyms or antonyms</strong> of the large word at the top. </h5>"
        break;
    }
  }

  currentRulesShort() {
    switch (this.level) {
      case 0:
        return `<h5><strong>Player ${this.currentPlayer().id}</strong>: Click the <strong>synonyms</strong> below</h5>`
        break;
      case 1:
        return `<h5><strong>Player ${this.currentPlayer().id}</strong>: Click the <strong>antonyms</strong> below</h5>`
        break;
      case 2:
        return `<h5><strong>Player ${this.currentPlayer().id}</strong>: Click the <strong>synonyms and antonyms</strong> below</h5>`
        break;
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
      case 2:
        return ["synonym", "antonym"]
        break;
    }
  }

  }
