fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    console.log(response);
    return response.json();
})
.then (users => {
    for(const user of users){
        let divElement = document.createElement('div')
        divElement.innerText = `${user.id} ${user.name}`
        document.body.appendChild(divElement);
         
divElement.style.width = '180px'
divElement.style.height = '70px'
divElement.style.marginBottom = '60px'
divElement.style.background = '#E8B6D8'
divElement.style.color = 'white'
divElement.style.marginLeft = '700px'
divElement.style.borderRadius = '10px'
divElement.style.paddingTop = '7px'

  
        let button = document.createElement('button');
        button.innerText = 'Read more';
        button.onclick = (title) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response2 => response2.json())
        .then(comments => {
for (let i of comments) {
    if (post.title === i.postTitle) {
        let divComments = document.createElement('div');
        divComments.classList.add('divComments');
        divComments.innerHTML = `<h3> ID: ${i.id}</h3>
            <h4>Name: ${i.name}</h4>
            <h5>Email: ${i.email}</h5>
            <h6>Body: ${i.body}</h6>`;
    divElement.appendChild(divComments)}
        button.disabled = true;}
    })}
    button.onclick = function () {
        location.href = "user-details.html";
    };
    divElement.appendChild(button);
    
    button.style.marginTop = '20px'
    button.style.background = '#D644A8'
    button.style.color = 'white'
    button.style.width = '180px'
    button.style.height = '30px'
    button.style.borderRadius = '10px'
    }
            
    
})

