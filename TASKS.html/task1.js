// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
let value;
value = Math.PI.toFixed(2)
console.log(value)

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let value2;
value2 = Math.min(15, 11, 16, 12, 51, 12, 13, 51)
console.log(value2)

let value3;
value3 = Math.max(15, 11, 16, 12, 51, 12, 13, 51)
console.log(value3)

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
let value4;
value4 = Math.random().toFixed(2)
console.log(value4)
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
let value5;
value5 = Math.floor(Math.random() * 150) 
console.log(value5) 

// 4.Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let value6;
value6 = (0.6 * 10 + 0.7 * 10) / 10
console.log(value6)

// 5. Получить число из строки ‘100$’
let value7;
value7 = parseInt ('100$')
console.log(value7)

//Получить первую и последнюю буквы строки  
let string = 'string'
console.log(string[0]);
let x = string.length;
console.log(string [x-1])

//Сделать первую и последнюю буквы в верхнем регистре
let str = 'string'
let strToUpperCase = str[0].toUpperCase()
console.log(strToUpperCase);
let xx = str.length;
console.log(str[xx-1].toUpperCase())

//Найти положение слова ‘string’ в строке
let sentence = 'Which string do you need?';
console.log(sentence.indexOf('string'))

//Найти положение второго пробела (“вручную” ничего не считать)
let xxx = 'Which string do you need?';
console.log(xxx.indexOf(' ', 7))

//Получить строку с 5-го символа длиной 4 буквы
let yyy = 'Which string do you need?';
console.log(yyy.slice(5, 10))

//Получить строку с 5-го по 9-й символы
let vvv = 'Which string do you need?';
console.log(vvv.slice(5, 10))

//Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
let ooo = 'Which string do you need?';
console.log(ooo.slice(0, -6))

//Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let year;
let a = 20;
let b = 16;
year = ` ${a}${b}`
console.log(year)

//Создать объект с полем product, равным ‘iphone’
const products = {
    product: 'iphone'
}
console.log(products)

//Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
const products2 = {
    product: 'iphone'
}
let valuex;
products2.price = 1000
valuex = products2.price;
console.log(valuex)
console.log(products2)

//Добавить поле details, которое будет содержать объект с полями model и color
const products3 = {
    product: 'iphone'
}
let valueX;
products3.price = 1000
products3.model = 'XR 64GB'
products3.color = 'red'
valueX = products3.price;
valueX = products3.model;
valueX = products3.color;
console.log(valueX)
console.log(products3)

//Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let valueHidden;
if(valueHidden === 'hidden'){
    console.log('visible')
} else{
    console.log('hidden')
}

//Создать переменную и присвойте ей число.
//Используя if, записать условие:
//- если переменная равна нулю, присвоить ей 1;
//- если меньше нуля - строку “less then zero”;
//- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let number;
if(number === 0){
    console.log(1)
} else if(number < 0){
    console.log('less then zero')
} else if(number > 0){
    console.log(number*10)
}

//Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. !!!!!!!!!!!!!!!!!!!!!!!!!!
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; 
//иначе изменить на false.
let car = { name: 'Lexus', 
            age: 10, 
            create: 2008,
            needRepair: false }
            if(car.age >= 5){
                console.log('Need Repair')
            } 

//Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
//Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN 
//то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount 
//и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
let item = { name: 'Intel core i7', 
             price: '100$', 
             discount: '15%' }
             if(item.discount !== NaN && item.price !== NaN){
                 let price;
                 priceWithDiscount = parseInt('100$') - parseInt('15%') ;
                 price = priceWithDiscount;
                 console.log(price)
             }

//Дан следующий код:
//let product = {
//name: “Яблоко”,
//price: “10$”
//};
//let min = 10; // минимальная цена
//let max = 20; // максимальная цена
//Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, 
//иначе вывести в консоль что товаров не найдено.
let min = 10; 
let max = 20;
let product = {
    name: 'Яблоко',
    price: '10$'
    }
    if(product.price >= min && product.price <= max){
        console.log(product.name)
    } else{
        console.log('We can not find this product')
    }

    //Записать в виде switch case следующее условие:
    //if (a === ‘block’) {
    //console.log(‘block’)
    //} else if (a === ‘none’) {
    //   console.log(‘none’)
    //} else if (a === ‘inline’) {
    //   console.log(‘inline’)
    //} else {
    //   console.log(‘other’)
    //}
    let block;
    switch(block){
        case 'none':
            console.log('none');
            break;
        case 'inline':
            console.log('inline');
            break;
            default: console.log('other')
    }

    // Записать данное условие в виде тернарного оператора
    // let b = 'hidden';
    // if (b === 'hidden') {
    // b = 'visible';
    // } else {
    // b = 'hidden';
    // }
    let hiddenVisible;
    hiddenVisible = hiddenVisible === 'hidden' ? 'visible' : 'hidden';
    console.log(hiddenVisible)

     //Записать данное условие в виде тернарного оператора       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 //let c = 0;
 //if (c === 0) {
 //c = 1;
 //} else if (c < 0) {
 //c = 'less then zero';
 //} else {
 //c *= 10;
 //}
let zero;
zero = zero === 0 ? 1 : zero < 0 ? 'less then zero' : zero *= 10;
console.log(zero)

//На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
//будут в верхнем регистре. Использовать for или while.
let stringXXX = 'i am in the easycode';
let strToUpperCaseX = ' ';
let newStr;
for(let i=0; i < stringXXX.length; i++){
    if( i === 0 || stringXXX [i - 1] === ' '){
        newStr = stringXXX[i];
        console.log(newStr.toUpperCase())
    } else {
        strToUpperCaseX = stringXXX[i];
        console.log(strToUpperCaseX)
    }
}

//Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
let strInOtherWay = 'tseb eht ma i';
for (let i = strInOtherWay.length -1; i >= 0; i--){
    console.log(strInOtherWay[i])
}

//Факториал числа - произведение всех натуральных чисел от 1 до n
//включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.


//На основе строки “JavaScript is a pretty good language” сделать новую строку,
//где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
let stringForJavaScript = 'JavaScript is a pretty good language';
let newAddStr;
for (let i = 0; i < stringForJavaScript.length; i++){
    if( stringForJavaScript [i - 1] === ' '){
        newAddStr = stringForJavaScript[i];
        console.log(newAddStr.toUpperCase())
    } else {
        newAddStr = stringForJavaScript[i];
        console.log(newAddStr)
    }
}

//Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. 
//Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (number of arrayOfNumbers){
    if(number % 2 !== 0){
        console.log(number)
    }
}

//Дан объект:
//let list = {
//name: ‘denis’,
//work: ‘easycode’,
//age: 29
//}
//Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
    };
    for (let user in list){
        if(typeof list[user] === 'string'){
            console.log(list[user].toUpperCase())
        } 
    }

