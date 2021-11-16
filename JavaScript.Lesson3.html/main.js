//     --створити масив з: - з 5 числових значень, - з 5 стічкових значень,
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let array = [
    {name: 'Anna', age: 25, developer: true},
    {name: 'Emma', age: 21, developer: false},
    {name: 'Otto', age: 27, developer: false},
    {name: 'Ross', age: 31, developer: true},
    {name: 'Monika', age: 34, developer: true}
];
for (let key of array){
    console.log(key)
}

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i<10; i++){
    document.write('<div id="log"><h6>Hello Okten</h6></div>')};

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let text = 0; text<10; text++){
    document.write(`<div>Positivity is a superpower ${text} </div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let element = 0
while (element < 20){
    document.write('<p>eat your spaghetti</p>')
    element++; }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let elementIndex =0
while(elementIndex <20){
    document.write(`<p> Eat pasta, run fasta ${elementIndex} </p>`)
    elementIndex++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr = [22, 34, 56, 7, 10, 11, 54, 67, 80, 2];
for(let numbers of arr){
    console.log(numbers)
}

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let pages = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'];
for(let p of pages){
    console.log(p)
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let books = ['day', 'night', 6, true, 55, 'evening', 76, false, 100, 'morning'];
for(let book of books){
    console.log(book)
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи


let group = [56, 'june', 'august', 77, true, 809, 63, 'april', 87, false];
for(let item = 0; item< group.length; item++){
    if(typeof group[item] === 'boolean'){
        console.log(group[item])
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let groupTwo = [56, 'june', 'august', 77, true, 809, 63, 'april', 87, false];
for(let itemTwo = 0; itemTwo<groupTwo.length; itemTwo++){
    if(typeof groupTwo[itemTwo] === 'number'){
        console.log(groupTwo[itemTwo])
    }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let groupThree = [56, 'june', 'august', 77, true, 809, 63, 'april', 87, false];
for(let itemThree =0; itemThree<groupThree.length; itemThree++){
if(typeof groupThree[itemThree] === 'string'){
    console.log(groupThree[itemThree])
}
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let bigArray = [];
bigArray [0] = 234,
bigArray [1] = 'anna',
bigArray [2] = 'emma',
bigArray [3] = 87,
bigArray [4] = true,
bigArray [5] = 'natalia',
bigArray [6] = 712,
bigArray [7] = false,
bigArray [8] = 'sofia',
bigArray [9] = 12
for(let itemsArray = 0; itemsArray < bigArray.length; itemsArray++){
    console.log(bigArray[itemsArray])
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empty = [];
empty [0] = 'Harry Potter and the Chamber of Secrets',
empty [1] = 1998, 
empty [2] = 'pages252',
empty [3] = false,
empty [4] = 'J.K.Rowling'
for(let items = 0; items<empty.length; items++){
    console.log(empty[items])
}