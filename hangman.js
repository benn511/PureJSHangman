/*Main game class using 2 outside helper methods from other files to redraw canvas and update html. Game class handles most of the game logic such as checking for win conditions and getter or setter functions */
class Hangman {
  constructor() {
    this.numLives = 6;
    this.guesses = [];
    this.gameWords = [
      "FOO",
      "JAVASCRIPT",
      "REACT",
      "NODE JS",
      "PYTHON",
      "JAVA",
      "WEB",
    ];
    this.word = this.gameWords[this.getRandomIndex()];
  }

  getGameState() {
    return `Currently guessing: ${this.word}, Current lives:${this.numLives}, Guesses include ${this.guesses}`;
  }
  processKey(key) {
    if (key) {
      if (key.keyCode > 64 && key.keyCode < 91) {
        console.log(`Valid key entered: ${key.key}`);
        let letter = key.key.toUpperCase();
        if (!this.alreadyGuessed(letter)) {
          if (this.wordContains(letter)) {
            this.numLives--;
          }
          this.guesses.push(letter); //Add unique guess to array
        }
      } else {
        console.log(`Please enter valid key: ${key.key} is not a valid guess!`);
      }
    } else {
      console.log(`Invalid key event! Parameter recieved: ${key}`);
    }
  }
  getWord() {
    return this.word;
  }
  getNumLives() {
    return this.numLives;
  }
  getGuesses() {
    return this.guesses;
  }
  calculateCurrent() {
    let currentString = "";
    for (const letter of this.word) {
      if (letter == " ") {
        currentString += "* "; //Empty space
      } else if (this.guesses.indexOf(letter) == -1) {
        currentString += "_ "; //Unguessed
      } else {
        currentString += `${letter} `; //Self-Represented letter
      }
    }
    return currentString;
  }
  wordContains(letter) {
    /*Function goal: Check if current game word contains the letter being guessed */
    if (letter) {
      if (this.word.indexOf(letter) == -1) {
        return true;
      } else return false;
    } else {
      console.log(`Parameter error: ${letter}`);
    }
  }
  alreadyGuessed(letter) {
    if (letter) {
      if (this.guesses.indexOf(letter) == -1) {
        return false;
      } else return true;
    } else {
      console.log(`Parameter error: ${letter}`);
    }
  }
  getWordLength() {
    return this.word.length;
  }
  getRandomIndex(max) {
    return Math.floor(Math.random() * this.gameWords.length);
  }
  numGuesses() {
    return this.guesses.length;
  }

  reset() {
    this.numLives = 6;
    this.guesses = [];
    this.word = this.gameWords[this.getRandomIndex()];
  }
  outOfLives() {
    return this.numLives === 0 ? true : false;
  }
  gameWon() {
    for (const letter of this.word) {
      if (letter === " ") {
        continue;
      }
      if (this.guesses.indexOf(letter) == -1) {
        return false;
      }
    }
    return true;
  }
  updateDrawing() {
    let happy = this.numLives > 0 ? true : false;
    updateCanvas(this.numLives, happy);
  }
}
