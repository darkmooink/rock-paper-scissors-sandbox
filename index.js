const score = {
  player1:0,
  player2:0,
  draw:0
}
const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      score.draw++
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      score.player1++
      return "Player One wins!";
    }
    score.player2++
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {

    // TODO Implement this method to update the DOM
    // There are some images you can use in the images directory
    const player1Image = document.querySelector("#player-one-move__img")
    const player2Image = document.querySelector("#player-two-move__img")
    const player1Name = document.querySelector("#player-one-move__name")
    const player2Name = document.querySelector("#player-two-move__name")
    player1Image.setAttribute("src", "images/"+moveOne+'.png')
    player2Image.setAttribute("src", "images/"+moveTwo+'.png')
    player1Name.textContent = moveOne
    player2Name.textContent = moveTwo

    const oldAnnouncement  = document.querySelector('#announcement')
    if (oldAnnouncement != null) oldAnnouncement.remove()
    const button = document.querySelector('#play-btn')
    const announcement = document.createElement('h2')
    announcement.style.color = "red"
    announcement.textContent = outcome
    announcement.id = 'announcement'
    button.insertAdjacentElement("afterend", announcement)

    // const score  = document.querySelector('#score')
    
    // if (score != null) {
    //   const newscore = document.createElement('h3')
    //   newscore.style.color = "pink"
    //   newscore.id = 'score'
    //   button.insertAdjacentElement("afterend", newscore)
    //   score = newscore
    // }
    // score.textContent = `player1: ${score.player1} draw: ${score.draw} Player2: ${score.player2}` 
    
  };
  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  