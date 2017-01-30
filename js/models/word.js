var allWords = []


class Word {
  constructor(name, object) {
    this.name = name
    this.all = object // this is the synonyms and antonyms
    Word.all.push(this)
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
    return array
  }

  randomizeList(){
    var array = this.listEl()
    array.forEach((element, i, array) => {
      var currentIndex = Math.floor(Math.random() * ( i + 1))
      var temp = array[i]
      array[i] = array[currentIndex]
      array[currentIndex] = temp;
    })
    return array.slice(0, 21)
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

}

Word.all = allWords
