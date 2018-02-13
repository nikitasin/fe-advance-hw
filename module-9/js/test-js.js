//function createDiv(){
//let div = document.createElement('div');
//for (var i=0; i<26; i++)
//	
//document.body.appendChild(div);
//
//};
//createDiv()
//console.log(createDiv())
//var div = document.createElement('div');
//  div.innerHTML = "";
//
//  document.body.appendChild(div);

//const keyboard = {
//	layouts: {
//            topRow: ['qwertyuiop'],
//            middleRow: ['asdfghjkl'],
//            bottomRow: ['zxcvbnm']
//    },
//	createLayout: function createDiv(){
//		let a="";
//let div = document.createElement('div');
//for (var i=0; i<10; i++)
//	a = div[i];
//	div.prepend(a);
//document.body.appendChild(div);
//},
//
//};
//keyboard.createLayout();



//________________

//const list = document.querySelector('.list');
//let items = '';
//
//for(let i = 0, max = 5; i < max; i += 1) {
//  items += `<div> ${i}</div>`;
//}
//
//console.log(items); // посмотрите что будет в консоли, одна длинная строка с тегами
//
//list.innerHTML = items; // вешаем всю разметку за одно обращен
//_______________



const menuData = {
	title: 'Eat it createElement, templates rule!',
  items: ['asdad', 'nice']
};

const html = document.getElementById('menu').textContent.trim();
const output = document.getElementById('output');
const compiled = _.template(html);
const result = compiled(menuData);

const addNew = document.getElementById('addNew');
addNew.addEventListener('keydown', function(event) {
	console.log(event.keyCode);
	if (event.keyCode === 13) {
		menuData.items.push(event.target.value);
		const updatedResult = compiled(menuData);
		output.innerHTML = updatedResult;
		event.target.value = '';	
	}
});

output.innerHTML = result;

























