const game = () => {
  let pScore = 0;
  let cScore = 0;

  let bgm = new Audio()
  bgm.src = 'audio/main-theme.mp3'
  bgm.loop = true
  bgm.play()

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHero = document.querySelector(".player-hero");
    const computerHero = document.querySelector(".computer-hero");
    const heroes = document.querySelectorAll(".heroes img");

    heroes.forEach(hero => {
      hero.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["Strength", "Agility", "Intelligence"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //compare hero
          compareHeroes(this.textContent, computerChoice);
          //Update Images
          playerHero.src = `./img/${this.textContent}.png`;
          computerHero.src = `./img/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHero.style.animation = "shakePlayer 2s ease";
        computerHero.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHeroes = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    // Strength
    if (playerChoice === "Strength") {
      if (computerChoice === "Intelligence") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    // Agility
    if (playerChoice === "Agility") {
      if (computerChoice === "Intelligence") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    // Intelligence
    if (playerChoice === "Intelligence") {
      if (computerChoice === "Strength") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
