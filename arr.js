let round=document.querySelectorAll('.arrRound > span');
let name=document.querySelectorAll('.arrName > p');

for (let i = 0; i<name.length; i++){    
    name[i].addEventListener('click',function(){
        for (let i = 0; i<name.length; i++){
            round[i].style.background='transparent';
            name[i].style.color='black';
        }
        round[i].style.background='green';
        name[i].style.color='red';
    });
}