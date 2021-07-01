let stepbl1 = document.getElementById("stepbl1");
let stepbrdr1 = document.getElementById("stepbrdr1");

let stepbl2 = document.getElementById("stepbl2");
let stepbrdr2 = document.getElementById("stepbrdr2");

let stepbl3 = document.getElementById("stepbl3");
let stepbrdr3 = document.getElementById("stepbrdr3");



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

let subject1 = document.getElementById("subject");
let white = document.getElementById("white");

subject1.onmouseover = function(){
    white.style.color = "#fff"
}

subject1.onmouseout = function(){

    if(theme.getAttribute("href") == "style/main.css" ){
        white.style.color = "#FFDD1A"
        white.style.transition = "3s"
    }else if(theme.getAttribute("href") == "style/main-green.css"){
        white.style.color = "#45C452"
        white.style.transition = "3s"
        color.style.transition = '2s'
    }else if(theme.getAttribute("href") == "style/main-red.css"){
        white.style.color = "#E23C3C"
        white.style.transition = "3s"
        color.style.transition = '2s'
    }
   
}

document.getElementById("nam1").innerHTML=Math.round(Math.random()* 200);
document.getElementById("nam2").innerHTML=Math.round(Math.random()* 500);
document.getElementById("nam3").innerHTML=Math.round(Math.random()* 400);
document.getElementById("nam4").innerHTML=Math.round(Math.random()* 50);

let subject = document.getElementById("subject")

subject.onclick = function(){

    let theme =document.getElementById("theme")
    let color =document.getElementById('color')

    if(theme.getAttribute("href") == "style/main.css" ){
        theme.href = "style/main-green.css"
        color.innerHTML = ' Green'
    } else if(theme.getAttribute("href") == "style/main-green.css"){
        theme.href = "style/main-red.css"
        color.innerHTML = ' Red'
    }else if(theme.getAttribute("href") == "style/main-red.css") {
        theme.href = "style/main.css"
        color.innerHTML = ' Yellow '
    }
    
   
}


let a = Math.round(Math.random()* 200);
let b = Math.round(Math.random()* 300);
let c = Math.round(Math.random()* 100);
like1 = document.getElementById('like1')
like1.onclick = function () {
    if(!like1.classList.contains('fas')){
        like1.classList.add('fas');
        like1.classList.remove('far');
        like1.style.color = 'red'
        like1.style.transition = '1s'
    document.getElementById('nam-like1').innerHTML = `${a+1}`
    
    }else{
        like1.classList.remove('fas');
        like1.classList.add('far')
        like1.style.color = "black";
        like1.style.transition = '1s'
        document.getElementById('nam-like1').innerHTML = `${a}`
    }
    
    }

like2 = document.getElementById('like2')
like2.onclick = function () {
    if(!like2.classList.contains('fas')){
        like2.classList.add('fas');
        like2.classList.remove('far');
        like2.style.color = 'red'
        like2.style.transition = '1s'
        document.getElementById('nam-like2').innerHTML = `${b+1}`
    }else{
        like2.classList.remove('fas');
        like2.classList.add('far')
        like2.style.color = "black";
        like2.style.transition = '1s'
        document.getElementById('nam-like2').innerHTML = `${b}`
    }
    
    }

like3 = document.getElementById('like3')
like3.onclick = function () {
if(!like3.classList.contains('fas')){
    like3.classList.add('fas');
    like3.classList.remove('far');
    like3.style.color = 'red'
    like3.style.transition = '1s'
    document.getElementById('nam-like3').innerHTML = `${c+1}`
}else{
    like3.classList.remove('fas');
    like3.classList.add('far')
    like3.style.color = "black";
    like3.style.transition = '1s'
    document.getElementById('nam-like3').innerHTML = `${c}`
}
}
let e = Math.round(Math.random()* 400);
let f = Math.round(Math.random()* 260);
let g = Math.round(Math.random()* 80);
like4 = document.getElementById('like4')
like4.onclick = function () {
    if(!like4.classList.contains('fas')){
        like4.classList.add('fas');
        like4.classList.remove('far');
        like4.style.color = 'red'
        like4.style.transition = '1s'
    document.getElementById('nam-like4').innerHTML = `${e+1}`
    
    }else{
        like4.classList.remove('fas');
        like4.classList.add('far')
        like4.style.color = "black";
        like4.style.transition = '1s'
        document.getElementById('nam-like4').innerHTML = `${e}`
    }
    
    }

like5 = document.getElementById('like5')
like5.onclick = function () {
    if(!like5.classList.contains('fas')){
        like5.classList.add('fas');
        like5.classList.remove('far');
        like5.style.color = 'red'
        like5.style.transition = '1s'
        document.getElementById('nam-like5').innerHTML = `${f+1}`
    }else{
        like5.classList.remove('fas');
        like5.classList.add('far')
        like5.style.color = "black";
        like5.style.transition = '1s'
        document.getElementById('nam-like5').innerHTML = `${f}`
    }
    
    }

like6 = document.getElementById('like6')
like6.onclick = function () {
if(!like6.classList.contains('fas')){
    like6.classList.add('fas');
    like6.classList.remove('far');
    like6.style.color = 'red'
    like6.style.transition = '1s'
    document.getElementById('nam-like6').innerHTML = `${g+1}`
}else{
    like6.classList.remove('fas');
    like6.classList.add('far')
    like6.style.color = "black";
    like6.style.transition = '1s'
    document.getElementById('nam-like6').innerHTML = `${g}`
}

}




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