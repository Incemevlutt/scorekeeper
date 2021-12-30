const player1button=document.querySelector('#player1button');
const player2button=document.querySelector('#player2button');
const player1display=document.querySelector('#player1display');
const player2display=document.querySelector('#player2display');
const resetButton=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playto');


let player1score=0;
let winningScore=5;
let isGameOver=false;

//player 1 button 
player1button.addEventListener('click',function(){
    if(!isGameOver){
        player1score+=1;
     if(player1score===winningScore){
         isGameOver=true;
         player1display.classList.add('has-text-success');
         player2display.classList.add('has-text-danger');
     }
    }
player1display.textContent=player1score;
});

//player 2 button
let player2score=0;

player2button.addEventListener('click',function(){
    if(!isGameOver){
        player2score+=1;
     if(player2score===winningScore){
         isGameOver=true;
         player2display.classList.add('has-text-success	');
         player1display.classList.add('has-text-danger	');
     }
    }
    player2display.textContent=player2score;
    
    });
//winning score select
winningScoreSelect.addEventListener('change',function(){
winningScore=parseInt(this.value); //tam anlasilmadi sor bunu!! parseInt nedir????
reset();
})



//reset button
resetButton.addEventListener('click',reset)

function reset(){
isGameOver=false;
player1score=0;
player2score=0;
player1display.textContent=0;
player2display.textContent=0;
player1display.classList.remove('has-text-success','has-text-danger');
player2display.classList.remove('has-text-success','has-text-danger');

}