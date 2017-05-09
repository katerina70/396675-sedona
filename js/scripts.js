var link = document.querySelector(".booking-button");
var popup = document.querySelector(".hotel-book-window");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.toggle("hotel-book-window-open");

});
