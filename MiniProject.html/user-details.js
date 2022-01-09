fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    console.log(response);
    return response.json();
})
.then (users => {
    for(const user of users){
        let divElement = document.createElement('div')
       
        document.body.appendChild(divElement);
         
        divId = document.createElement('div')
        divId.innerText = user.id
    
        divName = document.createElement('div')
        divName.innerText = user.name
    
        divUsername = document.createElement('div')
        divUsername.innerText = user.username
    
        divEmail = document.createElement('div')
        divEmail.innerText = user.email
    
        divAddress = document.createElement('div')
        divAddress.innerText = user.address
        divStreet = document.createElement('div')
        divStreet.innerText = user.address.street
        divSuite = document.createElement('div')
        divSuite.innerText = user.address.suite
        divCity = document.createElement('div')
        divCity.innerText = user.address.city
        divZipcode = document.createElement('div')
        divZipcode.innerText = user.address.zipcode
        divGeo = document.createElement('div')
        divGeo.innerText = user.address.geo
        divLat = document.createElement('div')
        divLat.innerText = user.address.geo.lat
        divLng = document.createElement('div')
        divLng.innerText = user.address.geo.lng
    
        divPhone = document.createElement('div')
        divPhone.innerText = user.phone
    
        divWebsite = document.createElement('div')
        divWebsite.innerText = user.website
    
        divCompany = document.createElement('div')
        divCompany.innerText = user.company
        divNameCompany = document.createElement('div')
        divNameCompany.innerText = user.company.name
        divCatchPhrase = document.createElement('div')
        divCatchPhrase.innerText = user.company.catchPhrase
        divBS = document.createElement('div')
        divBS.innerText = user.company.bs
    
        document.body.appendChild(divElement)
        divElement.appendChild(divId)
        divElement.appendChild(divName)
        divElement.appendChild(divUsername)
        divElement.appendChild(divEmail)
        divElement.appendChild(divAddress)
        divElement.appendChild(divPhone)
        divElement.appendChild(divWebsite)
        divElement.appendChild(divCompany)
    
        divAddress.appendChild(divStreet)
        divAddress.appendChild(divSuite)
        divAddress.appendChild(divCity)
        divAddress.appendChild(divZipcode)
        divAddress.appendChild(divGeo)
    
        divGeo.appendChild(divLat)
        divGeo.appendChild(divLng)
    
        divCompany.appendChild(divNameCompany)
        divCompany.appendChild(divCatchPhrase)
        divCompany.appendChild(divBS)    
        
divElement.style.width = '300px'
divElement.style.height = '400px'
divElement.style.marginBottom = '60px'
divElement.style.background = '#E8B6D8'
divElement.style.color = 'white'
divElement.style.marginLeft = '700px'
divElement.style.borderRadius = '10px'
divElement.style.paddingTop = '15px'
        
 let button = document.createElement('button');
        button.innerText = 'Open Comments';
        button.onclick = (title) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + post.title + '/comments')
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
        location.href = "post-details.html";
    };
    divElement.appendChild(button);
    button.style.marginTop = '20px'
    button.style.background = '#D644A8'
    button.style.color = 'white'
    button.style.width = '300px'
    button.style.height = '30px'
    }
    
}) 