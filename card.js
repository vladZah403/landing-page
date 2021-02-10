let all = document.getElementById('all');
let card = document.getElementById('card');

all.onclick = function card1(){
    if(!card.classList.contains('clicked')){
        card.classList.add('clicked');
        all.innerHTML = 'Hide All Tours'
    card.innerHTML =`
    <div class="card">
                    <img src="img/aten.jpg" alt="">
                    <div class="card-container">
                        <h3>Athens</h3>
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
                <img src="img/17.jpg" alt="">
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
                    <img src="img/Prague.jpg" alt="">
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
                    <img src="img/Sydney.jpg" alt="">
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
                    <img src="img/lisbon.jpg" alt="">
                    <div class="card-container">
                        <h3>Lisbon</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="card-info">
                            <div class="money"><a href="">$600</a></div>
                            <div class="info">
                                <span><i class="far fa-calendar-alt"></i> 7 day</span>
                                <span><i class="fas fa-route"></i> 1,300 km</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="card">
                    <img src="img/chikago (2).jpg" alt="">
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

