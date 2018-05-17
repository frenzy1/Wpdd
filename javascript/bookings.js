let book = document.getElementById("book");
let serviceHeader = document.getElementById("service-header");
let firstfield = document.getElementById("firstfield");
let firstfieldIcon = document.getElementById("firstfield-icon");
let destination = document.getElementById("destination");
let destinationField2 = document.getElementById("destination-2");
let calendar = document.getElementById("calendar");
let people = document.getElementById("people");
let lastfield = document.getElementById("lastfield");
let lastfieldIcon = document.getElementById("lastfield-icon");
let lastfieldSuffix = document.getElementById("input-suffix");
let submitButton = document.getElementById("submit-button");

function revealTour() {
	if (book.style.display === "none") {
		book.style.display = "initial";
		serviceHeader.innerHTML = "Tour Packages";
		destinationField2.style.display = "initial";
		firstfield.style.display = "none";
		lastfield.style.display = "none";
	} else {
		let c = confirm("All information will be lost!");
		if (c === true) {
			book.style.display = "none";
			document.getElementById("form").reset();
		} 
	}
}

function revealTransports() {
	if (book.style.display === "none") {
		book.style.display = "initial";
		serviceHeader.innerHTML = "Transports";
		firstfieldIcon.setAttribute("src", "images/welcome-icon/transportation.png");
		lastfield.style.display = "none";
	} else {
		let c = confirm("All information will be lost!");
		if (c === true) {
			book.style.display = "none";
			document.getElementById("form").reset();
		} 
	}
}

function revealHotels() {
	if (book.style.display === "none") {
		book.style.display = "initial";
		serviceHeader.innerHTML = "Bendigo Hotel";
		firstfieldIcon.setAttribute("src", "images/welcome-icon/hotel.png");
		lastfieldIcon.setAttribute("src", "images/bookings/room.png");
		lastfieldSuffix.innerHTML = "rooms";
	} else {
		let c = confirm("All information will be lost!");
		if (c === true) {
			book.style.display = "none";
			document.getElementById("form").reset();
		} 
	}
}

function revealRestaurants() {
	if (book.style.display === "none") {
		book.style.display = "initial";
		serviceHeader.innerHTML = "Dining";
		firstfieldIcon.setAttribute("src", "images/bookings/restaurant-building.png");
		lastfieldIcon.setAttribute("src", "images/bookings/table.png");
		lastfieldSuffix.innerHTML = "tables";
	} else {
		let c = confirm("All information will be lost!");
		if (c === true) {
			book.style.display = "none";
			document.getElementById("form").reset();
		} 
	}
}

function revealFlights() {
	if (book.style.display === "none") {
		book.style.display = "initial";
		serviceHeader.innerHTML = "Flights";
		firstfield.style.display = "none";
		lastfield.style.display = "none";
	} else {
		let c = confirm("All information will be lost!");
		if (c === true) {
			book.style.display = "none";
			document.getElementById("form").reset();
		} 
	}
}

function revealCamp() {
	if (book.style.display === "none") {
		book.style.display = "initial";
		serviceHeader.innerHTML = "Camp Sites";
		firstfield.style.display = "none";
		destinationField2.style.display = "none";
		lastfieldIcon.setAttribute("src", "images/welcome-icon/camp.png");
		lastfieldSuffix.innerHTML = "tents";
	} else {
		let c = confirm("All information will be lost!");
		if (c === true) {
			book.style.display = "none";
			document.getElementById("form").reset();
		} 
	}
}

function popup1() {
    event.preventDefault();
    submitButton.classList.toggle("loading");
    setTimeout(() => {submitButton.classList.toggle("loading");
                      submitButton.classList.toggle("success");
                     }, 1500);
    setTimeout(() => {document.getElementById("form").submit();
                      alert("BANK DETAIL NOW!!!");   
                     }, 2500);
}
