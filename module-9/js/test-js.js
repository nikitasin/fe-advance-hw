const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

const keyboardTop = []
const keyboardMiddle = [];
const keyboardBottom = [];

keyboardTop.push(keys.slice(0, 12));
keyboardMiddle.push(keys.slice(12, 23));
keyboardBottom.push(keys.slice(23, keys.length));

const keyboard = {
    notes : ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'],
    rows: [keyboardTop,keyboardMiddle,keyboardBottom]
};

const keyboardTemplate = document.getElementById('keyboardLayout').innerHTML;
const keyboardTemplateCompiled = _.template(keyboardTemplate);
const keyboardTemplateHTML = keyboardTemplateCompiled(keyboard);

const wrapp = document.getElementById('keyboardWrapp');
wrapp.insertAdjacentHTML('afterbegin',keyboardTemplateHTML)


const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};
  
const buttons = Array.from(document.querySelectorAll("button"));


window.addEventListener('keydown', function(e){

    if(keys.includes(e.key)){

        console.log(e.key)
    
        let button = buttons.find((elem) => elem.innerHTML === e.key || elem.innerHTML === "space" )

        button.classList.add('keyboard__btn--active');
        setTimeout(()=>button.classList.remove('keyboard__btn--active'), 100);

        let soundTrue = document.getElementById('slideThree');

        if(soundTrue.checked)
            playSound( button.dataset.note);
    
    }
}, true)