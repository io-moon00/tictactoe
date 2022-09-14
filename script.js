let fields = [];
let currentShape = 'circle';
let gameOver = false;

function fillShape(id){
if (!fields[id] && !gameOver){
    if (currentShape == 'cross'){
       currentShape = 'circle';
       document.getElementById('player1').classList.remove('opacity');
       document.getElementById('player2').classList.add('opacity');
    }
    else{
        currentShape = 'cross'
        document.getElementById('player1').classList.add('opacity');
        document.getElementById('player2').classList.remove('opacity');
    }

    fields[id] = currentShape;
    draw();
    checkForWin();
    }
}


function draw(){
    for (let i=0; i<fields.length; i++){
        if (fields[i] == 'circle'){
            document.getElementById('circle' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross'){
            document.getElementById('cross' + i).classList.remove('d-none');
        }
    }
}
let winner;

function checkForWin(){
   
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1)';
    }
    if(winner || (allFieldsFilled())){
        gameOver = true;
        document.getElementById('game-content').classList.add('opacity');
        setTimeout(function(){
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('winner').classList.remove('d-none');
            document.getElementById('restart-button').classList.remove('d-none');

            if(winner){
                document.getElementById('winner').innerHTML = `${winner} hat gewonnen`;  
            }
            else{
                document.getElementById('winner').innerHTML = 'Unenteschieden'; 
            }

        }, 1000)
        
    }
}

function allFieldsFilled(){
    return (fields[0]) &&(fields[1]) && (fields[2]) && (fields[3]) && (fields[4]) && (fields[5]) && (fields[6]) && (fields[7]) && (fields[8])
}

function restartGame(){
    gameOver = false;
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('restart-button').classList.add('d-none');
    document.getElementById('game-content').classList.remove('opacity');
    document.getElementById('winner').classList.add('d-none');
    document.getElementById('winner').innerHTML = ''; 
    fields = [];
    winner = '';
    document.getElementById('player1').classList.remove('opacity');
    document.getElementById('player2').classList.add('opacity');
    currentShape = 'circle';
    for(let i =0; i<8; i++){
        if(i<3){
            document.getElementById('line-'+i).style.transform = 'scaleX(0)';
        }
        if(i>2 && i<6){
            document.getElementById('line-'+i).style.transform = 'rotate(90deg) scaleX(0)';
        }
        if(i== 6){
            document.getElementById('line-'+i).style.transform = 'rotate(45deg) scaleX(0)';
        }
        if(i==7){
            document.getElementById('line-'+i).style.transform = 'rotate(-45deg) scaleX(0)';
        }
    }
    for(let i =0; i<9; i++){
        document.getElementById('circle'+i).classList.add('d-none');
        document.getElementById('cross'+i).classList.add('d-none');
    }
}