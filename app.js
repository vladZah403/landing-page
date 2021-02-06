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

    if(theme.getAttribute("href") == "main.css" ){
        white.style.color = "#FFDD1A"
        white.style.transition = "2s"
    }else if(theme.getAttribute("href") == "main-green.css"){
        white.style.color = "#45C452"
        white.style.transition = "2s"
    }else if(theme.getAttribute("href") == "main-red.css"){
        white.style.color = "#E23C3C"
        white.style.transition = "2s"
    }
   
}

document.getElementById("nam1").innerHTML=Math.round(Math.random()* 200);
document.getElementById("nam2").innerHTML=Math.round(Math.random()* 500);
document.getElementById("nam3").innerHTML=Math.round(Math.random()* 400);
document.getElementById("nam4").innerHTML=Math.round(Math.random()* 50);

let subject = document.getElementById("subject")

subject.onclick = function(){

    let theme =document.getElementById("theme")

    if(theme.getAttribute("href") == "main.css" ){
        theme.href = "main-green.css"
    } else if(theme.getAttribute("href") == "main-green.css"){
        theme.href = "main-red.css"
    }else if(theme.getAttribute("href") == "main-red.css") {
        theme.href = "main.css"
    }
    
   
}