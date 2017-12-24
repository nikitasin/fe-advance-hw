let res;
let num = prompt('число от 1 до 3', 1 );

switch (num) {
    case "1" : res = 'taba'; break;
    case "2" : res = 'sharm'; break;
    case "3" : res = 'hurgada'; break;
        default : res = 'Такого нет'; 
}

console.log(`Ваш вибор ${res}!`);


