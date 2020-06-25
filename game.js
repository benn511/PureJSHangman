//Init game
toggleLoseMsg();
toggleWinMsg();
const Game = new Hangman();
Game.update();

//Game logic is handled by this event handler after every key press.
/*Key up event handler function: This function checks alpha keys and updates game based on a right or wrong answer.
Important: Game ends at the end of the key press event but will not reset until after pressing any key */
const checkKey = keyPressed => {
  Game.getGameState();
  if (Game.gameWon()) {
    winMessage.hide();
    Game.reset();
  } else if (Game.outOfLives()) {
    loseMessage.hide();
    Game.reset();
    //display correct answer after a loss
  } else {
    if (!Game.outOfLives() || !Game.gameWon) {
      if (keyPressed.keyCode >= 65 && keyPressed.keyCode <= 90) {
        Game.checkLetter(keyPressed.key);
        console.log(Game.getGameState());
        Game.update();
        if (Game.gameWon()) {
          winMessage.show();
        } else if (Game.outOfLives()) {
          loseMessage.show();
          Game.dispAnswer();
        }
      }
    }
  }
};
window.addEventListener("keyup", checkKey, false);
