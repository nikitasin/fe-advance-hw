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
		let a = prompt(`'Наберите єту строку', ${this.task}`);
		this.userInput = this.startTask;
	},
	userInput:0,
};

keyTrainer.setCharCount();
keyTrainer.createTask();
console.log(keyTrainer.charCount);
console.log(keyTrainer.task);
keyTrainer.startTask();
//console.log(keyTrainer.startTask);
console.log(keyTrainer.userInput);


