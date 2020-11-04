let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");
let modal = document.querySelectorAll(".modal");
let modalClose = document.querySelectorAll(".modal__close");
let buttonDanger = document.querySelector(".btn_danger");
modalMain.classList.add("modal_active");

for (let i = 0; i < modalClose.length; i++) {
	modalClose[i].onclick = function () {
		this.closest(".modal").remove("modal_active");
	};
};

buttonDanger.onclick = function () {
	modalMain.classList.remove("modal_active");
	modalSuccess.classList.add("modal_active");
};