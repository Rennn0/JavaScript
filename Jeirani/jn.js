const player=document.querySelector('#player')
const computer=document.querySelector('#computer')
const result=document.querySelector('#result')
const buttons=document.querySelectorAll('.button')
const HumanPoints=document.querySelector('#Hpoints')
const ComputerPoints=document.querySelector('#Cpoints')

let player_,computer_,result_,Hpoints_=0,Cpoints_=0;

buttons.forEach(button=>button.addEventListener('click',()=>{
    let randomNum=Math.floor(Math.random()*3+1)
    switch(randomNum){
        case 1:computer_="ROCK" ;break;
        case 2:computer_="PAPER" ;break;
        case 3:computer_="SCISSOR" ;break;
    }
    player_=button.textContent;
    player.innerHTML=`Player : ${player_}`
    computer.innerHTML=`Computer : ${computer_}`

    result_=makeResult();
    result.innerHTML=`Result : ${result_}`
    if(result_=="Win"){
        HumanPoints.innerHTML=`You : ${++Hpoints_} `
    }else{
        ComputerPoints.innerHTML=`Computer : ${++Cpoints_}`
    }
}))

function makeResult(){
    if(player_==computer_){
        return "Draw"
    } else if(player_=="ROCK"){
        return (computer_=="SCISSOR"?"Win":"Lose")
    } else if(player_=="PAPER"){
        return (computer_=="ROCK"?"Win":"Lose")
    } else if(player_=="SCISSOR"){
        return (computer_=="PAPER"?"Win":"Lose")
    }
}

