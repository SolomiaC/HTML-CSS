
//Заполните массив 10-ю иксами с помощью цикла.  
let array = [];
for( let i = 0; i < 10; i++){
    array[i] = 'x';
}
console.log(array)

//Заполните массив числами от 1 до 10 с помощью цикла.  
let array2 = [];
for (let i = 0; i <= 10; i++){
    if(i > 0 && i <= 10)
    array2[i] = i;
}
console.log(array2)

//Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.  
let array3 = [];
for (let i = 0; i < 10; i++){
    array3[i] = Math.random().toFixed(2)
}
console.log(array3)

//Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.  
let array4 = [];
for(let i = 0; i <= 10; i++){
    array4[i] = Math.floor(Math.random() * 10);
}
console.log(array4)

//Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.  
let array5 = [2, 45, 61, 3, 0, 8, 19, 21, 6, 52, 109, 4];
for (let i = 0; i < array5.length; i++)
    if( array5[i] > 0 &&  array5[i] < 10){
        console.log(array5[i])
    } 

//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.  
let array6 = [2, 45, 61, 3, 8, 19, 21, 6, 52, 109, 4];
let suma = 0;
for (let i = 0; i < array6.length; i++){
    suma += array6[i]
}
console.log(suma)

   
//Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество). 
let array7 = [2, 45, 61, 3, 8, 19, 21, 6, 52, 109, 4];
let suma2 = 0;
let newArray;
for (let i = 0; i < array7.length; i++){
    suma2 += array7[i];
    newArray = suma2 / array7.length
} console.log(newArray)


let number1 = 67;
let number2 = 132;
let value;
value = 67 + 132
console.log(value)

value += 100
console.log(value)  