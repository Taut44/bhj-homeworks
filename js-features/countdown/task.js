let timer = document.getElementById('timer');
let date = timer.textContent.substr(6, 8) ? timer.textContent.substr(6, 8) : timer.textContent.substr(0, 2);

function DecreaseTimer() {
	timer.textContent =  new Date(0, 0, 0, 0, 0, -- date).toTimeString().substr(0, 8);
	if (date === 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(interval);
		location.assign("https://central.github.com/deployments/desktop/desktop/latest/darwin");
	};	
};

let interval = setInterval(DecreaseTimer, 1000);