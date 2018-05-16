let book = document.getElementById("book");
let serviceHeader = document.getElementById("service-header");
let firstfield = document.getElementById("firstfield");
let destination = document.getElementById("destination");
let calendar = document.getElementById("calendar");
let people = document.getElementById("people");
let lastfield = document.getElementById("lastfield");

function revealTour() {
	book.style.display = "initial";
	serviceHeader.innerHTML = "Tour Packages";
}