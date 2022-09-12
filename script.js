let fields = [];
let currentShape = 'cross';

function fillShape(id){

    if (currentShape == 'cross'){
       currentShape = 'circle';
       document.getElementById('player1').classList.remove('inactive-player');
       document.getElementById('player2').classList.add('inactive-player');
    }
    else{
        currentShape = 'cross'
        document.getElementById('player1').classList.add('inactive-player');
        document.getElementById('player2').classList.remove('inactive-player');
    }
    fields[id] = currentShape;
    draw();
    checkForWin();
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
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
    }
    console.log(winner);
}