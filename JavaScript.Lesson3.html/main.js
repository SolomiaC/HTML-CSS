//     --створити масив з: - з 5 числових значень, - з 5 стічкових значень,
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numbers = [2, 56, 73, 3, 13]
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4])
let string = ['Venus', 'Mars', 'Saturn', 'Jupiter', 'Mercury']
console.log(string[0]);
console.log(string[1]);
console.log(string[2]);
console.log(string[3]);
console.log(string[4])
let boolean = [5>6, 4===7, 8<9, 1!==1,  3>0]
console.log(boolean[0]);
console.log(boolean[1]);
console.log(boolean[2]);
console.log(boolean[3]);
console.log(boolean[4])

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

let books = ['day', 'night', 6, 5==5, 55, 'evening', 76, 4>8, 100, 'morning'];
for(let book of books){
    console.log(book)
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи


let group = [56, 'june', 'august', 77, 4===4, 809, 63, 'april', 87, 9!==9];
for(let item = 0; item< group.length; item++){
    if(typeof group[item] === 'boolean'){
        console.log(group[item])
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let groupTwo = [56, 'june', 'august', 77, 5<7, 809, 63, 'april', 87, 5>6];
for(let itemTwo = 0; itemTwo<groupTwo.length; itemTwo++){
    if(typeof groupTwo[itemTwo] === 'number'){
        console.log(groupTwo[itemTwo])
    }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let groupThree = [56, 'june', 'august', 77, 2>0, 809, 63, 'april', 87, 0===8];
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
bigArray [4] = 9>10,
bigArray [5] = 'natalia',
bigArray [6] = 712,
bigArray [7] = 45===9,
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
empty [3] = 10!==10,
empty [4] = 'J.K.Rowling'
for(let items = 0; items<empty.length; items++){
    console.log(empty[items])
}

//  Створити цикл for на 10  ітерацій з кроком 1
//  Вивести поточний номер кроку через console.log та document.write

for(let i = 0; i<=10; i++){
    console.log(i)
    document.write(`${i}`)
}

//  Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i=0; i<=100; i++){
    console.log(i)
    document.write(`${i}`)
}

//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i=0; i<=100; i=i+2){
    console.log(i)
    document.write(`${i}`)
}

//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(let i=0; i<-100; i++){
    if( i % 2 === 0){
        console.log(i)
        document.write(`${i}`)
    }
}

//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let i=0; i<=100; i++){
    if(i%2 !==0){
        console.log(i)
        document.write(`${i}`)
    }
}

