
 function money(el){
  let money1 =document.getElementById(`money${el}`)
  money1.classList.add("btn_modal_window")
  modal.style.display = "block";
   document.getElementById("modal_info").innerHTML = `
   <p class="modal_text">  Tour Design</p>
   `
   console.log(`${el}`);
} 

 

let modal = document.getElementById("my_modal");
 let span = document.getElementsByClassName("close_modal_window")[0];

 span.onclick = function () {
    modal.style.display = "none";
    money1.classList.remove("btn_modal_window");
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 
