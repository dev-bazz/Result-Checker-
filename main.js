function domSelector(node){
    return document.querySelector(node);
}

const lottie = domSelector(`.lottie`);
const message = domSelector(`.score`);
const cta = domSelector(`.cta`);
const texField = domSelector(`.search`)

const msgDisplay = [`Great Job`, `Average`, `Too Low`,`this is not a number`];

window.addEventListener(`DOMContentLoaded`, ()=>{
    console.log(texField);

    const animation = bodymovin
.loadAnimation({
    wrapper:lottie,
    path:`./Resources/97078-ballooncelebration.json`,
    name: `celebrate`,
    autoplay: false
});

cta.addEventListener('click',()=>{
    let x = texField.value;
    
    if(!isNaN(x)){
        (x>=70)? message.innerHTML = msgDisplay[0]:
        (x>49 && x<70)? message.innerHTML = msgDisplay[1]:
        message.innerHTML = msgDisplay[2];
    } else{
        texField.value = ``;
        message.innerHTML = msgDisplay[3];
    }


   
   
    console.log(x)
    
})




});

