let keyTrainer = {
	chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
	
	charCount: '',
	
	setCharCount: function num(){
		let Count = +prompt('Какое количество символов вы наберете?', '')
		return Count;
	},
	
	checkPositiveInteger: function isInteger(setCharCount) {
  if (setCharCount > 0){
    return true;
  } else {
    return false;
  }
//		console.log(this.checkPositiveInteger.isInteger());
},
	
};

console.log(keyTrainer.setCharCount());
console.log(keyTrainer.checkPositiveInteger());





//	checkPositiveInteger: Number.isInteger || function(setCharCount) {
//  		return typeof this.setCharCount === 'number'
//         && Number.isFinite(this.setCharCount)
//         && !(this.setCharCount % 1);
//},


