let show = document.querySelector('.show-more'),
    line = document.getElementById('line'),
    line2 = document.getElementById('line2');

show.onclick = function(){
    show.classList.add('button_on')
    if(!line.classList.contains('tur')){
        line.classList.add('tur');
  line.innerHTML =  `

  <div class="line-text" data-aos="fade-down-right">
  <h3>Travel to Italia</h3>
  <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat odit ad aut eveniet possimus quisquam magnam officia adipisci sint vero,
      suscipit asperiores, hic modi error eligendi. Nostrum minima dolorem, ex rem, quasi amet eius quod rerum numquam, fugit delectus recusandae.</P>
</div>
<div class="line-img" data-aos="zoom-in-up">
  <img src="style/img/Italia.jpg" alt="">
<div class="location location-spain">
  <i class="fas fa-map-marker-alt"></i>
  Italia
</div>
</div>

`
line2.innerHTML =`
<div class="line-img" data-aos="zoom-in-up">
        <img src="style/img/Glav.jpg" alt="">
    <div class="location location-greece">
        <i class="fas fa-map-marker-alt"></i>
        Madagascar
    </div>
    </div>
    <div class="line-text" data-aos="fade-down-left">
        <h3>Travel to Madagascar</h3>
        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat odit ad aut eveniet possimus quisquam magnam officia adipisci sint vero,
            suscipit asperiores, hic modi error eligendi. Nostrum minima dolorem, ex rem, quasi amet eius quod rerum numquam, fugit delectus recusandae.</P>
    </div>
`
    }else{
        line.classList.remove('tur')
        line.innerHTML = ''
        line2.innerHTML = ''
    }
}