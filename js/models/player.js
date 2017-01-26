class Player {
  constructor(id) {
    this.id = id
    this.score = 0
    this.mistakes = 0
    // this.correct_words = []
  }

  makesMistake() {
    this.mistakes ++
    this.score --
  }

  winsPoint(word) {
    // this.correct_words.push(word)
    this.score ++
  }




}
// note: in another model, figure out how to keep track of points earned per round per player