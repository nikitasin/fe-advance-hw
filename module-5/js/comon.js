var numParticipants = prompt('Введите число участников группы', '');
        // проверка числа
		if  (numParticipants <= 0) {
				alert('Введите целое положительное число!');
			} else if ((numParticipants^0) === numParticipants){
				alert('Введите целое положительное число!');
			} 
		var nameHotel=[{ sharm: 15}, { hurgada: 25 }, { taba: 6}];
		let sharm;
		let hurgada;
		let taba;
		let currentNum = prompt('Введите номер соответствующий вашему выбору группы, где 1-taba(6 свободных мест), 2-sharm(15 свободных мест), 3-hurgada(25 свободных мест)','');
		if (currentNum!=='1'&&currentNum!=='2'&&currentNum!=='3'){
			alert('Введите правильный номер!')
		}
		if (numParticipants > 25){	
	 		alert('Такого количества свободных мест, в одной группе, нет.'); 
	 	} else if (currentNum==="3"&&numParticipants>0){
	 		if (confirm('Вы выбрали группу hurgada, подтверждаете выбор?')===true){
	 				alert('Осталось  ' + (25 - numParticipants) +' свободных мест');
	 		} else {
				alert('Простите, что вам не подошла группа, введите другой номер');
			}
	 	} else if (numParticipants>16&&currentNum==="2") {
	 		alert('Мест в этой группе не хватает');
	 		
	 	}else if (numParticipants > 0&&currentNum==="2"){
	 			if (confirm('Вы выбрали группу sharm, подтверждаете выбор?')===true){
	 				alert('Осталось  ' + (15 - numParticipants) +' свободных мест');
	 			}else {
	 				alert('Простите, что вам не подошла группа, введите другой номер');
	 			}
	 	
	 	} else if (currentNum==="1"&&numParticipants>7){
	 			alert('Мест в этой группе не хватает');
	 	}else if (currentNum==="1"&&numParticipants>0) {
	 		if (confirm('Вы выбрали группу taba, подтверждаете выбор?')===true){
	 				alert('Осталось  ' + (6 - numParticipants) +' свободных мест');
	 			}else {
	 				alert('Простите, что вам не подошла группа, введите другой номер');
	 			}
	 	}



