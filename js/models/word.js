var allWords = []


class Word {
  constructor(name, object) {
    this.name = name
    this.all = object // this is the synonyms and antonyms
    Word.all.push(this)
  }

  wordEl(){
    return `<h3>${this.name}</h3>` // html tag for the word divs
    // <div id="rootWord" class="col s9">
    //   <h3>Divine</h3>
  }

  listEl(){
    var array = []
    var wordObject = this.all
    for (var key in wordObject) {
      array.push(`<div id="${key}_${wordObject[key]}" class="col s4 js--gameWords"><h4>${key}</h4></div>`)
    }
    return array
  }


  build(){
    $('#rootWord').append(this.wordEl())
    var listOfWords = this.listEl().join('')
    $('#wordList').append(listOfWords)
  }

}

Word.all = allWords


// function randomWord(){
//
// }
