const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

fontSize.forEach(value => {
    value.addEventListener("click", () => {
        event.preventDefault();
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        value.classList.add("font-size_active");

        if (book.classList.contains("book_fs-small") || book.classList.contains("book_fs-big")) {
            book.classList.remove("book_fs-small", "book_fs-big");
        };

        if (value.classList.contains("font-size_small")) {
            book.classList.add("book_fs-small");
        } else if (value.classList.contains("font-size_big")) {
            book.classList.add("book_fs-big")
        };
    })
})

const colorText = Array.from(document.querySelectorAll(".book__control_color .color"));

colorText.forEach(value => {
	value.addEventListener("click", () => {
		event.preventDefault();
		document.querySelector(".book__control_color .color_active").classList.remove("color_active");
		value.classList.add("color_active");

		if (book.classList.contains("book_color-black") || book.classList.contains("book_color-gray") || book.classList.contains("book_color-whitesmoke")) {
			book.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke")
		};

		if (value.classList.contains("text_color_black")) {
            book.classList.add("book_color-black");
        } else if (value.classList.contains("text_color_gray")) {
            book.classList.add("book_color-gray")
        } else if (value.classList.contains("text_color_whitesmoke")) {
			book.classList.add("book_color-whitesmoke")
		};
	})
})

const bgColor = Array.from(document.querySelectorAll(".book__control_background .color"));

bgColor.forEach(value => {
	value.addEventListener("click", () => {
		event.preventDefault();
		document.querySelector(".book__control_background .color_active").classList.remove("color_active");
		value.classList.add("color_active");

		if (book.classList.contains("book_bg-black") || book.classList.contains("book_bg-gray") || book.classList.contains("book_bg-white")) {
			book.classList.remove("book_bg-black", "book_bg-gray", "book_bg-white")
		};

		if (value.classList.contains("bg_color_black")) {
            book.classList.add("book_bg-black");
        } else if (value.classList.contains("bg_color_gray")) {
            book.classList.add("book_bg-gray")
        } else if (value.classList.contains("bg_color_white")) {
			book.classList.add("book_bg-white")
		};
	})
})