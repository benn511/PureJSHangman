const Game = new Hangman();
//Page class handles and updates any HTML text
const page = new Page();

Game.updateDrawing();
page.update(Game); //Init game page
page.setStatus("Press any key to begin guessing!");

//Game logic is handled by this event handler after every key press.
/*Key up event handler function: This function checks alpha keys and updates game based on a right or wrong answer.
Important: Game ends at the end of the key press event but will not reset until after pressing any key */
const checkKey = (keyPressed) => {
  page.setTitle("Hangman");
  page.setStatus("Currently playing");
  Game.processKey(keyPressed);
  page.update(Game);
  //Update canvas
  Game.updateDrawing();
  //String format game state
  console.log(Game.getGameState());

  //End game scenarios
  if (Game.gameWon()) {
    let prevWord = Game.getWord();
    Game.reset();
    page.update(Game);
    page.setStatus(`Good job! Press any key to guess a different word.`);
    page.setTitle(`Congratulations on guessing:${prevWord}`);
  } else if (Game.outOfLives()) {
    let prevWord = Game.getWord();
    Game.reset();
    page.update(Game);
    page.setStatus(
      `Ran out of lives! The word was: ${prevWord}. Press any key to play again.`
    );
    page.setTitle(`Game Over!`);
  }
};
window.addEventListener("keyup", checkKey, false);

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function () {
  Game.reset();
  Game.updateDrawing();
  page.update(Game);
  page.setStatus("Press any key to begin guessing!");
  page.setTitle("Hangman");
});
