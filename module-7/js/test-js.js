let keyboard = {
	topRow: ['q','w','e','r','t','y','u','i','o','p'],
	middleRow: ['a','s','d','f','g','h','j','k','l'],
	bottomRow: ['z','x','c','v','b','n','m'],
	
	createLayout: function create(){
	let keyObj = Object.keys(keyboard);
	let valObj = Object.values(keyboard);
		
	for(let i=0; i<valObj.length; i++){
		let wrap = document.createElement('div');
		wrap.id = keyObj[i];
		
			for(let l=0; l<valObj[i].length; l++){
				let btn = document.createElement('button');
				let a = document.createTextNode(valObj[i][l]);
				btn.appendChild(a);
				wrap.appendChild(btn);
			}
		document.body.appendChild(wrap);
	}	
},
};
keyboard.createLayout();


//const keyboard = {
//	layouts: {
//            topRow: ['q','w','e','r','t','y','u','i','o','p'],
//            middleRow: ['a','s','d','f','g','h','j','k','l'],
//            bottomRow: ['z','x','c','v','b','n','m']
//    },
//	createLayout: function createDiv(){
//		const parentTop = document.querySelector('#topRow');
//const fragTop = document.createDocumentFragment();
//for (let i = 0; i < 10; i++) {
//    const el = document.createElement('div');
//  el.number = `${i}`;
//    fragTop.appendChild(el);
//}
//		parentTop.appendChild(fragTop);
//},
//	createLayouts: function createDiv(){
//		const parentMid = document.querySelector('#middleRow');
//const fragMid = document.createDocumentFragment();
//for (let i = 0; i < 9; i++) {
//    const el = document.createElement('div');
//  el.number =`${i}`;
//    fragMid.appendChild(el);
//}
//		parentMid.appendChild(fragMid);
//},
//	createLayoutss: function createDiv(){
//		const parentBottom = document.querySelector('#bottomRow');
//const fragBottom = document.createDocumentFragment();
//for (let i = 0; i < 7; i++) {
//    const el = document.createElement('div');
//  el.number = `${i}`;
//    fragBottom.appendChild(el);
//}
//		parentBottom.appendChild(fragBottom);
//},
//};
//keyboard.createLayout();
//keyboard.createLayouts();
//keyboard.createLayoutss();
