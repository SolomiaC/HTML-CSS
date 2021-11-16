//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:перебрати його циклом for

let arrNumbers = [2,17,13,6,22,31,45,66,100,-18];
for(let numbers =0; numbers<arrNumbers.length; numbers++){
    console.log(arrNumbers[numbers])
}

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//перебрати його циклом while

arrWhile = 0
while(arrWhile<arrNumbers.length){
    console.log(arrNumbers[arrWhile])
    arrWhile++;
}

//перебрати циклом for та вивести  числа тільки з непарним індексом

let arrayNumbers = [2,17,13,6,22,31,45,66,100,-18];
for(let item = 0; item<arrayNumbers.length; item++){
    if(item % 2 !== 0){
        console.log(item)
    }
}

//перебрати циклом for та вивести  числа тільки парні  значення

let aRRay =[2,17,13,6,22,31,45,66,100,-18];
for(let aRRayItem = 0; aRRayItem<aRRay.length; aRRayItem++){
    if(aRRayItem % 2 === 0){
        console.log(aRRayItem)
    }
}

//замінити кожне число кратне 3 на слово "okten"

let nrArr = [2,17,13,6,22,31,45,66,100,-18];
for(let nrArrItem = 0; nrArrItem<nrArr.length; nrArrItem++){
    if(nrArrItem % 3 ===0){
        console.log('Okten')
    } else {console.log(nrArr[nrArrItem])}
}

//вивести масив в зворотньому порядку.

let arrReflection = [2,17,13,6,22,31,45,66,100,-18];
for(let reflection = arrReflection.length-1; reflection>=0; reflection--){
        console.log(arrReflection[reflection])
    }

//всі попередні завдання (окрім 8), але в зворотньому циклі  
let reflectionArr = [2,17,13,6,22,31,45,66,100,-18];
for(let reflItem = reflectionArr.length-1; reflItem>=0; reflItem--){
    if(reflItem % 3 ===0){
        console.log('Okten')
    } else {console.log(reflectionArr[reflItem])}
}

let reflectionArray = [2,17,13,6,22,31,45,66,100,-18];
for(let reflArr = reflectionArray.length-1; reflArr>=0; reflArr--){
    if(reflArr % 2 === 0){
        console.log(reflectionArray[reflArr])
    }
}

let reflArray = [2,17,13,6,22,31,45,66,100,-18];
for(let reflArrayItem = reflArray.length-1; reflArrayItem>=0; reflArrayItem--){
    if(reflArrayItem % 2 !== 0){
        console.log(reflArray[reflArrayItem])
    }
}