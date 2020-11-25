const toggleRotator = function() {
  const activeRotator = document.querySelector(".rotator__case_active");
  const nextElement = activeRotator.nextElementSibling;
  let dataSpeed = activeRotator.dataset.speed;

  if (nextElement) {
	  activeRotator.classList.remove("rotator__case_active");
	  nextElement.classList.add("rotator__case_active");
  } else {
	  const parentElement = activeRotator.parentElement;
	  parentElement.firstElementChild.classList.add("rotator__case_active");
	  parentElement.lastElementChild.classList.remove("rotator__case_active");
  };

  setTimeout(toggleRotator, dataSpeed);
}

const rotator = Array.from(document.querySelectorAll(".rotator__case"));
rotator.forEach((value) => {
	value.style.color = value.dataset.color;
})

toggleRotator();