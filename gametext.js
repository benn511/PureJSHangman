// Document vars for current stats
const lives = document.getElementById("lives");
const alphabet = document.getElementById("alphabet");
const current = document.getElementById("current");
const status = document.getElementById("status");
const resetBtn = $(".reset");

const updateStatus = (updateString) => {
  status.innerHTML = updateString;
};

//Function: Updates current state of the game in string format. Unguessed letters are = "_ ", Guessed letters are represented by themselves e.g. "j" = "j" . Empty space between words is represented with an "*".
const updateGameText = (word, guesses) => {
  let updatedString = ""; //Init var
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
  alphabet.innerHTML = "Guesses: " + guesses;
  console.log(guesses);
};

//Function:
function handleReset() {
  //Reset
}

const showAnswer = (word) => {
  if (word) {
    current.innerHTML = word;
  }
};
