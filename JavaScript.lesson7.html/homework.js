//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user1 = new User (15, 'Draco', 'Malfoy', 'draco.malfoy@gmail.com', '+443215454')
console.log(user1)

//створити пустий масив, наповнити його 10 об'єктами new User(....)
const arrayForUsers = [
    user1 = {id:1, name: 'harry', surname: 'potter', status: 'half-blood'},
    user2 = {id:2, name: 'hermione', surname: 'granger', status: 'maggle-born'},
    user3 = {id:3, name: 'ron', surname: 'weasley', status: 'pure-blood'},
    user4 = {id:4, name: 'draco', surname: 'malfoy', status: 'pure-blood'},
    user5 = {id:5, name: 'sirius', surname: 'black', status: 'pure-blood'},
    user6 = {id:6, name: 'james', surname: 'potter', status: 'pure-blood'},
    user7 = {id:7, name: 'tom', surname: 'riddle', status: 'half-blood'},
    user8 = {id:8, name: 'severus', surname: 'snape', status: 'half-blood'},
    user9 = {id:9, name: 'cedric', surname: 'diggory', status: 'pure-blood'},
    user10 = {id:10, name: 'neville', surname: 'longbottom', status: 'pure-blood'},
];
console.log(arrayForUsers)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const arrayForUsers2 = [
    user1 = {id:1, name: 'harry', surname: 'potter', status: 'half-blood'},
    user2 = {id:2, name: 'hermione', surname: 'granger', status: 'maggle-born'},
    user3 = {id:3, name: 'ron', surname: 'weasley', status: 'pure-blood'},
    user4 = {id:4, name: 'draco', surname: 'malfoy', status: 'pure-blood'},
    user5 = {id:5, name: 'sirius', surname: 'black', status: 'pure-blood'},
    user6 = {id:6, name: 'james', surname: 'potter', status: 'pure-blood'},
    user7 = {id:7, name: 'tom', surname: 'riddle', status: 'half-blood'},
    user8 = {id:8, name: 'severus', surname: 'snape', status: 'half-blood'},
    user9 = {id:9, name: 'cedric', surname: 'diggory', status: 'pure-blood'},
    user10 = {id:10, name: 'neville', surname: 'longbottom', status: 'pure-blood'},
];
let filter = arrayForUsers2.filter ((item) => {
    return item.id % 2 === 0;
})
console.log(filter)

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const arrayForUsers3 = [
    user1 = {id:10, name: 'harry', surname: 'potter', status: 'half-blood'},
    user2 = {id:23, name: 'hermione', surname: 'granger', status: 'maggle-born'},
    user3 = {id:31, name: 'ron', surname: 'weasley', status: 'pure-blood'},
    user4 = {id:14, name: 'draco', surname: 'malfoy', status: 'pure-blood'},
    user5 = {id:15, name: 'sirius', surname: 'black', status: 'pure-blood'},
    user6 = {id:60, name: 'james', surname: 'potter', status: 'pure-blood'},
    user7 = {id:7, name: 'tom', surname: 'riddle', status: 'half-blood'},
    user8 = {id:18, name: 'severus', surname: 'snape', status: 'half-blood'},
    user9 = {id:21, name: 'cedric', surname: 'diggory', status: 'pure-blood'},
    user10 = {id:11, name: 'neville', surname: 'longbottom', status: 'pure-blood'},
];
let sort = arrayForUsers3.sort ((a, b) => {
    return a.id-b.id;
})
console.log(sort)

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor (id, name, surname , email, phone, order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let client1 = new Client (25683, 'Hermione', 'Granger', 'granger@gmail.com', '+441288873', 'Horwarts: A Histiry')
console.log(client1)
let client2 = new Client (37212, 'Fred', 'Weasley', 'fred.weasley.gmail.com', '+441308998', 'Fantastic Beasts and Where to Find Them')
console.log(client2)

//створити пустий масив, наповнити його 10 об'єктами Client
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const empty = [
    new Client (31, 'emma', 'watson', 'was born in Paris'),
    new Client (33, 'rupert', 'grint', 'was born in Harlowd'),
    new Client (32, 'daniel', 'radcliffe', 'was born in London'),
    new Client (34, 'tom', 'felton', 'was born in Epsom'),
    new Client (69, 'alan', 'rickman', 'was born in London'),
    new Client (86, 'maggie', 'smith', 'was born in Ilford'),
    new Client (55, 'helena', 'bonham carter', 'was born in London'),
    new Client (63, 'gary', 'oldman', 'was born in London'),
    new Client (58, 'david', 'thewlis', 'was born in Blackpool'),
    new Client (62, 'emma', 'thompson', 'was born in London'),
];
console.log(empty)

let sortClient = empty.sort ((a, b) => {
    return a.id - b.id
})
console.log(sortClient)


