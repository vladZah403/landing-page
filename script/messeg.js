let card1 = document.querySelector('.card1')
let card2 =document.querySelector('.card2')
let card3 = document.querySelector('.card3')
let card4 =document.querySelector('.card4')
let card5 = document.querySelector('.card5')
let card6 =document.querySelector('.card6')

let textTours = document.querySelector('#textTours')
let idTours = document.querySelector('#idTours')


card1.addEventListener('click',()=>{
    textTours.value = 'Warsaw'
    idTours.value = '1'
})
card2.addEventListener('click',()=>{
    textTours.value = 'Paris'
    idTours.value = '2'
})
card3.addEventListener('click',()=>{
    textTours.value = 'Rome'
    idTours.value = '3'
})
card4.addEventListener('click',()=>{
    textTours.value = 'Washington'
    idTours.value = '4'
})
card5.addEventListener('click',()=>{
    textTours.value = 'Istanbul'
    idTours.value = '5'
})
card6.addEventListener('click',()=>{
    textTours.value = 'San-Francisco'
    idTours.value = '6'
})