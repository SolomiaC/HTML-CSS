//- Дано список імен.
//let n1 = 'Harry..Potter'
//let n2 = 'Ron---Whisley'
//let n3 = 'Hermione__Granger'
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
let replace1 = n1.replace('..', ' ')
console.log(replace1)

let n2 = 'Ron---Whisley'
let replace2 = n2.replace('---', ' ')
console.log(replace2)

let n3 = 'Hermione__Granger'
let replace3 = n3.replace('__', ' ')
console.log(replace3)

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomizer = (size, number) => {
    let empty = []
    for (let i = 0; i<size; i++){
    empty.push(Math.floor(Math.random() * number));}
    return empty;
}
let result = randomizer(15, 250)
console.log(result)

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let random = [11, 123, 45, 64, 9, 21, 7, 32, 792, 5, 43, 2, 8];
random.sort((a, b) =>{
    return a-b;
})
console.log(random)
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let randomTwo = [11, 123, 45, 64, 9, 21, 7, 32, 792, 5, 43, 2, 8];
let filter = randomTwo.filter((item, index)=>{
    if( item % 2 ===0){
        return true;
    } else {return false}
});
console.log(filter)
//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [11, 123, 45, 64, 9, 21, 7, 32, 792, 5, 43, 2, 8];
let map = arr.map (value => value.toString())
console.log(map)

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
//sortNums('ascending') // [3,11,21]
//sortNums('descending') // [21,11,3]
let numbers = [11, 22, 333, 42, 87, 7, 243, 21, 98]
let sort = numbers.sort((a, b) => {
    return a-b
})
console.log(sort)

let numbersTwo = [11, 22, 333, 42, 87, 7, 243, 21, 98]
let sortTwo = numbersTwo.sort((a, b) =>{
    return b-a
})
console.log(sortTwo)

//- є масив
//let coursesAndDurationArray = [
//  {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//  {title: 'Python Complex', monthDuration: 6},
//  {title: 'QA Complex', monthDuration: 4},
//  {title: 'FullStack', monthDuration: 7},
//  {title: 'Frontend', monthDuration: 4}
//];
 //-- відсортувати його за спаданням за monthDuration
 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];
    let sortForCoursesAndDuration = coursesAndDurationArray.sort((a, b) =>
        b.monthDuration - a.monthDuration);
    console.log(sortForCoursesAndDuration)

 //-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 let coursesAndDurationArrayTwo = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];
    let filterForCoursesAndDurationTwo = coursesAndDurationArrayTwo.filter ((item, index) =>{
        if(item.monthDuration > 5){
            return true;
        } else {return false}
    });
    console.log(filterForCoursesAndDurationTwo)