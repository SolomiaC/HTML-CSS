//Всі функції повинні бути описані стрілочним типом!!!!
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let numbers = (a, b, c) => {
    if(a<b && a<c){
        console.log(a)
    } if(b<a &&  b<c){
        console.log(b)
    } else{console.log(c)}
}
numbers (465, 12, 324)

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let numbers2 = (a, b, c) => {
    if (a>b &&  a>c){
        console.log(a)
    } if (b>a && b>c){
        console.log(b)
    } else{console.log(c)}
}
numbers2(19, 3, 47)

//- створити функцію яка повертає найбільше число з масиву
let array = (numbers) => {
    let maxNumber = numbers[0];
    for(number of numbers){
        if(numbers>maxNumber){
            maxNumber = numbers;
        }
    }
    return maxNumber;
}

//- створити функцію яка повертає найменьше число з масиву
let array2 = (nbr) =>{
    let minNumbers = nbr[0];
    for(minNumber of nbr){
        if(nbr<minNumbers){
            minNumbers=nbr;
        }
    }
    return minNumbers;
}


//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let plus = (nbrPlus) => {
    let suma = 0;
    for (numbers of nbrPlus){
        suma = suma + numbers
    }
    return suma;
}


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arr = (array) =>{
    let suma = 0
    for (arr of array){
        suma = arr + suma
    }
    return suma/array.length;
}

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let funOfMinMax = (arrMinMax) => {let max = arrMinMax[0];
let min = arrMinMax[0];
for (minMaxArr of arrMinMax){
    if(arrMinMax>max){
        max=arrMinMax;
    }
    if(arrMinMax<min){
        min=arrMinMax;
    }
    console.log(max);
    return min
}
}

//- створити функцію яка заповнює масив рандомними числами
let randomNumbers = (arr) =>{
    for(let i=0; i<=arr.length; i++){
        arr[i]= Math.random
    }
    console.log(arr[i])
}


//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let random = (array) =>{
    for(let i=0; i<10; i++){
        array[i] = Math.round(Math.random()*100)
    }
    console.log(array[i])
}

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomizer = (length, limit) => {
    let empty = []
    for(let i = 0; i<length; i++)
    empty.pushMath.round(Math.random()*100);
randomizer(30, 250)
return empty;}


//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reflection = (arrayReflection) =>{
    let arrReflection = [];
    for(let i = arrayReflection.length-1; i <= 0; i--){
        let arrElement = arrayReflection[i];
        arrReflection.push(arrayReflection)
    } 
    return arrReflection}