let keyTrainer = {
   chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],

   charCount: 0,
   setCharCount: function () {
       let Count = +prompt('Какое количество символов вы наберете?', '');
       this.charCount = this.checkPositiveInteger(Count);
   },
   checkPositiveInteger: function(item) {
       if (item >= 0){
           return item;
       } else {
           return this.setCharCount();
       }
   },
   task: [],
   createTask: function(){
               for(i=0 ; i<this.charCount; i++){
           let rand = Math.floor(Math.random() * this.chars.length);
           this.task.push(this.chars[rand]);
       }
   },
   userInput: 0,
   startTask: function(){
       let a = prompt(`Наберите єту строку, -  ${this.task.join('')}`);
       let b = this.task.join('');
       function countErrors(){
           let error = 0;
           for(let i=0; i<b.length; i++){
               if(b[i] !== a[i]){
                   error++;
               }
           }
           if(error === 0){
               console.log(`Поздравляю`);
           }
           else console.log(`Вы совершили кучу ошибок, аж, -  ${error}`);
       }
       return countErrors();
   },
};
function run(){
   keyTrainer.setCharCount();
   keyTrainer.createTask();
   keyTrainer.startTask();
   console.log("Найдено ошибок - " + this.userErrors);
};
run();