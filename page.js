class Page {
  constructor() {
    //Game stat Text elements
    this.title = document.getElementById("title");
    this.lives = document.getElementById("lives");
    this.alphabet = document.getElementById("alphabet");
    this.current = document.getElementById("current");
    this.status = document.getElementById("status");
    //Game buttons
    this.resetBtn = document.getElementById("reset");
  }
  setTitle(newTitle) {
    if (typeof newTitle === "string") {
      this.title.innerHTML = newTitle;
    } else {
      console.error(`Invalid type passed...Object passed: ${newTitle}`);
    }
  }
  setStatus(updateString) {
    this.status.innerHTML = updateString;
  }
  setCurrent(updatedString) {
    if (typeof updatedString === "string") {
      current.innerHTML = updatedString;
    } else {
      console.log(
        `Invalid string passed in Page.setCurrent(): ${updatedString}`
      );
    }
  }
  setAlphabet(guesses) {
    if (guesses) {
      this.alphabet.innerHTML = "You have guessed: " + guesses;
      this.alphabet.innerHTML = `You have guessed ${guesses} so far...`;
    } else {
      console.log(`Invalid array passed: ${guesses} in Page.setAlphabet()`);
    }
  }
  setLives(numLives) {
    if (numLives > -1) {
      let heartsHtml = "";
      for (let i = 0; i < numLives; i++) {
        heartsHtml += "favorite ";
      }
      this.lives.innerHTML = heartsHtml;
    } else {
      console.log(`Invalid parameter: ${numLives}`);
    }
  }
  update(Game) {
    if (Game) {
      page.setLives(Game.getNumLives());
      page.setAlphabet(Game.getGuesses());
      page.setCurrent(Game.calculateCurrent());
    } else {
      console.error(`Invalid param: ${Game}`);
    }
  }

  reset() {
    /*Function Goal: To reset all the html of the game page. 
    Function parameters: softReset is a boolean value indicating whether to keep the preserve the previous status of the game */
    this.status.innerHTML += " Press any key to start a new game";
    this.alphabet.innerHTML = "Current guesses include: ";
    this.lives.innerHTML =
      "favorite favorite favorite favorite favorite favorite";
  }
  revealWord(word) {
    if (word) {
      this.status.innerHTML = `Final answer was :${word}!`;
    }
  }
}
