var allWords = []
var fillerWords = []
// var usedWords = []

class Word {
  constructor(name, object, real = true) {
    this.name = name
    this.all = object // this is the synonyms and antonyms

    if (real) {
      Word.all.push(this)
    // pushes filler words into the instance's .filler 
    }
    else { Word.filler.push(this)}
  }

  wordEl(){
    return `<h3 id="rootWord_h3">${this.name}</h3>`
  }

  listEl(){
    var array = []
    var wordObject = this.all
    for (var key in wordObject) {
      array.push(`<div id="${key}_${wordObject[key]}" class="col s4 js--gameWords"><h4>${key}</h4></div>`)
    }

    return  array.concat(Word.randomFiller())
  }

  randomizeList(){
    var array = this.listEl()
    array.forEach((element, i, array) => {
      var currentIndex = Math.floor(Math.random() * ( i + 1))
      var temp = array[i]
      array[i] = array[currentIndex]
      array[currentIndex] = temp;
    })
    return array.slice(0, 24)
  }


  build(){
    $('#rootWord').append(this.wordEl())
    var listOfWords = this.randomizeList().join('')
    $('#wordList').append(listOfWords)
  }

  static randomWords(startLevel = 0){
    var array = Word.all.slice(startLevel)
    array.forEach((element, i, array) => {
      var currentIndex = Math.floor(Math.random() * ( i + 1))
      var temp = array[i]
      array[i] = array[currentIndex]
      array[currentIndex] = temp;
    })
    return array
  }

  static randomFiller(){
    var array = []
    var fillerObject = Word.filler[0].all

    for (var key in fillerObject) {
      array.push(`<div id="${key}_${fillerObject[key]}" class="col s4 js--gameWords"><h4>${key}</h4></div>`)

    }

    array.forEach((element, i, array) => {
      var currentIndex = Math.floor(Math.random() * ( i + 1))
      var temp = array[i]
      array[i] = array[currentIndex]
      array[currentIndex] = temp;
    })
    return array.slice(0, 7)
  }

}

Word.all = allWords
Word.filler = fillerWords

