  let money = document.getElementById("money"); 
   money.onclick = function (){
      money.classList.add("btn_modal_window")
      modal.style.display = "block";
      document.getElementById("my_modal").innerHTML = `
      <div class="modal_content">
                    <span class="close_modal_window">×</span>
                    <p class="modal_text">San-Francisco Tour Design</p>
                   
                        

                  </div>
      `
   }  

 let modal = document.getElementById("my_modal");
 let span = document.getElementsByClassName("close_modal_window")[0];

 span.onclick = function () {
    if(modal.style.display = "block"){
      modal.style.display = "none";
      document.getElementById("my_modal").innerHTML =``
    }
    
    money.classList.remove("btn_modal_window");
    
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("my_modal").innerHTML =''
    }
}

