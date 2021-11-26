//- Знайти та вивести довижину настипних стрінгових значень
//    'hello world', 'lorem ipsum', 'javascript is cool'
let hello = 'hello world';
console.log(hello.length)

let lorem = 'lorem ipsum';
console.log(lorem.length)

let java = 'javascript is cool';
console.log(java.length)

//- Перевести до великого регістру наступні стрінгові значення
 //     'hello world', 'lorem ipsum', 'javascript is cool'
let world = 'hello world';
let toUpperCase = world.toUpperCase();
console.log(toUpperCase)

let lorem2 = 'lorem ipsum';
let toUpperCase2 = lorem2.toUpperCase();
console.log(toUpperCase2)

let java2 = 'javascript is cool';
let toUpperCase3 = java2.toUpperCase();
console.log(toUpperCase3)

//- Перевести до нижнього регістру настипні стрінгові значення
//      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let hello2 = 'HELLO WORLD';
let toLowerCase = hello2.toLowerCase();
console.log(toLowerCase)

let ipsum = 'LOREM IPSUM';
let toLowerCase2 = ipsum.toLowerCase();
console.log(toLowerCase2)

let javascript = 'JAVASCRIPT IS COOL';
let toLowerCase3 = javascript.toLowerCase()
console.log(toLowerCase3)

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let trim = str.trim();
console.log(trim)

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Каждый охотник желает знать';
//    let arr = stringToarray(str);
 //   document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let strToArray = 'Каждый охотник желает знать';
let split = strToArray.split(' ');
console.log(split)

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//    let str = 'Каждый охотник желает знать';
//    document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = 'Каждый охотник желает знать';
let substr = delete_characters.substr(0, 6);
console.log(substr)

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//   let str = "HTML JavaScript PHP";
//   document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = "HTML JavaScript PHP";
let toUpperCaseString = insert_dash.toUpperCase();
let replace = toUpperCaseString.replaceAll(' ', '-');
console.log(replace)

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function magic (spell) {
    return spell[0].toUpperCase + spell.slice(1);
}
magic('expecto patronum')

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');};
    console.log(capitalize('okten hi you are welcome'));