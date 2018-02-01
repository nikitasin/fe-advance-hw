let keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: function setCharCount(){
        while(checkPositiveInteger() === false){
            var res = parseFloat(prompt("Введите количество символов",""));
        }
                function checkPositiveInteger(){
                    return Number.isInteger(res) && res>0;
                }
        return res;
    },
    task: function createTask(){
        var countInArray = this.charCount();
        var res = new Array(countInArray);
        for(let i=0; i<countInArray; i++){
            res[i] = keyTrainer.chars[Math.floor(Math.random()*keyTrainer.chars.length-1)];
        }
        res = res.toString();
        res = res.replace(/,/g,"");
        return res;
    },
    userInput: function startTask(){
        let taskArray = this.task();
        let res = prompt(taskArray,"Напишите здесь такую же строку");
        function countErrors(){
            let k = 0;
            for(let i=0;i<taskArray.length;i++){
                if(taskArray[i] !== res[i]){
                    k++;
                }
            }
        this.userErrors = k;
        if(this.userErrors === 0){
            return console.log("Поздравляем!");
        }
        else return console.log("Попробуйте ещё раз");
        }
        return countErrors();
        }
};

function run(){
    keyTrainer.userInput();
    console.log("Количество ошибок - " + this.userErrors);
};

run();