
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
    var newWord = Word.getRandom()
    newWord.build()

    this.$rootWord.show()
    this.$scoreboard.show()
    this.$wordList.show()

    var $allWordListEls = $('.js--gameWords')
    $allWordListEls.click( (event) => { listenerFunction(event) } )

    // define the listener function that checks whether right or not
    // and make all the changes necessary to score, mistakes, etc

  }


}
