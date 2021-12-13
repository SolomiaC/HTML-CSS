//1. HOMEWORK
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
//Для кожного елементу свій блок div.post
//Всі характеристики повинні мати свої блоки всередені div.post
//https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
.then (response => response.json())
.then (value => {
    let father = document.createElement('div');
    father.classList.add('father');
    for (let i of value){
        let item = document.createElement('div');
        item.classList.add('value');
        item.innerHTML = `<h2> ID: ${item.id}</h2>
        <h3> Title: ${item.title} </h3>
        <h4> Body: ${item.body} </h4>`;
        father.appendChild(item)
        document.body.appendChild(father)
    }
})

//2. HOMEWORK
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//Для кожного елементу свій блок div.comment
//Всі характеристики повинні мати свої блоки всередені div.comment
//https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response2 => response2.json())
.then(users => {
    let wrap = document.createElement('div');
    wrap.classList.add('wrap');
    for (let i of users){
        let divElement = document.createElement('div');
        divElement.classList.add('divElement');
        divElement.innerHTML = `<h2> PostID: ${divElement.postId}</h2>
        <h3> ID: ${divElement.id} </h3>
        <h4> Name: ${divElement.name} </h4>
        <h3> Email: ${divElement.email} </h3>
        <h4> Body: ${divElement.body} </h4>`;

        wrap.appendChild(divElement)
        document.body.appendChild(wrap)
    }
})

//1. CLASSWORK
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//https://jsonplaceholder.typicode.com/posts
//зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response2 => response2.json())
.then(user => {
    let wrap2 = document.createElement('div');
    wrap2.classList.add('wrap2');
    for (let i of user){
        let divElementTwo = document.createElement('div');
        divElementTwo.classList.add('divElementTwo');
        divElementTwo.innerHTML = `<h2> UserID: ${divElementTwo.userId}</h2>
        <h3> ID: ${divElementTwo.id} </h3>
        <h4> Name: ${divElementTwo.name} </h4>
        <h3> Email: ${divElementTwo.email} </h3>
        <h4> Body: ${divElementTwo.body} </h4>`;
        wrap2.appendChild(divElementTwo)
        document.body.appendChild(wrap2)
let button = document.createElement('button');
button.innerText = 'Click Comments';
button.onclick = (id) => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
        .then(response3 => response3.json())
        .then(comments => {
        for (let i of comments) {
            if (post.id === i.postId) {
            let divComments = document.createElement('div');
            divComments.classList.add('divComments');
            divComments.innerHTML = `<h3> ID: ${i.id}</h3>
                <h4>Name: ${i.name}</h4>
                <h5>Email: ${i.email}</h5>
                <h6>Body: ${i.body}</h6>`;
                divElementTwo.appendChild(divComments)}
                button.disabled = true;}
    })}
    divElementTwo.appendChild(button);
    }
})