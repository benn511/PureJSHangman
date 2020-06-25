// Document vars for current stats
const lives = document.getElementById("lives");
const alphabet = document.getElementById("alphabet");
const current = document.getElementById("current");
const startMsg = document.getElementById("start");
const winMessage = $(".alert-success");
const loseMessage = $(".alert-danger");
const resetBtn = $(".reset");

const toggleWinMsg = () => {
  winMessage.hide();
};
const toggleLoseMsg = () => {
  loseMessage.hide();
};

//Function: Updates current state of the game in string format. Unguessed letters are = "_ ", Guessed letters are represented by themselves e.g. "j" = "j" . Empty space between words is represented with an "*".
const updateGameText = (word, guesses) => {
  //Init var
  let updatedString = "";
  for (const letter of word) {
    if (letter == " ") {
      updatedString += "* "; //Empty space
    } else if (guesses.indexOf(letter) == -1) {
      updatedString += "_ "; //Unguessed
    } else {
      updatedString += `${letter} `; //Self-Represented letter
    }
  }
  current.innerHTML = updatedString;
  alphabet.innerHTML = guesses;
};

const showAnswer = word => {
  if (word) {
    current.innerHTML = word;
  }
};
