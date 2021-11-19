//1. Створити пустий масив та :
//a. заповнити його 50 парними числами за допомоги циклу.
//b. заповнити його 50 непарними числами за допомоги циклу.
//c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let empty = [];
for (let item=0; item<=50; item++){
    if(item % 2 ===0){
        console.log(item)
    }
}

for(let item=0; item<=50; item++){
    if(item % 2 !== 0){
        console.log(item)
    }
}

for(let item=0; item<=20; item++){
    console.log(Math.random(20))
}

for(let item=0; item<=20; item++){
    if(item >= 8 && item<=732){
        console.log(Math.random(20))
    }
}

//Вивести за допомогою console.log кожен третій елемен
for(let item=0; item<=50; item++){
    if(item % 3 ===0){
        console.log(item)
    }
}

//Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for(let item=0; item<=50; item++){
    if(item % 3 === 0 && item % 2 === 0){
        console.log(item)
    }
}

//Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив


//Вивести кожен елемент масиву, сусід справа якого є парним
//EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

//Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек. 
