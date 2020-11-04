let clickerCounter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
function counterSizeChanger() {
	if(cookie.width === 200){
		cookie.width = 300;
	} else {
		cookie.width = 200;
	};
	++clickerCounter.innerText;
};


cookie.onclick = counterSizeChanger;