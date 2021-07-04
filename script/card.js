let all = document.getElementById('all');
let card = document.getElementById('card');
let cards = document.getElementById('cards')


for(let i = 0; i<6; i++){
    cards.innerHTML +=
`
<div class="card2">
<div class="card-photos">
<img class = "card-img" src="style/img/ital.jpg" alt="">
</div >
<div class="like-info">
 <span class="nam-like" ><i class=" far fa-heart   " onclick="like(${i})" id="l${i}"></i><span id="nam-like${i}"> </span></span>
 </div>
</div>

` 

}




all.onclick = function card1(){
   
    if(!card.classList.contains('clicked')){
        card.classList.add('clicked');
        all.innerHTML = 'Hide All Tours'
    card.innerHTML =`
    <div class="card" >
                    <img  class="card-img" src="style/img/aten.jpg" alt="">
                    <div class="card-container">
                        <h3 >Athens</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="card-info">
                            <div class="money"><a href="">$800</a></div>
                            <div class="info">
                                <span><i class="far fa-calendar-alt"></i> 5 day</span>
                                <span><i class="fas fa-route"></i> 2,200 km</span>
                            </div>

                        </div>
                    </div>
                </div>   
                <div class="card">
                <img class="card-img" src="style/img/17.jpg" alt="">
                <div class="card-container">
                    <h3>Vilnius</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="card-info">
                        <div class="money"><a href="">$600</a></div>
                        <div class="info">
                            <span><i class="far fa-calendar-alt"></i> 6 day</span>
                            <span><i class="fas fa-route"></i> 560 km</span>
                        </div>
                
                    </div>
                </div>
                </div>
                
                <div class="card">
                    <img class="card-img" src="style/img/Prague.jpg" alt="">
                    <div class="card-container">
                        <h3>Prague</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="card-info">
                            <div class="money"><a href="">$250</a></div>
                            <div class="info">
                                <span><i class="far fa-calendar-alt"></i> 4 day</span>
                                <span><i class="fas fa-route"></i> 400 km</span>
                            </div>
                
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <img class="card-img" src="style/img/Sydney.jpg" alt="">
                    <div class="card-container">
                        <h3>Sydney</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="card-info">
                            <div class="money"><a href="">$1,700</a></div>
                            <div class="info">
                                <span><i class="far fa-calendar-alt"></i> 6 day</span>
                                <span><i class="fas fa-route"></i> 5,700 km</span>
                            </div>
                
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <img class="card-img" src="style/img/lisbon.jpg" alt="">
                    <div class="card-container">
                        <h3>Lisbon</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="card-info">
                            <div class="money"><a href="">$600</a></div>
                            <div class="info">
                                <span><i class="far fa-calendar-alt"></i> 7 day</span>
                                <span><i class="fas fa-route"></i> 600 km</span>
                            </div>
                
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <img class="card-img" src="style/img/chikago (2).jpg" alt="">
                    <div class="card-container">
                        <h3>Chicago</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="card-info">
                            <div class="money"><a href="">$2,300</a></div>
                            <div class="info">
                                <span><i class="far fa-calendar-alt"></i> 5 day</span>
                                <span><i class="fas fa-route"></i> 3,200 km</span>
                            </div>
                
                        </div>
                    </div>
                </div> 
    `
    }else{
        card.classList.remove('clicked')
        card.innerHTML = ''
        all.innerHTML = 'View All Tours'
    }
    
}



//  for(let key in cardJson){
//         const el = document.getElementById(city1)
//         if(el){
//             el.innerHTML =(cardJson(key))
//         }
//     }

// let cardJson = [
//     {
//         city: "Athens",
//         img: "img/aten.jpg",
//         price: 800,
//         day: 5,
//         distance: 2.200
//     },
    // {
    //     city: "Vilnius",
    //     img: "img/17.jpg",
    //     price: 600,
    //     day: 6,
    //     distance: 560
    // },
    // {
    //     "city": "Prague",
    //     "img": "img/Prague.jpg",
    //     "price": 250,
    //     "day": 4,
    //     "distance": 400
    // },
    // {
    //     "city": "Sydney",
    //     "img": "img/Sydney.jpg",
    //     "price": 1.700,
    //     "day": 6,
    //     "distance": 5.700
    // },
    // {
    //     "city": "Lisbon",
    //     "img": "img/lisbon.jpg",
    //     "price": 600,
    //     "day": 7,
    //     "distance": 600
    // },
    // {
    //     "city": "Chicago",
    //     "img": "img/chikago (2).jpg",
    //     "price": 2.300,
    //     "day": 5,
    //     "distance": 3.200
    // }
    // ]

