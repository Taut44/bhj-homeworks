let holes = document.getElementsByClassName("hole");
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let i = 0; i < holes.length; i++) {
	holes[i].onclick = function () {        
    	if (this.classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        };
        if (dead.textContent == 10) {
            alert('Вы победили!');
            reset();
        };
        if (lost.textContent == 5) {
            alert('Вы проиграли!');
            reset();
        };
    }    ;
};

function reset() {
    dead.innerText = 0;
    lost.innerText = 0;
};
