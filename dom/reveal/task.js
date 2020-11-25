const reveal = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("scroll", () => {
    reveal.forEach(value => {
        const bottom = value.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;

        if (viewportHeight > bottom && bottom > 0) {
            value.classList.add("reveal_active");
        } else {
            value.classList.remove("reveal_active");
        };
    })
})