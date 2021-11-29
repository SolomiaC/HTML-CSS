//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model, manufacturer, year, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}
console.log(Car)
//    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
function Drive (model, manufacturer, year, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.message = function () {
                console.log(`we drive ${this.maxspeed} per hour`);
    }
}
let driver1 = new Drive ('mazda6', 'japan', 2018, 230, 174)
console.log(driver1)

//   -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
function Drive2 (model, manufacturer, year, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.info = function () {
         for (let key in this) {
         if (typeof this [key] !== 'function') 
         console.log(`${key} - ${this[key]}`)
        }
}
let driver2 = new Drive ('audi r8', 'germany', 2020, 322, 620)
console.log(driver2)

//    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
function Drive3 (model, manufacturer, year, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.maxSpeed = function(newSpeed){
        return this.maxSpeed + this.newSpeed
    }
}
let driver3 = new Drive('mazda6', 'japan', 2018, 230, 174)
console.log(driver3)

//    -- changeYear (newValue) - змінює рік випуску на значення newValue
function Drive4 (model, manufacturer, year, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.changeYear = function(newValue){
    this.year = this.newValue
    }
}
let driver4 = new Drive ('audi r8', 'germany', 2020, 322, 620)
console.log(driver4)

//    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Drive5 (model, manufacturer, year, maxSpeed, engineCapacity, name, surname, workExperience){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;  
    this.addDriver = {name: name, surname: surname, workExperience: workExperience} 
}  
let driver5 = new Drive('mazda6', 'japan', 2018, 230, 174, 'Sebastian', 'Vettel', 14)
console.log(driver5)


//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

//    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

//    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

//    -- changeYear (newValue) - змінює рік випуску на значення newValue

//    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity; 
}
drive (){
    console.log(`we drive ${this.maxspeed} per hour`);
}
info(){
    for (let keys in this){
        console.log(`${key} - ${this[key]}`)
    }
}
maxSpeed (newSpeed){
    this.maxSpeed = this.maxSpeed + newSpeed;
}
changeYear(newValue){
    this.year === newValue
}
addDriver (driver){
    this.addDriver === driver
}
}

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cindrella {
    constructor (name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const arrayForCindrella = [
    new Cindrella ('Emma', 23, 36 ),
    new Cindrella ('Luna', 26, 37),
    new Cindrella ('Ida', 21, 36),
    new Cindrella ('Margo', 23, 38),
    new Cindrella ('Blair', 24, 37),
    new Cindrella ('Serena', 24, 39),
    new Cindrella ('Mary', 27, 35),
    new Cindrella ('Adelaida', 28, 37),
    new Cindrella ('Victoria', 25, 38),
    new Cindrella ('Adriana', 22, 36),
]
console.log(arrayForCindrella)
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//За допомоги циклу знайти яка попелюшка повинна бути з принцом.

class Prinz {
    constructor(name, age, shoe){
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prinz = new Prinz ('Francis', 28, 35)
console.log(prinz)

let couple = (arrayForCindrella, Prinz) => {
    for (item of arrayForCindrella){
        if (item.footSize === prinz.shoe){
            return `Congratulation! You found your Cindrella. It is ${item.name}`
        }
    }
}
console.log(couple(arrayForCindrella, Prinz))

//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку 

let find = arrayForCindrella.find ((value => value.footSize === 35))
console.log(find)