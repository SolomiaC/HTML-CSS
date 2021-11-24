//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle (a, b){
    let result = a * b;
    return result;
}
let result = rectangle(25, 7)
    console.log(result)

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function round (r){
    return 3.14 * r * r;
}

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder ( action, h, r){
    return 2 * 3.14 * h * r;
}

//- створити функцію яка приймає масив та виводить кожен його елемент
let arrFun = ['morning', 56, true, 'evening', 67, 102, false, 'night'];
function arrElement (element){
    for(let i = 0; i<=arrFun.length; i++){
        document.write(`<p> ${element}</p>`)
    }
}
arrElement(arrFun)


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text (paragraph){
    document.write(`<p> ${paragraph} </p>`)
}
text('winter')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function books (text){
    document.write('<ul>')
    document.write(`<li> ${text} </li>`)
    document.write(`<li> ${text} </li>`)
    document.write(`<li> ${text} </li>`)
    document.write('</ul>')
}
books ('bookworm')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function celebration (fest, size){
    document.write('<ul>');
   for(let i = 0; i <= size; i++){
    document.write(`<li> ${fest} </li>`)}
    document.write('</ul>')
}
celebration ('Christmas', 8);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


function forArray (arr){
    document.write('<ul>');
    for( arrItem of arr){ 
        document.write(`<li> ${arrItem} </li>`)  
    }
    document.write('</ul>')
}
forArray([false, true, 5, 'hermione', 'ron', 'harry', 725, true])


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок
let arrObj = [{id: 25, name: 'Hermione', age: 19}, {id: 34, name: 'Harry', age: 18}, {id: 42, name: 'Ron', age: 20}];
function potter (arr){
    for(const item of potter){
        document.write(`<div> ${item.id}.${item.name}.${item.age} </div>`)
    }
} 
potter(arrObj);