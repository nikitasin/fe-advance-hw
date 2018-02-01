let keyTrainer = {
   chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],

   charCount: 0,
   setCharCount: function () {
       let Count = +prompt('Какое количество символов вы наберете?', '');
//       console.log(Count);
       this.charCount = this.checkPositiveInteger(Count);
   },
   checkPositiveInteger: function(item) {
//       console.log(item);
       if (item >= 0){
           return item;
       } else {
           return this.setCharCount();
       }
   },
	task: 0,
	createTask: function(){
		this.task = [];
		for(i=0 ; i<this.charCount; i++){
		let rand = Math.floor(Math.random() * this.chars.length);
			this.task.push(this.chars[rand]);
		}
	},
	startTask: function(){
		let a = prompt(`'Наберите єту строку без запятых', ${this.task}`);
		this.userInput = a;
			let b = this.task.join('');
//			console.log(b);
		function countErrors(){
			let error = 0;
			for(let i=0; i<b.langht; i++){
				if(b !== this.userInput){
					error++;
				}
			}
			this.userErrors = error;
			if(this.userErrors === 0){
				return console.log('Поздравляю')
			}
			else return this.startTask()
		}
		return countErrors();
	},
};
function run(){
keyTrainer.setCharCount();
keyTrainer.createTask();
//console.log(keyTrainer.charCount);
//console.log(keyTrainer.task);
keyTrainer.startTask();
//console.log(keyTrainer.userInput);
 console.log("Найдено ошибок - " + this.userErrors);
};
run();