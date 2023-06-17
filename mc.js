const correctAnswers=['D','D','D','D'];
const wrongAnswers=['Y','Y','Y','Y'];
const form=document.querySelector('.question-form');
const result=document.querySelector('.result');
const result1=document.querySelector('.result1');
form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;
    let wrongscore=0;
    const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    userAnswer.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score +=25;
        }
       else{
            wrongscore +=25;
        }
    });
    // console.log(score);
    result.classList.remove('d-none');
    
    let point=0;
   const goster= setInterval(() => {
    result.querySelector('span').textContent=`${point}%`;
    if(point==score)
    {
        clearInterval(goster); //Interval'i kaldırır(goster)
    }
    else
    {
        point++;
    }
    }, 50);

    result1.classList.remove('d-none');
    let wpoint=0;
    const goster2= setInterval(() => {
     result1.querySelector('span').textContent=`${wpoint}%`;
     if(wpoint==wrongscore)
     {
         clearInterval(goster2);
     }
     else
     {
        wpoint++;
     }
     }, 50);

   
    
});

// setTimeout(() => {  //İçindeki kod 1 kere çalışır
//    console.log('Muhammet'); 
// }, 2000);

// setInterval(() => { //İçindeki kod sürekli çalışır
//     setInterval
// }, 2000);