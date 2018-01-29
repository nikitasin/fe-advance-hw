let keyTrainer = {
	chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
	charCount: '',
	setCharCount: function num(){
		let Count;
		Count = +prompt('Какое количество символов вы наберете?', '')
	
		return Count;
	},
	checkPositiveInteger: '',
};
keyTrainer.setCharCount();
console.log(setCharCount[]);

function isInteger(num) {
  if (keyTrainer.setCharCount==0 && keyTrainer.setCharCount>0){
    return true;
  } else {
    return false;
  }
}


console.log(isInteger());