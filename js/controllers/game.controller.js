
class GameController {
  constructor() {
    this.$rootWord = $('#rootWord')
    this.$scoreboard = $('#scoreboard')
    this.$wordList = $('#wordList')
    this.$startButton = $('#start-button')
  }

  init() {
    this.$rootWord.hide()
    this.$scoreboard.hide()
    this.$wordList.hide()

    this.$startButton.click( (event) => {
      this.startGame()
    })
  }




  startGame() {
    this.$startButton.hide()
    var newGame = new Game()
    var newWord = Word.getRandom()
    newWord.build()

    this.$rootWord.show()
    this.$scoreboard.show()
    this.$wordList.show()

    var $allWordListEls = $('.js--gameWords')
    $allWordListEls.click( (event) => {
      debugger
      var wordInfo = event.currentTarget.id.
      var [wordName, wordType] = wordInfo.split("_")
      var value = newGame.getLevelValue()
      console.log(this.currentPlayer.score)
      if (wordType === value) {
          console.log(this.currentPlayer.score)
        currentPlayer.winsPoints()
      } else {
        //currentPlayer.makesMistake()
      }
      debugger
      // listenerFunction(event)
    })

    // define the listener function that checks whether right or not
    // and make all the changes necessary to score, mistakes, etc

  }


}
