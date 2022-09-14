let fields = [];
let currentShape = 'circle';
let gameOver = false;
let winner;


function fillShape(id){
if (!fields[id] && !gameOver){
    if (currentShape == 'cross'){
        setActivePlayer1(); 
        currentShape = 'circle'; 
    }
    else{
        setActivePlayer2();
        currentShape = 'cross';
    }
    fields[id] = currentShape;
    draw();
    checkForGameOver();
    }
}


function setActivePlayer1(){
    document.getElementById('player1').classList.remove('opacity');
    document.getElementById('player2').classList.add('opacity');
}


function setActivePlayer2(){
    document.getElementById('player1').classList.add('opacity');
    document.getElementById('player2').classList.remove('opacity');
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


function checkForWin(){
 
    if (firstRowComplete()){
        winner = fields[0];
        showHorizontalWinnerLine('0');
    }
    if (secondRowComplete()){
        winner = fields[3];
        showHorizontalWinnerLine('1');
    }
    if (thirdRowComplete()){
        winner = fields[6];
        showHorizontalWinnerLine('2');
    }
    if (firstColumnComplete()){
        winner = fields[0];
        showVerticalWinnerLine(3);
    }
    if (secondColumnComplete()){
        winner = fields[1];
        showVerticalWinnerLine(4);
    }
    if (thirdColumnComplete()){
        winner = fields[2];
        showVerticalWinnerLine(5);
    }
    if (firstDiagonalComplete()){
        winner = fields[0];
        showDiagonal(1);
    }
    if (secondDiagonalComplete()){
        winner = fields[2];
        showDiagonal(2);
    }
}


// check if a row or column or diagonal is filled with the same shape
function firstRowComplete(){
return fields[0] == fields[1] && fields[1] == fields[2] && fields[0];
}


function secondRowComplete(){
    return fields[3] == fields[4] && fields[4] == fields[5] && fields[3];
}


function thirdRowComplete(){
    return fields[6] == fields[7] && fields[7] == fields[8] && fields[6];
}


function firstColumnComplete(){
    return fields[0] == fields[3] && fields[3] == fields[6] && fields[0];
}


function secondColumnComplete(){
    return fields[1] == fields[4] && fields[4] == fields[7] && fields[1];
}


function thirdColumnComplete(){
    return fields[2] == fields[5] && fields[5] == fields[8] && fields[2];
}


function firstDiagonalComplete(){
    return fields[0] == fields[4] && fields[4] == fields[8] && fields[0];
}


function secondDiagonalComplete(){
    return fields[2] == fields[4] && fields[4] == fields[6] && fields[2];
}


function showHorizontalWinnerLine(row){
    document.getElementById('line-' + row).style.transform = 'scaleX(1)';
}


function showVerticalWinnerLine(column){
    document.getElementById('line-' + column).style.transform = 'rotate(90deg) scaleX(1)';
}


function showDiagonal(diagonal){
    if (diagonal == 1){
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1)';
    }
    else{
        document.getElementById('line-6').style.transform = 'rotate(-45deg) scaleX(1)';
    }
}


function showGameOverContent(){
    document.getElementById('game-content').classList.add('opacity');
    setTimeout(function(){
        showGameOverComponents();
        showWinner();
    }, 1000)
}


function checkForGameOver(){
    checkForWin();
    if(winner || (allFieldsFilled())){
        gameOver = true;
        showGameOverContent();
    }
}


function showWinner(){
    if(winner == 'cross'){
        document.getElementById('winner').innerHTML =`Gratulation <br> Player 1 hat gewonnen!`;  
    }
    else if(winner == 'circle'){
        document.getElementById('winner').innerHTML =`Gratulation <br> Player 2 hat gewonnen!`;  
    }
    else{
        document.getElementById('winner').innerHTML = 'Unentschieden'; 
    }
}


function showGameOverComponents(){
    document.getElementById('gameOver').classList.remove('d-none');
    document.getElementById('winner').style.transform = 'scaleX(1)';
    document.getElementById('restart-button').classList.remove('d-none');
}


function allFieldsFilled(){
    return (fields[0]) &&(fields[1]) && (fields[2]) && (fields[3]) && (fields[4]) && (fields[5]) && (fields[6]) && (fields[7]) && (fields[8])
}


function restartGame(){
    hideGameOverContent();
    resetAllVariables();
    document.getElementById('winner').innerHTML = ''; 
    setActivePlayer1();
    resetGamingFields();
    resetWinnerLines();  
}


function resetGamingFields(){
    for(let i =0; i<9; i++){
        document.getElementById('circle'+i).classList.add('d-none');
        document.getElementById('cross'+i).classList.add('d-none');
    }
}


function resetWinnerLines(){
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
}


function hideGameOverContent(){
    document.getElementById('winner').style.transform = 'scaleX(0)';
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('restart-button').classList.add('d-none');
    document.getElementById('game-content').classList.remove('opacity');
}


function resetAllVariables(){
    gameOver = false;
    fields = [];
    winner = '';
    currentShape = 'circle';
}