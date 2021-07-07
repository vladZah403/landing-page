let all = document.getElementById('all');
let card = document.getElementById('card');
let cards = document.getElementById('cards')


for(let i = 0; i<6; i++){
    let name = ['Beast','Cowboy','Hawk','Phantom ','Shooter', 'Gutsy_heart' ];
    let img = ['ital.jpg','chikag.jpg','iland.jpg','chikag.jpg','iland.jpg','ital.jpg']
    cards.innerHTML +=
`
<div class="card2">
<i class="far fa-user-circle ava"> ${name[i]}</i>
<div class="card-photos">
<img  src="style/img/${img[i]}" alt="">
</div >
<div class="like-info">
<div class="nam-like" >
    <i class=" far fa-heart   " onclick="like(${i})" id="l${i}"></i>
    <span id="nam-like${i}"> </span>
    
</div>
<i class="fas fa-share-alt nam-like" ></i>
 </div>
</div>

` 
}

 

all.onclick = function card1(){
   
    if(!card.classList.contains('clicked')){
        card.classList.add('clicked');
        all.innerHTML = 'Hide All Tours' 
    for(let i =0; i<6; i++){
        let city = ["Athens","Vilnius","Prague","Sydney","Lisbon","Chicago"]
        let img =    ["aten.jpg","17.jpg","Prague.jpg","Sydney.jpg","lisbon.jpg","chikago (2).jpg"]
        let price =    ['800', '600', '250', '1.700', '600', '2,300']
        let day =    [5, 6, 4, 6, 7, 5]
        let distance =    ['2.200', '560', '400', '5.700', '600', '3.200']
    card.innerHTML +=`
    <div class="card" >
                    <img  class="card-img" src="style/img/${img[i]}" alt="">
                    <div class="card-container">
                        <h3 >${city[i]}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="card-info">
                            <div class="money" id="money${i}" onclick="money(${i})" ><a href="" onclick="return false;">$${price[i]}</a></div>
                            <div class="info">
                                <span><i class="far fa-calendar-alt"></i> ${day[i]} day</span>
                                <span><i class="fas fa-route"></i> ${distance[i]} km</span>
                            </div>

                        </div>
                    </div>
                </div>` 
    
    }          
    }else{
        card.classList.remove('clicked')
        card.innerHTML = ''
        all.innerHTML = 'View All Tours'
    }
        }
    
 