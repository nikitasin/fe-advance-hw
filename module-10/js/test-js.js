const lang = "qwerty";
const string = "qwert";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");

const taskOutput = document.querySelector(".task");//задание

const input =document.querySelector(".input"); //выводим результат

const arrBoss = [];//правильные буквы
const full = []; // все буквы
let counter = 0;//таймер

let timer = setInterval(() =>{
    counter++;
    timerOutput.innerHTML = counter;
}, 1000);

taskOutput.innerHTML = string;

input.textContent = `ваш последний результат за ${localStorage.getItem("data")} сек`;

window.addEventListener("keydown", function(e){
    full.push(e.key);
    if(full.length <= 5){
        if(charsArr.includes(e.key)){
            arrBoss.push(e.key);
            if(arrBoss.length == 5){
                for(let i = 0; i < arrBoss.length; i++){
                    if(arrBoss[i] == charsArr[i]){
                        clearInterval(timer);
                        input.textContent = "";
                        input.textContent = `ваш результат ${counter} сек.`;
                       localStorage.setItem("data", JSON.stringify(counter));
                    }
                }
            }
        }
    } 
    else {
        clearInterval(timer);
        input.textContent = "не верно";
    }
});