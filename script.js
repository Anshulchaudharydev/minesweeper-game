let bombPosition; 
let score=0;
let gameEnded =false; 
const blastAudio = document.getElementById("blastAudio");

function _(selector){
    return document.getElementById(selector);
}

function startGame(){
    _("startBttn").style.display = "none";
    _("gameboxes").style.display = "flex";
    _("header").style.display = "block";
    document.querySelector(".score").style.display = "block";
    bombPosition = Math.round(Math.random()*15);
    console.log(bombPosition);
    gameEnded = false;
    score= 0;
    _("score").textContent = score;
}


    
function openBoxes(n){
    if (gameEnded) return;
    let position = n.id;
    if(+position==bombPosition){
        blastAudio.play();
        n.style.backgroundColor = "red"; 
        n.innerText = "💣"; 
        _("gameStatus").style.color = "red";
        _("message").textContent = "You Lost ! Sorry you clicked the bomb";
        _("message").style.color = "red";
        _("result").style.scale = "1";
        document.getElementById("restartBttn").style.display = "block";
        gameEnded = true;
    }
    else if(n.textContent!=="🪙"){
        n.style.backgroundColor = "white"; 
        n.innerText = "🪙" ; 
        score++;
        var audio = new Audio('game.wav');
        audio.play();
        _("score").textContent = score;
        if(score==15){
            _("gameStatus").innerText= "You Won";
            _("gameStatus").style.color = "green";
            _("message").innerText = "Great! Congratulations you won!";
            _("message").style.color = "green";
            _("result").style.scale = "1";
            document.getElementById("restartBttn").style.display = "block";
            gameEnded= true;
        }
        
        
    }
}