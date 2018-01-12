let Participants = prompt('Число участников', '' );

function isInteger (Participants) { 
  if ((parseFloat (Participants) == parseInt (Participants)) &&! isNaN (Participants)) { 
      return true; 
  } else { 
      return alert( false ); 
  } 
}
let HotelName=[ { sharm: 15 }, { hurgada: 25 }, { taba: 15 } ];
let sharm;
let hurgada;
let taba;
let Grup = prompt( "Укажите номер группы: 1-taba, 2-sharm, 3-hurgada", '' );
if ( Grup==="1" && Grup==="2" && Grup==="3" ) {
    alert( "Введен не корректный номер, попробуйте ввести правильный." );
}
if ( Participants > 25 ) {
    alert( "Не достаточно мест" );
}
else if ( Grup==="1" &&Participants>6 ) {
    alert( "Не достаточно мест" );
}
else if ( Grup==="1" &&Participants>0 ) {
    if ( confirm( 'Отличный выбор, осталось' + ( 6 - Participants ) + 'мест.' ));
}
else { alert( "И не возвращайтесь" );
}

//else if ( Grup==="2" &&Participants>16 ) {
//    alert( "Не достаточно мест" );
//}
//else if ( Grup==="2" &&Participants>0 ) {
//    if ( confirm( 'Отличный выбор, осталось' + ( 15 - Participants ) + 'мест.' ));
//}
//else { alert( "И не возвращайтесь" ); 
//}

//console.log( isInteger (Participants) );


//var numParticipants = prompt('Введите число участников группы', '');
//        // проверка числа
//		if  (numParticipants <= 0) {
//				alert('Введите целое положительное число!');
//			} else if ((numParticipants^0) === numParticipants){
//				alert('Введите целое положительное число!');
//			} 
//		var nameHotel=[{ sharm: 15}, { hurgada: 25 }, { taba: 6}];
//		let sharm;
//		let hurgada;
//		let taba;
//		let currentNum = prompt('Введите номер соответствующий вашему выбору группы, где 1-taba(6 свободных мест), 2-sharm(15 свободных мест), 3-hurgada(25 свободных мест)','');
//		if (currentNum!=='1'&&currentNum!=='2'&&currentNum!=='3'){
//			alert('Введите правильный номер!')
//		}
		

//switch (num) {
//    case "1" : res = 'taba'; break;
//    case "2" : res = 'sharm'; break;
//    case "3" : res = 'hurgada'; break;
//        default : res = 'Такого нет'; 
//}
//console.log( Number.isInteger(value) );

//console.log(`Ваш вибор ${res}!`);