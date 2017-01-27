
class GameController {
  constructor() {
    this.$rootWord = $('#rootWord')
    this.$scoreboard = $('#scoreboard')
    this.$wordList = $('#wordList')
    this.$startButton = $('#start-button')
    this.$roundboard = $('#roundboard')
  }

  init() {
    this.$rootWord.hide()
    this.$scoreboard.hide()
    this.$wordList.hide()
    this.$roundboard.hide()


    this.$startButton.click( (event) => {
      this.startGame()
    })
  }

  startGame() {
    this.$startButton.hide()
    var newGame = new Game()
    this.buildRandomWord()
    this.$rootWord.show()
    this.$scoreboard.show()
    this.$wordList.show()
    this.$roundboard.show()
    this.startRound(newGame)
    // endRound()
    // startRound()
    // endGame()

    var $allWordListEls = $('.js--gameWords')
    $allWordListEls.click((event) => this.eventHandler(event, newGame))


  }

  buildRandomWord(){
    var newWord = Word.getRandom()
    newWord.build()
    return newWord
  }

  endRound(){
    this.$rootWord.hide()
    this.$wordList.hide()
  }


  startRound(newGame){
    this.$rootWord.show()
    this.$wordList.show()
    this.round ++


  }

  eventHandler(event, newGame){
    var wordInfo = event.currentTarget.id
    var [wordName, wordType] = wordInfo.split("_")
    var value = newGame.getLevelValue()
    var currentPlayer = newGame.currentPlayer()
    var $wordDivInDOM = $(`#${wordInfo}`)


      if (value.includes(wordType)) {
        $wordDivInDOM.css('background-color', '#A9FFCB')
        currentPlayer.winsPoint()
      } else {
        $wordDivInDOM.css('background-color', '#EF271B')
        currentPlayer.makesMistake()
      }
      $('#player').html(`Player ${currentPlayer.id}`)
      $('#score').html(`Score: ${currentPlayer.score}`)

      if (currentPlayer.roundScore >= 5 || currentPlayer.mistakes >= 3) {
        alert('Round over, boo')
      }

      $wordDivInDOM.unbind("click")
      console.log("It worked!")
    }
  // define the listener function that checks whether right or not
  // and make all the changes necessary to score, mistakes, etc


}
