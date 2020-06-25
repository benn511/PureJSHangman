/*Main game class using 2 outside helper methods from other files to redraw canvas and update html. Game class handles most of the game logic such as checking for win conditions and getter or setter functions */
class Hangman {
  constructor() {
    this.numLives = 6;
    this.guesses = [];
    this.gameWords = [
      "hello world",
      "python",
      "ruby",
      "axiom",
      "notation",
      "develop",
      "cashews",
      "jazz"
    ];
    this.word = "hello world";
    // this.word = this.gameWords[this.getRandomIndex()];
  }
  getWord() {
    return this.word;
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
  getGameState() {
    return `Currently guessing: ${this.word}, Current lives:${this.numLives}, Guesses include ${this.guesses}`;
  }
  checkLetter(letter) {
    if (this.guesses.indexOf(letter) == -1) {
      //if new guess
      if (this.word.indexOf(letter) == -1) {
        //If guess is wrong then lose a life
        this.numLives--;
      }
      this.guesses.push(letter); //Add unique guess to array
    }
  }
  reset() {
    this.numLives = 6;
    this.guesses = [];
    this.word = this.gameWords[this.getRandomIndex()];
    this.update();
  }
  outOfLives() {
    return this.numLives === 0 ? true : false;
  }
  dispMsg() {
    if (this.numGuesses() == 0) {
      startMsg.innerHTML = "Press any key to continue";
    } else {
      startMsg.innerHTML = "";
    }
    lives.innerHTML = `Num lives: ${this.numLives}`;
  }
  dispAnswer() {
    showAnswer(this.word);
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
  update() {
    let happy = this.numLives > 0 ? true : false;
    updateCanvas(this.numLives, happy);
    updateGameText(this.word, this.guesses);
    this.dispMsg();
  }
}
