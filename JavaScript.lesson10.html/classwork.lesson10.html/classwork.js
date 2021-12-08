//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//нопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
document.getElementById('btn').onclick = function (){
    let inputOne = document.forms.f1.one.value;
    let inputTwo = document.forms.f1.two.value;
    let inputThree = document.forms.f2.three.value;
    let inputFour = document.forms.f12.four.value;
}

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)
let formCreator = document.forms.creator;
form.onsubmit = function (e){
    e.preventDefault();
    let menu = form.menu.value;
    let info = form.info.value;
    let contacts = form.contacts.value;
};
let table = document.createElement('table');
for(let item = 0; i<menu; i++){
    let tr = document.createElement('tr')
    table.appendChild(tr)
}
document.body.appendChild(table)

//- Сворити масив не цензцрних слів.
//Сворити інпут текстового типу.
//Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//кинути алерт з попередженням.
//Перевірку робити при натисканні на кнопку
let array = ['dfggfghgjgh', 'lkjhgfds', 'mnbvcx', 'qsdfghn'];
let btn2 = document.getElementById('btn2')
btn.onclick = function (){
    let badWords = document.getElementById('badWord').value;
    for( let badWord of array){
        if (badWord === badWords){
            alert();
        }
    }
}

//- Сворити масив не цензцрних слів.
//Сворити інпут текстового типу.
//Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//Кинути алерт з попередженням у випадку якщо містить.
//Перевірку робити при натисканні на кнопку
let array2 = ['dfggfghgjgh', 'lkjhgfds', 'mnbvcx', 'qsdfghn'];
let btn2 = document.getElementById('btn2')
btn.onclick = function (){
    let badWords2 = document.getElementById('badWord').value;
    for( let badWord of array){
        if (badWord.includes.badWords2){
            alert();
        }
    }
}
