//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let click = document.getElementById('text');
    let button = document.getElementById('button');
    button.onclick = function () {
    click.style.display = 'none';
    }

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn = document.getElementById('btn')
btn.addEventListener ('click', hideshow, false)
function hideshow() {
    document.getElementById('btn').style.display = 'block'; 
    this.style.display = 'none'
}   

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let inputForm = document.forms.form1.age
     if(age < 18){
         console.log('You are younger than 18')
     } else if(age >= 18){
         console.log('You are older than 18')
     }

//- Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementById('nav');
let cat = document.getElementById('cat1');
cat.onclick = function () {
    menu.classList.toggle('hidden');
    };

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let comments = [
    {name: 'Irene', body: 'You should eat your fruits'},
    {name: 'Emma', body: 'It is too late for apologize'},
    {name: 'Nate', body: 'Collect your moments!'},
    {name: 'Chuck', body: 'What do you think about Susi?'},
    ];

//Вывести список комментариев в документ, каждый в своем блоке.
//Добавьте каждому комментарию по кнопке для сворачивания его body.

for(let i of comments){
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    let title = document.createElement('h2');
    title.innerText = comment.title;
    let bodyComment = document.createElement('div');
    bodyComment.classList.add('body-comment');
    bodyComment.innerText = comment.body;
    let btn = document.createElement('button');
    btn.innerText = 'hide.comment.body';
    btn.onclick = function () {
        bodyComment.classList.toggle('hide-body')
    }
commentDiv.appendChild(title, bodyComment, btn);
document.body.appendChild(commentDiv)
}

