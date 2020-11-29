let xhr = new XMLHttpRequest();
const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers')

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', function () {
	if (this.readyState === 4 && this.status === 200) {
		console.log(xhr.responseText);
		let response = JSON.parse(xhr.responseText);
		title.append(response.data.title);
        response.data.answers.forEach(element => {
            let btn = document.createElement("button");
            btn.className = "poll__answer";
            btn.append(element);
            answers.appendChild(btn);   
		});
		
		const answer = Array.from(document.querySelectorAll(".poll__answer"));
        answer.forEach(value => {
            value.addEventListener("click", () => {
				alert("Спасибо, ваш голос засчитан!");
			});
		});
	};
});
