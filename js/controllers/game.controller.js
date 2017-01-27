
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
    // Word Model is creating the html, and appending to DOM
    this.$rootWord.show()
    this.$scoreboard.show()
    this.$wordList.show()

  }


}
