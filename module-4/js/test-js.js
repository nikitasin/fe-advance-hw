let alphabet = "qwertyuiopasdfghjklzxcvbnm";

function addKeyboardLayout () {
	let str1 = alphabet.slice (0,9);
	let str2 = alphabet.slice (9,18);
	let str3 = alphabet.slice (18,25);
	
	str1 = str1.split('');
	str2 = str2.split('');
	str3 = str3.split('');
	
	const key = [];
	key.push(str1);
	key.push(str2);
	key.push(str3);
	return key;
};

console.log(addKeyboardLayout());

let result = addKeyboardLayout();


 function getRandCharInRow(row){
	 row = prompt ("номер от 1-3");
	let key = result;
	 
	let rendItem = key[row][Math.floor(Math.random() * key.length)];
return rendItem;
 }
console.log(getRandCharInRow());

function getRandCharInAlph() {
	let key = result;
	let rendItem = key[Math.floor(Math.random() * key.length)][Math.floor(Math.random() * key.length)];
	return rendItem;
}
console.log(getRandCharInAlph());

