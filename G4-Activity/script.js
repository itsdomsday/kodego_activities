let wt = 0;
let wc = 0;
let score = 0;

function gamestart(){
    if (score == 100 && document.getElementById("wordgame").innerText != "Game Start!"){
        document.getElementById("wordgame").innerText = "Game Over!"
    } else {
        wordText();
        wordColor();
    }
}

function wordText(){
    wt = Math.floor(Math.random() * 10);

    if (wt == 0){
        document.getElementById("wordgame").innerText = "Red";
    } else if (wt == 1){
        document.getElementById("wordgame").innerText = "Blue";
    } else if (wt == 2){
        document.getElementById("wordgame").innerText = "Yellow";
    } else if (wt == 3){
        document.getElementById("wordgame").innerText = "Purple";
    } else if (wt == 4){
        document.getElementById("wordgame").innerText = "Red";
    } else if (wt == 5){
        document.getElementById("wordgame").innerText = "Blue";
    } else if (wt == 6){
        document.getElementById("wordgame").innerText = "Yellow";
    } else if (wt == 7){
        document.getElementById("wordgame").innerText = "Purple";
    } else if (wt == 8){
        document.getElementById("wordgame").innerText = "Red";
    } else if (wt == 9){
        document.getElementById("wordgame").innerText = "Blue";
    }
}

function wordColor(){
    wc = Math.floor(Math.random() * 10);

    if (wc == 0){
        document.getElementById("wordgame").style = "color: red";
    } else if (wc == 1){
        document.getElementById("wordgame").style = "color: blue";
    } else if (wc == 2){
        document.getElementById("wordgame").style = "color: yellow";
    } else if (wc == 3){
        document.getElementById("wordgame").style = "color: purple";
    } else if (wc == 4){
        document.getElementById("wordgame").style = "color: red";
    } else if (wc == 5){
        document.getElementById("wordgame").style = "color: blue";
    } else if (wc == 6){
        document.getElementById("wordgame").style = "color: yellow";
    } else if (wc == 7){
        document.getElementById("wordgame").style = "color: purple";
    } else if (wc == 8){
        document.getElementById("wordgame").style = "color: red";
    } else if (wc == 9){
        document.getElementById("wordgame").style = "color: blue";
    }
}

function btnRed(){
    if (wc == 0 || wc == 4 || wc == 8){
        alert("Correct!");
        score += 10;
        document.getElementById("score").innerText = "Score: " + score;
    } else {
        alert("Incorrect!");
        score = 0;
        document.getElementById("score").innerText = "Score: " + score;
    }
    totalScore();
}

function btnBlue(){
    if (wc == 1 || wc == 5 || wc == 9){
        alert("Correct!");
        score += 10;
        document.getElementById("score").innerText = "Score: " + score;
    } else {
        alert("Incorrect!");
        score = 0;
        document.getElementById("score").innerText = "Score: " + score;
    }
    totalScore();
}

function btnYellow(){
    if (wc == 2 || wc == 6){
        alert("Correct!");
        score += 10;
        document.getElementById("score").innerText = "Score: " + score;
    } else {
        alert("Incorrect!");
        score = 0;
        document.getElementById("score").innerText = "Score: " + score;
    }
    totalScore();
}

function btnPurple(){
    if (wc == 3 || wc == 7){
        alert("Correct!");
        score += 10;
        document.getElementById("score").innerText = "Score: " + score;
    } else {
        alert("Incorrect!");
        score = 0;
        document.getElementById("score").innerText = "Score: " + score;
    }
    totalScore();
}

function totalScore(){
    if (score == 100){
        document.getElementById("score").innerText = "Score: " + score;
        alert("Congrats! You reached 100 score!");
        score = 0;
        document.getElementById("wordgame").innerText = "Game Start!"
        document.getElementById("wordgame").style = "color: black";
        document.getElementById("score").innerText = "Score: " + score;
    } else {
        gamestart();
    }
}