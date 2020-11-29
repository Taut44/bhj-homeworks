const loader = document.getElementById("loader");
const items = document.getElementById("items");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		loader.classList.remove("loader_active");

		const answer = JSON.parse(xhr.responseText);
		const valutes = answer.response.Valute;

		for (let key in valutes) {
			let tabloid = ` <div class="item">
                            <div class="item__code">${valutes[key].CharCode}</div>
                            <div class="item__value">${valutes[key].Value}</div>
                            <div class="item__currency">руб.</div>
                            </div>
                            `;
			items.insertAdjacentHTML("beforeEnd", tabloid);
		};
	};
};