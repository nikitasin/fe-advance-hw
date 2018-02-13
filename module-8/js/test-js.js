//  const playSound = note => {
//    const audio = document.querySelector(`audio[data-note=${note}]`);
//    audio.currentTime = 0;
//    audio.play();
//};
//
//const button = document.querySelector('.keyboard');
//
//
//const onClick = event => {
//  console.log("event target: ", event.target);
//
//  if (event.target !== event.currentTarget) {
//    event.target.classList.add("green");
//
// setTimeout(() => {
//      event.target.classList.remove("green");
//    }, 200);
//  }
//};
//
//button.addEventListener("click", onClick);





const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};
const buttons = Array.from(document.querySelectorAll("button"));


	

const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");
window.addEventListener('keydown', function(e){
    if(keys.includes(e.key)){
        
        let button = buttons.find((a) => a.innerHTML === e.key || a.innerHTML === "space" )
		

    button.classList.add("keyboard__btn--active");
setTimeout(function color(){button.classList.remove("keyboard__btn--active");}, 100);

        let soundCheckbox = document.getElementById('slideThree');
    
        if(soundCheckbox.checked)
            playSound(button.dataset.note);
    
    }

});
