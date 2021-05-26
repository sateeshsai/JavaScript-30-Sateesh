if (hourHand.style.transform == rotate(360deg) || mitesDegrees == 360)

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondHand = document.querySelector(".second-hand");
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	minutesDegrees = (minutes / 60) * 360 + 90;
	minuteHand = document.querySelector(".minute-hand");
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	hoursDegrees = (hours / 12) * 360 + 90;
	hourHand = document.querySelector(".hour-hand");
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
