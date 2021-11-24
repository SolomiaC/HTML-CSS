//Всі функції повинні бути описані стрілочним типом!!!!
//- створити функцію яка обчислює та повертає площу прямокутника висотою
let rectangle = (a, h) => {return a * h;}

//- створити функцію яка обчислює та повертає площу кола
let circle = (r) => {return 3.14 * r * r;}

//- створити функцію яка обчислює та повертає площу циліндру
let cylinder = (h, r) => {return 2 * 3.14 * h * r;}


//- створити функцію яка приймає масив та виводить кожен його елемент
let arrFun = ['morning', 56, true, 'evening', 67, 102, false, 'night'];
let array = (arrElement) =>{
    for(let i = 0; i<=arrFun.length; i++){
        document.write(`<p> ${arrElement}</p>`)
}}
array (arrFun)

//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let text = (paragraph) => {
    document.write(`<p> ${paragraph}</p>`)
    document.write(`<p> ${paragraph}</p>`)
    document.write(`<p> ${paragraph}</p>`)
    document.write(`<p> ${paragraph}</p>`)
}
text('inspiration')


//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let text2 = (list) => {
    document.write('<ul>')
    document.write(`<li> ${list}</li>`)
    document.write(`<li> ${list}</li>`)
    document.write(`<li> ${list}</li>`)
    document.write('</ul>')
}
text2('go wild, for a while')


//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let magic = (harryPotter, size) => {
    for(let i =0; i <= size; i++){
    document.write('<ul>')
    document.write(`<li> ${harryPotter}</li>`)
    document.write('</ul>')
    }
}
magic('Hogwarts School of Witchcraft and Wizardry', 3);


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayForPrimitiveElements = (elements) =>{
    for(let element of elements){
        document.write(`<li> ${elements} </li>`)
    }
}
arrayForPrimitiveElements ([false, true, 5, 'hermione', 'ron', 'harry', 725, true])


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayOfObjects = (objects) =>{
    for(let i=0; i<=objects.length; i++);{
        document.write(`<div> ${objects.id}</div>`)
        document.write(`<div> ${objects.name}</div>`)
        document.write(`<div> ${objects.age}</div>`)
    }
}
arrayOfObjects({id: 23756, name: 'Emma', age: 22})