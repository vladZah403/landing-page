let all = document.getElementById('all');
let card = document.getElementById('card');

all.onclick = function(){
    card.innerHTML =`
    <div class="card">
                    <img src="img/San-Francisco.jpg" alt="">
                    <div class="card-container">
                        <h3>San-Francisco</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="card-info">
                            <div class="money">$1,000</div>
                            <div class="info">
                                <span><i class="far fa-calendar-alt"></i> 7 day</span>
                                <span><i class="fas fa-route"></i> 4,600 km</span>
                            </div>

                        </div>
                    </div>
                </div>
    `
}
