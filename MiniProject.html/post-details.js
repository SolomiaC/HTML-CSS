
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    console.log(response);
    return response.json();
})
.then (posts => {
    for(const post of posts){
        let divElement = document.createElement('div')
       
        document.body.appendChild(divElement);
         
        divUserId = document.createElement('div')
        divUserId.innerText = post.userId
    
        divId = document.createElement('div')
        divId.innerText = post.id
    
        divTitle = document.createElement('div')
        divTitle.innerText = post.title
    
        divBody = document.createElement('div')
        divBody.innerText = post.body

        document.body.appendChild(divElement)
        divElement.appendChild(divUserId)
        divElement.appendChild(divId)
        divElement.appendChild(divTitle)
        divElement.appendChild(divBody)

divElement.style.width = '300px'
divElement.style.height = '200px'
divElement.style.marginBottom = '60px'
divElement.style.background = '#D644A8'
divElement.style.color = 'white'
divElement.style.marginLeft = '700px'
divElement.style.borderRadius = '10px'
divElement.style.paddingTop = '15px'
divElement.style.paddingLeft = '7px'
    }
}) 