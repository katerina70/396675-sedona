var link = document.querySelector(".booking-button");
		var popup = document.querySelector(".hotel-book-window");
		var html = document.documentElement;

		html.className = html.className.replace("no-js", "js");

		link.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup.classList.contains("hotel-book-window-close")) {
    popup.classList.add("hotel-book-window-show");
    popup.classList.remove("hotel-book-window-close");
  }
  else {
    popup.classList.add("hotel-book-window-close");
    popup.classList.remove("hotel-book-window-show");
  };
});