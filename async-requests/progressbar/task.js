const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
	xhr.upload.onprogress = function (load) {
		progress.value = load.loaded;
		progress.max = load.total;
	};
	xhr.upload.onloadend = function () {
		alert("Загрузка завершена!")
	};

	xhr.send(formData);
});