//-створити форму з інпутами для name та age.
//При відправці форми записати об'єкт в localstorage
let formName = document.forms.form.name;
let formAge = document.forms.form.age;
let button = document.getElementById('btn');
let key = key;
let info = (username, userage) => {
    let user = {
        name = username,
        age = userage,
    }
    localStorage.setItem(key, JSON.stringify(user))
};
btn.onclick = () => {
    save(username.value, age.value)
}


//-створити форму з інпутами для model,type та volume автівки.
//при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let carModel = document.forms.form2.model;
let carType = document.forms.form2.type;
let carVolume = document.forms.form2.volume;
let key2 = carKey;
let carInfo = (carmodel, cartype, carvolume) => {
    let car = {
        model = carmodel,
        type = cartype,
        volume = carvolume,
    }
    let newArray = localStorage.setItem(key, JSON.stringify(key2)) || [];
    newArray.push ({carmodel, cartype, carvolume})
    localStorage.setItem(key, JSON.stringify(key2))
    
    };
    btn.onclick = () => {
        save(carmodel.value, cartype.value, carvolume.value)
}

   
//є масив -
//let users = [
//    {name: 'vasya', age: 31, status: false},
//    {name: 'petya', age: 30, status: true},
//    {name: 'kolya', age: 29, status: true},
//    {name: 'olya', age: 28, status: false},
//    {name: 'max', age: 30, status: true},
//    {name: 'anya', age: 31, status: false},
//    {name: 'oleg', age: 28, status: false},
//   {name: 'andrey', age: 29, status: true},
//   {name: 'masha', age: 30, status: true},
//    {name: 'olya', age: 31, status: false},
//   {name: 'max', age: 31, status: true}
//];
//створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
//Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let users = [
       {name: 'vasya', age: 31, status: false},
       {name: 'petya', age: 30, status: true},
       {name: 'kolya', age: 29, status: true},
       {name: 'olya', age: 28, status: false},
       {name: 'max', age: 30, status: true},
       {name: 'anya', age: 31, status: false},
       {name: 'oleg', age: 28, status: false},
       {name: 'andrey', age: 29, status: true},
       {name: 'masha', age: 30, status: true},
       {name: 'olya', age: 31, status: false},
       {name: 'max', age: 31, status: true}
    ];
    for (const user of users){
        let userDiv = document.createElement('div');
        userDiv.innerText = JSON.stringify(user);
        let btn3 = document.createElement('button')
        btn3.onclick = function() {
            let favorites = JSON.parse(local.getItem('favorites')) || [];
            favorites.push(user);
        };
        document.body.appendChild(userDiv);
        userDiv.appendChild(btn3)

    }