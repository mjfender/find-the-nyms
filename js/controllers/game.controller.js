
class GameController {
  constructor() {
    this.$rootWord = $('#rootWord')
    this.$scoreboard = $('#scoreboard')
    this.$roundboard = $('#roundboard')

    this.$wordList = $('#wordList')
    this.$startButton = $('#start-button')
    this.$startText = $('#start-text')
  }

  init() {
    this.$rootWord.hide()
    this.$scoreboard.hide()
    this.$roundboard.hide()
    this.$wordList.hide()

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
    this.$roundboard.show()

    this.$wordList.show()
    this.startRound(newGame)
    // endRound()
    // startRound()
    // endGame()

    var $allWordListEls = $('.js--gameWords')
    $allWordListEls.click((event) => this.eventHandler(event, newGame))


  }

  nextRound(newGame) {
    this.$rootWord.hide()
    this.$scoreboard.hide()
    this.$wordList.hide()
    this.$roundboard.hide()
    this.$startText.html('Start Next Round')
    this.$startButton.show()

    this.$startButton.click( (event) => {
      this.startRound(newGame)
    })

  }

  startRound(newGame){
    this.$rootWord.show()
    this.$wordList.show()
    this.round ++
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

  eventHandler(event, newGame){
    var wordInfo = event.currentTarget.id
    var wordType = wordInfo.split("_")[1]
    this.interpretMove(newGame, wordInfo, wordType)
    // pass the ball
  }


  interpretMove(newGame, wordInfo, wordType){ 
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
    $('#mistakes').html(`Mistakes: ${currentPlayer.mistakes}`)
    $wordDivInDOM.unbind("click")

    if (this.roundOver(newGame)) {
      this.nextRound(newGame)
    }
  }


  roundOver(newGame) {
    return newGame.currentPlayer().roundScore >= 5 || newGame.currentPlayer().mistakes >= 3
    // ADD A TIMER WHILE LOOP???
  }


}
  // define the listener function that checks whether right or not
  // and make all the changes necessary to score, mistakes, etc

