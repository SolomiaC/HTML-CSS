let day;
function toDoListMorning (isItMorning, callback){
    setTimeout(() => {
    if(isItMorning){
        console.log('You need to wake up and go to gym')
        callback();
    } else{ console.log('Great. You are late. AGAIN')}
    }, 500)
}toDoListMorning(true, () => {
    toDoListDay()
})

function toDoListDay (isItDay, callbackTwo){
    setTimeout(() => {
        if(isItDay){
            console.log('You need go to work')
            callbackTwo();
        } else{console.log('You will not have enough money for vacation in Paris')}
    }, 1000)
}toDoListDay(true, () => {
    toDoListEvening()
})

function toDoListEvening (isItEvening, callbackThree){
    setTimeout(() => {
        if(isItEvening) {
            console.log('You have a lecture in Okten')
            callbackThree();
        } else{ console.log('Do not be lazy!!! Do you still want to become a programmer???')}
    }, 1200)
} toDoListEvening(true, () => {
    toDoListNight()
})

function toDoListNight (isItNight, callbackFour){
    setTimeout(() => {
        if(isItNight){
            console.log('Is time for book')
        } else{console.log('OK, maybe another time')}
    }, 1250)
}toDoListNight(true)