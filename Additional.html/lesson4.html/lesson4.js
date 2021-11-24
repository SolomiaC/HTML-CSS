//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.


//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//  EXAMPLE:
//  [1,2,3,4]
//  [2,3,4,5]
// результат
//  [3,5,7,9]
let arrayOne = [1,2,3,4];
let arrayTwo = [2,3,4,5];
let suma = 0;
function twoArr (arr) {
    for (let i of arr); 
    let suma = arrayOne[i] + arrayTwo[i];
    return suma;
}

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//  EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let person = [{name: 'Adriana', age: 31}, {model: 'VS'}];
let empty = [];
function forPerson (array) {
    for(let userKey of array);
    empty.push(array)
    console.log(empty)
}
forPerson(empty)


//- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//  EXAMPLE:
//  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let human = [{name: 'Gigi', age: 24}, {model: 'VS'}];
function arrHuman (arr){
    for (let item of arr){
        document. write(`<div> ${item.name}.${item.age}.${item.model} </div>`)
    }
}
arrHuman(human);