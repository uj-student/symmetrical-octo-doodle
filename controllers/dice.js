let die1Wins = 0;
let die2Wins = 0;
let draws = 0;

function setupPage() {
    let imageElement = document.createElement("img");
    imageElement.setAttribute("src", "../image-asserts/dice.jpeg");
    imageElement.setAttribute("id", "dicePlaceHolderImage")
    document.getElementById("container").appendChild(imageElement)
}

function loadDiceImages() {
    let die1Container = document.createElement("div")
    die1Container.setAttribute("class", "diceImage")
    die1Container.setAttribute("id", "diceImage")
    let dieImage1 = document.createElement("img")
    dieImage1.setAttribute("id", "firstDieImg")
    dieImage1.setAttribute("alt", "First Die Image")
    document.getElementById("container").appendChild(die1Container)
    document.getElementById("diceImage").appendChild(dieImage1)

    let die2Container = document.createElement("div")
    die2Container.setAttribute("class", "diceImage")
    die2Container.setAttribute("id", "diceImage")
    let dieImage2 = document.createElement("img")
    dieImage2.setAttribute("id", "secondDieImg")
    dieImage2.setAttribute("alt", "Second Die Image")
    document.getElementById("container").appendChild(die2Container)
    document.getElementById("diceImage").appendChild(dieImage2)
}

function cleanupPage() {
    if (document.getElementById("dicePlaceHolderImage") != null) {
        document.getElementById("dicePlaceHolderImage").remove()
        loadDiceImages()
    }
}

function setScore(valueToUpdate) {
    if (valueToUpdate === "die1Wins") {
        die1Wins++;
    } else if (valueToUpdate === "die2Wins") {
        die2Wins++;
    } else {
        draws++;
    }
}

function getScore() {
    return `Die 1 has -> <b>${die1Wins}</b> wins. </br>Die 2 has -> <b>${die2Wins}</b> wins. </br>Number of draws -> <b>${draws}</b>.`;
}

function changeDiceBackground(die1Value, die2Value) {
    if (die1Value > die2Value) {
        document.getElementById("firstDieImg").style.background = "green";
        document.getElementById("secondDieImg").style.background = "red";
        setScore("die1Wins");
    } else if (die1Value < die2Value) {
        document.getElementById("secondDieImg").style.background = "green";
        document.getElementById("firstDieImg").style.background = "red";
        setScore("die2Wins");
    } else {
        document.getElementById("secondDieImg").style.background = "orange";
        document.getElementById("firstDieImg").style.background = "orange";
        setScore("draws");
    }
}

function rollADie() {
    return Math.ceil(Math.random() * 6);
}

function rollSomeDice() {
    const die1Value = rollADie();
    const die2Value = rollADie();

    cleanupPage()

    // surely this can be refactored / cleaned up
    if (die1Value === 1) {
        document.getElementById("firstDieImg").src = "../image-asserts/1.png";
    }
    if (die2Value === 1) {
        document.getElementById("secondDieImg").src = "../image-asserts/1.png";
    }
    if (die1Value === 2) {
        document.getElementById("firstDieImg").src = "../image-asserts/2.png";
    }
    if (die2Value === 2) {
        document.getElementById("secondDieImg").src = "../image-asserts/2.png";
    }
    if (die1Value === 3) {
        document.getElementById("firstDieImg").src = "../image-asserts/3.png";
    }
    if (die2Value === 3) {
        document.getElementById("secondDieImg").src = "../image-asserts/3.png";
    }
    if (die1Value === 4) {
        document.getElementById("firstDieImg").src = "../image-asserts/4.png";
    }
    if (die2Value === 4) {
        document.getElementById("secondDieImg").src = "../image-asserts/4.png";
    }
    if (die1Value === 5) {
        document.getElementById("firstDieImg").src = "../image-asserts/5.png";
    }
    if (die2Value === 5) {
        document.getElementById("secondDieImg").src = "../image-asserts/5.png";
    }
    if (die1Value === 6) {
        document.getElementById("firstDieImg").src = "../image-asserts/6.png";
    }
    if (die2Value === 6) {
        document.getElementById("secondDieImg").src = "../image-asserts/6.png";
    }
    afterRoll(die1Value, die2Value)
}

function afterRoll(die1Value, die2Value) {
    changeDiceBackground(die1Value, die2Value);
    document.getElementById("results").innerHTML = getScore();
}

function pageRefreshWarning() {
    window.addEventListener('beforeunload', function (e) {
        // Cancel the event
        e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        e.returnValue = 'Score will be reset.\nAre you sure?';
    });
}
