class Player {
  constructor(id) {
    this.id = id
    this.score = 0
    this.roundScore = 0
    this.mistakes = 0
    // this.correct_words = []
  }

  makesMistake() {
    this.mistakes ++
    this.score --
    this.roundScore --
  }

  winsPoint(word) {
    // this.correct_words.push(word)
    this.score ++
    this.roundScore ++
  }




}
// note: in another model, figure out how to keep track of points earned per round per player