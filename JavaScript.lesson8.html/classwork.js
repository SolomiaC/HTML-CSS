// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById('main_header').classList.add('september 2021')
console.log(mainHeader)

//     b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul')
console.log(ul.style.width='400px')

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList')
for (let item of linkList){
    item.style.background = 'blue'
}
    console.log(linkList)
//     d) отримує текст який зберігається в елементі з класом listElement2
function addText(text){
   let addText =  document.getElementsByClassName('listElement2').innerText = text
}
//     e) отримує всі елементи li та змінює ім колір фону на сірий 
let li = document.getElementsByTagName('li')
for( let item of li){
    item.style.background = 'gray'
}
console.log(li)
//     f) отримує всі елементи 'a' та додає їм клас anchor
let aElements = document.getElementsByTagName('a')
for(let a of aElements)
a.aElements.add('anchor')

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aList = document.getElementsByTagName('a')
for(let a of aList){
    if (a.innerText ===link3){
        a.style.frontSize = '40px'
    }
}
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aList = document.getElementsByTagName('a')
for(let a of aList){
    let newClass = a.innerText;
    a.classList.add('element_XXX')
}

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = documnet.getElementsByClassName('sub-header')
for(item of subHeader){
    item.style.background = prompt('please, enter color')
}
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeader = documnet.getElementsByClassName('sub-header')
for(item of subHeader){
    if(item.innerText === 'content 2 segment') {
        item.style.color = prompt('please, enter color')
    }
}
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let contentOne = document.getElementsByClassName('content_1')
for(let content of contentOne){
    content.innerText = prompt('write a text')
}
//     l) отримати елементи p та змінити їм padding на 20px
let pList = document.getElementsByTagName('p')
for(let p of pList){
    p.style.padding = '20px'
}
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let textTwo = document.getElementsByClassName('text2')
textTwo.classList.add('september 2021')