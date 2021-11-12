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