class GameController {
  constructor() {
    this.$rootWord = $('#rootWord')
    this.$scoreboard = $('#scoreboard')
    this.$roundboard = $('#roundboard')
    this.$wordList = $('#wordList')
    this.$startButton = $('#start-button')
    this.$startText = $('#start-text')
    this.$messageboard = $('#messageboard')
    this.$endButton = $('#end-button')
    this.randomWordArray = []
    this.intervalID = 0
    this.seconds = 30

  }

  init() {
    this.$rootWord.hide()
    this.$endButton.hide()
    this.hideBoard()
    this.$messageboard.html("<h1>Welcome</h1><h4>Grab a friend and get ready to play!</h4> <p>Learn about synonyms and antonyms while you discover new words.<br> Earn up to 5 points each round. <br> The round ends when you make three mistakes or 30 seconds run out. <br><strong>The first player to reach 20 points wins!</strong></h1>")
    this.$startButton.click( (event) => {
      this.startGame()
    })
  }


  hideBoard(){
    this.$scoreboard.hide()
    this.$roundboard.hide()
    this.$wordList.hide()
  }

  startGame() {
    var newGame = new Game()
    this.nextRound(newGame)
    this.randomWordArray = Word.randomWords()
  }

  startRound(newGame){
    this.$startButton.hide()
    this.$startButton.unbind("click")
    this.$messageboard.html(newGame.currentRulesShort())
    this.$messageboard.show()

    this.buildRandomWord()
    this.$rootWord.show()
    this.$wordList.show()
    $('#player').html(`Player ${newGame.currentPlayer().id}`)
    $('#score').html(`Score: ${newGame.currentPlayer().score}`)
    $('#mistakes').html(`Mistakes: ${newGame.currentPlayer().mistakes}`)
    $('#level').html(`Level: ${newGame.level}`)
    this.$scoreboard.show()
    this.$roundboard.show()

    this.timeout(newGame)

    var $allWordListEls = $('.js--gameWords')
    $allWordListEls.click((event) => this.eventHandler(event, newGame))
  }


  timeout(newGame){
    this.seconds = 30
    $('#timer').html(`Timer: ${this.seconds} secs`)
    this.intervalID = setInterval(() => {this.countdown(newGame)}, 1000)
  }

  countdown(newGame){
      this.seconds--
      $('#timer').html(`Timer: ${this.seconds} secs`)
    if (this.seconds == 0) {
      this.nextRound(newGame)
    }
  }

  nextRound(newGame) {
    clearInterval(this.intervalID)
    this.seconds = 30
    if (newGame.firstRun) {
      newGame.firstRun = false
    } else {
      newGame.advanceRound()
    }

    var currentPlayer = newGame.currentPlayer()
    currentPlayer.roundScore = 0
    currentPlayer.mistakes = 0

    this.$rootWord.empty()

    this.hideBoard()
    this.$messageboard.html(newGame.currentRules())
    this.$messageboard.show()
    this.$startText.html(`Player ${currentPlayer.id}: Start Next Round`)
    this.$startButton.show()
    if (newGame.round % 2 === 0 && newGame.round !== 0){
      this.$endButton.show()
      this.$endButton.click(() => this.endGame(newGame))
    }
    $(".js--gameWords").remove()

    this.$startButton.click( (event) => {
      this.startRound(newGame)
    })

  }

  endGame(newGame){
    this.$endButton.hide()
    this.$endButton.unbind("click")
    this.$startButton.hide()
    this.$startButton.unbind("click")
    var winner = newGame.declareWinner()
    this.$messageboard.html(`<h1>Game Over</h1><h4> Winner: ${winner}</h4> <p>Player1: ${newGame.player1.score}<br>  Player2: ${newGame.player2.score}<br>  <br><strong>Thank you for playing!</strong>`)
  }

  buildRandomWord(){
    var newWord = this.randomWordArray.pop()
    newWord.build()
  }

  eventHandler(event, newGame){
    var wordInfo = event.currentTarget.id
    this.interpretMove(newGame, wordInfo)
    // pass the ball
  }

  interpretMove(newGame, wordInfo){
    var wordType = wordInfo.split("_")[1]
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
  }
}
