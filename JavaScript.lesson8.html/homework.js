//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//    -- отримує текст з параграфа з id "content"
let textFromParagraph = document.getElementById('content')
console.log(textFromParagraph)
//    -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules')
console.log(rules.innerText)
//    -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = 'В основу твору автор поклав розповідь одного страхового агента з США. Ім’я героя не вказується, тому його називають Оповідач. Персонаж страждає тривалим безсонням і депресією від одноманітності власного життя. Намагаючись вирішити цю проблему, герой потрапляє у підпільний клуб єдиноборств, де можна згадати про свою чоловічу сутність і виплеснути енергію. З часом філії такого підпільного об’єднання виникають і у інших містах.';

//    -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = 'Але не тільки жорстокі бійки пропонує читачеві твір. Автор піднімає тему фемінізації чоловічої половини. Велика кількість розлучень призводить до того, що хлопчики виховуються жінками, а потім втрачають мужність. З цією темою тісно переплітається й інша соціальна проблема — сучасне суспільство виховує покоління споживачів. Отримання матеріальних благ стає основним мотивом у житті людини.';
//    -- змініть кожному елементу колір фону на червоний
let children = document.body.children;
for(let child of children) {
    child.style.background = 'red'
}
console.log(children)

//    -- змініть кожному елементу колір тексту на синій
let childrenTwo = document.body.children;
for (let child of children){
    child.style.background = 'blue'
}
console.log(childrenTwo)
//    -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesList = document.getElementById('rules')
console.log(rulesList.classList)
//    -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules = document.getElementsByClassName('fc_rules')
for (let item of fcRules){
    item.style.color = 'red'
}
