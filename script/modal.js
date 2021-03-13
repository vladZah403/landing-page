  let money = document.getElementById("money"); 
   money.onclick = function (){
      money.classList.add("btn_modal_window")
      modal.style.display = "block";
   }  

 let modal = document.getElementById("my_modal");
 let span = document.getElementsByClassName("close_modal_window")[0];

 span.onclick = function () {
    modal.style.display = "none";
    money.classList.remove("btn_modal_window");
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

