const Game = new Hangman();
//Page class handles and updates any HTML text
const page = new Page();
// Game.update();

//Game logic is handled by this event handler after every key press.
/*Key up event handler function: This function checks alpha keys and updates game based on a right or wrong answer.
Important: Game ends at the end of the key press event but will not reset until after pressing any key */
const checkKey = (keyPressed) => {
  Game.processKey(keyPressed);
  //Page update methods
  page.setLives(Game.getNumLives());
  page.setAlphabet(Game.getGuesses());
  page.setCurrent(Game.calculateCurrent());
  Game.getGameState();
  //Update Canvas
  Game.updateDrawing();
  //String format game state
  console.log(Game.getGameState());

  //Game logic
  if (Game.gameWon()) {
    page.setStatus(`Congratulations on winning! Final game stats: `);
    let preserveStatus = true;
    page.resetPage(preserveStatus);
  } else if (Game.outOfLives()) {
    page.setStatus(`Ran out of lives! The word was: ${Game.getWord()}.`);
    let preserveStatus = true;
    page.resetPage(preserveStatus, Game.getNumLives());
  }
};
window.addEventListener("keyup", checkKey, false);
