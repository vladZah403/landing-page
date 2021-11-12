let stepbl1 = document.getElementById("stepbl1");
let stepbrdr1 = document.getElementById("stepbrdr1");

let stepbl2 = document.getElementById("stepbl2");
let stepbrdr2 = document.getElementById("stepbrdr2");

let stepbl3 = document.getElementById("stepbl3");
let stepbrdr3 = document.getElementById("stepbrdr3");
let menuLogo = document.querySelector('.logo') 



stepbl1.onmouseover = function(){
    stepbrdr1.style.borderBottom = "3px solid white"
}

stepbl1.onmouseout = function(){
    stepbrdr1.style.borderBottom = "3px solid black"
}

stepbl2.onmouseover = function(){
    stepbrdr2.style.borderBottom = "3px solid white"
}

stepbl2.onmouseout = function(){
    stepbrdr2.style.borderBottom = "3px solid black"
}

stepbl3.onmouseover = function(){
    stepbrdr3.style.borderBottom = "3px solid white"
}

stepbl3.onmouseout = function(){
    stepbrdr3.style.borderBottom = "3px solid black"
}


menuLogo.addEventListener('click', ()=>{
    Main.style.display = ''
    mainRegistr.style.display = 'none'

})


document.getElementById("nam1").innerHTML=Math.round(Math.random()* 200);
document.getElementById("nam2").innerHTML=Math.round(Math.random()* 500);
document.getElementById("nam3").innerHTML=Math.round(Math.random()* 400);
document.getElementById("nam4").innerHTML=Math.round(Math.random()* 50);



let a = Math.floor((Math.random()*400)+1);
    

function like(el) {
   
    if(!document.getElementById(`l${el}`).classList.contains('fas')){
        document.getElementById(`l${el}`).classList.add('fas');
        document.getElementById(`l${el}`).classList.remove('far');
        document.getElementById(`l${el}`).style.color = 'red'
        document.getElementById(`l${el}`).style.transition = '1s'
    document.getElementById(`nam-like${el}`).innerHTML = `${a+1}`
    
    }else{
        document.getElementById(`l${el}`).classList.remove('fas');
        document.getElementById(`l${el}`).classList.add('far')
        document.getElementById(`l${el}`).style.color = "black";
        document.getElementById(`l${el}`).style.transition = '1s'
        document.getElementById(`nam-like${el}`).innerHTML = `${a}`
    }
    
    }


// function Search (){
//     let imput = document.getElementById('search');
//     let filter = imput.value.toUpperCase();
//     let cards = document.getElementById('cards2');
//     let card = cards.getElementsByClassName('card');

//     for(let i = 0; i< card.length; i++){
//         let a = card.getElementsByClassName('h3')[0];
//         if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
//             card[i].style.display = ''
//         }else{
//             card[i].style.display = 'none'
//         }
//     }
// }

// let share1 = document.getElementById("share");
// let twit = document.getElementById("twit");
// let face = document.getElementById("face");
// let inst = document.getElementById("inst");

// share1.onmouseover = function(){
//     twit.style.position = "fixed"
//     face.style.position = "fixed"
//     inst.style.position = "fixed"
// }

// let map;

//     DG.then(function () {
//         map = DG.map('map', {
//             center: [53.55, 9.99],
//             zoom: 8
//         });

//         DG.marker([53.55, 9.99]).addTo(map);
//     });