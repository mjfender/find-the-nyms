var allWords = []


class Word {
  constructor(name, object) {
    this.name = name
    this.all = object // this is the synonyms and antonyms
    Word.all.push(this)
  }

  wordEl(){
    return `` // html tag for the word divs
  }

  
  build(){
    //append the divs
  }

}

Word.all = allWords

var seeds = [{},{}]

function randomWord(){

}
