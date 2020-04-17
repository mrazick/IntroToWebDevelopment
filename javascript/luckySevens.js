function playLuckySevens () {
    // var form = document.forms["sevensForm"];
    // var startingBet = form["startingBet"].valueAsNumber;
    var startingBet = document.getElementById("startingBet").value;
    var wallet = startingBet;
    var dieOne = 0;
    var dieTwo = 0;
    var rolls = 0;
    var maxWinnings = 0;
    var rollsonMaxWinnings = 0;

    if (wallet <= 0) {
        alert("You must enter a Starting Bet greater than $0");
        return false;
    }

    while (wallet > 0) {
        dieOne = rollDice(6);
        dieTwo = rollDice(6);
        rolls++;

        if (dieOne + dieTwo == 7) {
            wallet+=4;
        }
        else {
            wallet-=1;
        }

        if (wallet > maxWinnings) {
            maxWinnings = wallet;
            rollsonMaxWinnings = rolls;
        }
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Play Again!";
    document.getElementById("initialBet").innerText = "$" + startingBet;
    document.getElementById("rolls").innerText = rolls;
    document.getElementById("maxWinnings").innerText = "$" + maxWinnings;
    document.getElementById("rollsonMaxWinnings").innerText = rollsonMaxWinnings;

    return false;
}

function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
  }