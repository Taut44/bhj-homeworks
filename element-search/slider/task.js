
const left = document.querySelector(".slider__arrow_prev");
const right = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");
let count = 0;

right.onclick = function() {
	sliders[count].classList.remove("slider__item_active");
	++count;
    if (count === sliders.length) {
		count = 0;
	};
    sliders[count].classList.add("slider__item_active");
};

left.onclick = function() {
	sliders[count].classList.remove("slider__item_active");
	--count;
    if (count < 0) {
		count = sliders.length - 1;
	};
    sliders[count].classList.add("slider__item_active");
}