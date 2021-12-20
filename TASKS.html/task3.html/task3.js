
//Заполните массив 10-ю иксами с помощью цикла.  
let array = [];
for( let i = 0; i < 10; i++){
    array[i] = 'x';
}
console.log(array)

//Заполните массив числами от 1 до 10 с помощью цикла.  
let array2 = [];
for (let i = 0; i <= 10; i++){
    if(i > 0 && i <= 10)
    array2[i] = i;
}
console.log(array2)

//Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.  
let array3 = [];
for (let i = 0; i < 10; i++){
    array3[i] = Math.random().toFixed(2)
}
console.log(array3)

//Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.  
let array4 = [];
for(let i = 0; i <= 10; i++){
    array4[i] = Math.floor(Math.random() * 10);
}
console.log(array4)

//Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.  
let array5 = [2, 45, 61, 3, 0, 8, 19, 21, 6, 52, 109, 4];
for (let i = 0; i < array5.length; i++)
    if( array5[i] > 0 &&  array5[i] < 10){
        console.log(array5[i])
    } 

//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.  
let array6 = [2, 45, 61, 3, 8, 19, 21, 6, 52, 109, 4];
let suma = 0;
for (let i = 0; i < array6.length; i++){
    suma += array6[i]
}
console.log(suma)

   
//Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество). 
let array7 = [2, 45, 61, 3, 8, 19, 21, 6, 52, 109, 4];
let suma2 = 0;
let newArray;
for (let i = 0; i < array7.length; i++){
    suma2 += array7[i];
    newArray = suma2 / array7.length
} console.log(newArray)


let number1 = 67;
let number2 = 132;
let value;
value = 67 + 132
console.log(value)

value += 100
console.log(value)  

let object = {
    name: 'Emma',
    age: 32,
    city: 'London'
}
let value5;
value5 = object.name
object.job = 'actress'
console.log(object)
console.log(value5)

let forStringgg = 'Hello, my name is Mia'
let res = '';
let res2 = '';
for (let i = 0; i<forStringgg.length; i++){
    res = forStringgg + '!!!'
    res2 += forStringgg[i] + '_'
} console.log(res)
console.log(res2)

let gggg = [1, 2, 3, 4, 5, 6, 13, 65432, 43, 9876, 1234, 0, 8];
for(let i = 0; i < gggg.length; i++){
    if( i === 3){
        continue;
    }
 console.log(gggg[i])}

 
 
 let userObj = {}
 let obj = [{
    name: 'Emma',
    age: 32,
    city: 'London'
},
{
    name: 'Anna',
    age: 28,
    city: 'Oslo'
}
 ];
for (let i = 0; i<obj.length; i++){
userObj[obj[i].name] = obj[i]
    console.log(userObj) }


(function (msg){
   console.log(msg)
})('Hello my friend');

const forFunction = function (msg2){
    console.log(msg2)
} ;
forFunction ('Get easy on me')



let objFunction = {
    name: 'Emma',
    age: 32,
    city: 'London'
};
 function getObj (objF) {
     objF.name = 'Lily'
 };
 getObj(objFunction)
 console.log(objFunction)


 function arg(){
     return arguments;
 } arg('Hello', 123, 'joy', true)

 //Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
 let stringTest = 'test';
 let reverseString = '';
 function reverse(test){
     for (let i = stringTest.length; i--;) {
         reverseString += stringTest[i]
     }
 } reverse(stringTest)
console.log(reverseString)

 //Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). 
 //Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет 
 //то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
  //let randomNumber = Math.random().toFixed();
  //let forNumber = +prompt('Write a number')
  //function randomizer(number){
  //for (let i = 0; i <= 10; i++){                                                                                     //BACK TO THIS TASK!!!!!!!!!!!!!!!!
   //   if(randomNumber.i <= 1 &&  randomNumber.i >= 10 && forNumber.i === randomNumber.i){
   //      console.log('You are a winner')
   //  } else {console.log(`You are false. Your number is ${forNumber}. Right number is ${randomNumber}`)}
 // }
 // } randomizer(randomNumber)

  //Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
 //Если нет ни одного аргумента, вернуть ноль: multiply() // 0
 let result = 1;
 function multiply(){
     if(!arguments) return 0;
     for (let i = 0; i < arguments.length; i++){
         result *= arguments[i]
     } return result
 } multiply(3, 7, 5, 2)
console.log(result)

function testArg(){
    console.log(arguments[4])
} testArg(23, 'Hello', true, 23456, 'Sun')


let letters = ['a', 'b', 'c'];
letters.push(1, 2, 3)
console.log(letters)

//Переверните число задом наперед

function reverseNum (num){
num = num + ''
    return num.split('').reverse().join('')}
console.log(reverseNum(87654))

//Напишите функцию JavaScript, которая проверяет, является ли переданная строка палиндромом? 
//Палиндром - это слово, фраза или последовательность, которые читаются так же, как вперед, назад, например, level.
function check (c){
    for( let i = 0; i < c.length; i++){
        if (c[0] === c.slice(-1)){
            console.log(true)                                              
        } else {console.log('false')}
    }
} check('level')

//Вернуть переданную строку с буквами в алфавитном порядке
function makeAlphabet (alphabet){
    return alphabet.split('').sort().join('')
}
console.log(makeAlphabet('the beach'))

//Напишите функцию find_longest_word(str), которая принимает строку в качестве параметра и находит самое длинное слово в строке.
function findLongestWord (str){
   let split = str.split('')
   let longWord = 0;
   for (let i = 0; i < split.length; i++){
       if (split[i].length > longWord){
      longWord = split[i].length}                                                                         //BACK TO THIS TASK!!!!!!!!!!!!!!!!
   } return longWord
}
console.log(findLongestWord('Web Development Tutorial'))


//видалити перший елемент масиву. кількість аргументів - невизначена
let resultArray = [];
function getArr(){
    for(let i = 0; i < arguments.length; i++){
        resultArray = arguments[i]
    }
    return delete(resultArray[0])
}
    getArr([2, 3, 4, 5])
 console.log(resultArray)

 //Напишите функцию vowel_count(str), которая принимает строку в качестве параметра и подсчитывает количество гласных в строке.
 let vowelString = '';
 function vowelCountStr (vowelStr){
     for (let i = 0; i < vowelStr.length; i++){
      return vowelString = vowelStr.match(/[aeiou]/gi);
 }} vowelCountStr('Hello, my name is Solomia')
 console.log(vowelString)

  //Напишите функцию detect_data_type(value), которая принимает аргумент и возвращает тип.
  function detectDataType (value){
          if(typeof value === 'string'){
              console.log('it is string')
          } else if(typeof value === 'number'){
              console.log('it is number')
          } else if(typeof value === 'boolean'){
              console.log('it is boolean')
          } else if(typeof value === 'symbol'){
              console.log('it is symbol')
          }else if( typeof value === 'object'){
              console.log('it is object')
          }
  } detectDataType({})

  //Напишите функцию second_greatest_lowest(arr_num), которая будет принимать массив сохраненных 
  //чисел и находить второе наименьшее и второе наибольшее числа соответственно.
  let resultGL = [];
  let resultLG = [];
  function secondGreatestAndLowest (arrNum){
      for (let i = 0; i < arrNum.length; i++){
          resultGL = Math.max.apply(null, arrNum);
          arrNum.splice(arrNum.indexOf(resultGL), 1);                                 //BACK TO MATH MIN
          resultLG = Math.min.apply(null, arrNum);
          arrNum.splice(arrNum.indexOf(resultLG), 1);
          return Math.max.apply(null, arrNum), Math.min.apply(null, arrNum);   
      }
  } secondGreatestAndLowest([6, 4, 2, 13, 9, 8, 21, 33])
console.log(resultGL, resultLG)


 //Напишите функцию JavaScript для вычисления значения b n, где n - показатель степени, а b - основание.
 function exponentiating (b, n){
     return Math.pow(b, n)
 } exponentiating (5, 2)
 

  //Напишите функцию JavaScript, чтобы получить все возможные подмножества с комбинациями фиксированной длины (например, 2) в массиве.
 // Пример массива: [1, 2, 3] и длина подмножества 2. Ожидаемый результат: [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

