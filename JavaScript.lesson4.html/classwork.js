//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numbers (a, b, c){
    if(a<b && a<c){
        console.log(a)
    } if(b<a &&  b<c){
        console.log(b)
    } else{console.log(c)}
}
numbers(28, 122, 5)


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function numbersTwo (a, b, c){
    if (a>b &&  a>c){
        console.log(a)
    } if (b>a && b>c){
        console.log(b)
    } else{console.log(c)}
}
numbersTwo(34, 56, 9)
//- створити функцію яка повертає найбільше число з масиву
function array (numbers){
    let maxNumber = numbers[0];
    for(number of numbers){
        if(numbers>maxNumber){
            maxNumber = numbers;
        }
    }
    return maxNumber;
}
//- створити функцію яка повертає найменьше число з масиву
function arr (nbr){
    let minNumbers = nbr[0];
    for(minNumber of nbr){
        if(nbr<minNumbers){
            minNumbers=nbr;
        }
    }
    return minNumbers;
}
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function plus (nbrPlus)
let suma = 0;
    for (numbers of nbrPlus){
        suma = suma + numbers
    }
    return suma;


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrayTwo = [2, 5, 10, 3, 7]
function arrTwo (array){
    let suma = 0
    for (arr of array){
        suma = arr + suma
    }
    return suma/array.length;
}

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMax (arrMinMax)
let max = arrMinMax[0];
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

//- створити функцію яка заповнює масив рандомними числами. цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function random (array){
    for(let i=0; i<10; i++){
        array[i] = Math.round(Math.random()*100)
    }
    console.log(array[i])
}

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomizer (length, limit){
    let empty = []
    for(let i = 0; i<length; i++)
    empty.pushMath.round(Math.random()*100);
}
randomizer(30, 250)
return empty;

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reflection (arrayReflection){
let arrReflection = [];
for(let i = arrayReflection.length-1; i <= 0; i--){
    let arrElement = arrayReflection[i];
    arrReflection.push(arrayReflection)
} 
}
return arrReflection
