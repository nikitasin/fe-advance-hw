  const keyboard = {
        layouts: {
            en: {
                topRow: ['qwertyuiop'],
                middleRow: ['asdfghjkl'],
                bottomRow: ['zxcvbnm']
            },
            ru: {
                topRow: ['йцукенгшщзхъ'],
                middleRow: ['фывапролджэ'],
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
    for ( let i = 0 ; i < keyboard.langs.length; i++){
      keyboard.langs.length[i] = keyboard.layouts[i];
    }// говорим что выбраный обект из layouts равен соответствуещему языку из langs
    let currentLang;
    do {
    currentLang = +prompt('Введите цифру соответствующею желаемому языку, где en-0, ru-1, ua-2 ');  
    getRandCharInLang();// проверяем число 
    } while (+currentLang > +keyboard.langs.length);//повторяется пока пользыватель введёт существующий язык  
    let chooseLang = keyboard.langs[currentLang];//говорим введёный номер соответствует номеру языка с langs
    let a = keyboard.layouts[chooseLang];
    
    let stringChoseLang = a.topRow.join() + a.middleRow.join() + a.bottomRow.join(); //объеденяем выбраный язык в одну строку
    function getRandCharInLang(){
      if (currentLang !==0 && currentLang !==1 && currentLang !==2){
        alert('Выбран недоступный язык');
      } else {
        console.log(keyboard.langs[currentLang]);
      }
    }
    function getRandCharInAlph(stringChoseLang) {
      let rand = Math.floor(Math.random() * stringChoseLang.length);
      console.log(stringChoseLang[rand]);
      }
    getRandCharInAlph(stringChoseLang);