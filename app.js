let stepbl1 = document.getElementById("stepbl1");
let stepbrdr1 = document.getElementById("stepbrdr1");

stepbl1.onmouseover = function(){
    stepbrdr1.style.borderBottom = "3px solid white"
}

stepbl1.onmouseout = function(){
    stepbrdr1.style.borderBottom = "3px solid black"
}


document.getElementById("nam1").innerHTML=Math.round(Math.random()* 500);
document.getElementById("nam2").innerHTML=Math.round(Math.random()* 500);
document.getElementById("nam3").innerHTML=Math.round(Math.random()* 500);
document.getElementById("nam4").innerHTML=Math.round(Math.random()* 500);

