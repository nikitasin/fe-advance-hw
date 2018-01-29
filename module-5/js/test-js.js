
const keyboard = {
    layouts: {
        en: {
            topRow: ['qwertyuiop'],
            middleRow: ['asdfghjkl'],
            bottomRow: ['zxcvbnm']
        },
        ru: {
            topRow: ['йцукенгшщзхъ'],
            middleRow: ['фывапролд'],
            bottomRow: ['ячсмитьбю']
        },
        ua: {
            topRow: ['йцукенгшщзхї'],
            middleRow: ['фівапролджє'],
            bottomRow: ['ячсмитьбю']
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

let choice;
do {
   choice = prompt('Выберите язык раскладки en-0, ru-1, ua-2', '');
	if(choice === null){ 
		break;}
	if(choice !=='0' && choice !=='1' && choice !=='2'){
		alert('Такого языка нет, попробуйте снова')
	}
} while ( choice !=='0' && choice !=='1' && choice !=='2' );

if (choice =='0') { 
 choice = keyboard.layouts.en;
} else if (choice =='1') {
  choice = keyboard.layouts.ru;
} else if (choice =='2') {
  choice = keyboard.layouts.ua;
} else {
  alert('cancel');
}
keyboard.currentLang = choice;
console.log(keyboard.currentLang);

let b = keyboard.currentLang;
let stringLayouts = b.topRow.join() + b.middleRow.join() + b.bottomRow.join();

 function getRand(stringLayouts){
	let rendItem = [Math.floor(Math.random() * stringLayouts.length)];
	 console.log(stringLayouts[rendItem]);
 }
console.log(getRand(stringLayouts));


	
	




//function language(choice){
//	if(choice == '0') {
//		choice = keyboard.layouts.en;
//		let currentLang = choice;
//		return currentLang;
//	 }
//	}
//console.log(language());



//let result = addKeyboardLayout();
//
//
// function getRandCharInRow(row){
//	 row = prompt ("номер от 1-3");
//	let keyboard = result;
//	 
//	let rendItem = keyboard[row][Math.floor(Math.random() * keyboard.length)];
//return rendItem;
// }
//console.log(getRandCharInRow());
//
//function getRandCharInAlph() {
//	let keyboard = result;
//	let rendItem = keyboard[Math.floor(Math.random() * keyboard.length)][Math.floor(Math.random() * keyboard.length)];
//	return rendItem;
//}
//console.log(getRandCharInAlph());

