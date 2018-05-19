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
	if (book.getAttribute("class") != "tour") {
        if (book.getAttribute("class") == "defa") {
            serviceHeader.innerHTML = "Tour Packages";
			book.classList.toggle("tour");
            book.classList.toggle("defa");
            book.classList.toggle("transports", false);
            book.classList.toggle("hotels", false);
            book.classList.toggle("dining", false);
            book.classList.toggle("flights", false);
            book.classList.toggle("camping", false);
        } else {
            let c = confirm("All information will be lost!");
            if (c === true) {
                serviceHeader.innerHTML = "Tour Packages";
                book.classList.toggle("defa");
                book.classList.toggle("tour");
                book.classList.toggle("transports", false);
                book.classList.toggle("hotels", false);
                book.classList.toggle("dining", false);
                book.classList.toggle("flights", false);
                book.classList.toggle("camping", false);
                document.getElementById("form").reset();
            }
        }
    } else {
        let c = confirm("All information will be lost!");
        if (c === true) {
            book.classList.toggle("defa");
            book.classList.toggle("tour");
            document.getElementById("form").reset();
        }
    }
}

function revealTransports() {
	if (book.getAttribute("class") != "transports") {
		if (book.getAttribute("class") == "defa") {
            serviceHeader.innerHTML = "Transports";
            firstfieldIcon.setAttribute("src", "images/welcome-icon/transportation.png");
            book.classList.toggle("defa");
            book.classList.toggle("tour", false);
            book.classList.toggle("transports");
            book.classList.toggle("hotels", false);
            book.classList.toggle("dining", false);
            book.classList.toggle("flights", false);
            book.classList.toggle("camping", false);
	    } else {
            let c = confirm("All information will be lost!");
            if (c === true) {
                serviceHeader.innerHTML = "Transports";
                firstfieldIcon.setAttribute("src", "images/welcome-icon/transportation.png");
                book.classList.toggle("tour", false);
                book.classList.toggle("transports");
                book.classList.toggle("hotels", false);
                book.classList.toggle("dining", false);
                book.classList.toggle("flights", false);
                book.classList.toggle("camping", false);
                document.getElementById("form").reset();
		  } 
	   } 
    } else {
        let c = confirm("All information will be lost!");
        if (c === true) {
            book.classList.toggle("defa");
            book.classList.toggle("transports");
            document.getElementById("form").reset();
        }
    }
}

function revealHotels() {
	if (book.getAttribute("class") != "hotels") {
        if (book.getAttribute("class") == "defa"){    
            serviceHeader.innerHTML = "Bendigo Hotel";
            firstfieldIcon.setAttribute("src", "images/welcome-icon/hotel.png");
            lastfieldIcon.setAttribute("src", "images/bookings/room.png");
            lastfieldSuffix.innerHTML = "rooms";
            book.classList.toggle("defa");
			book.classList.toggle("tour", false);
            book.classList.toggle("transports", false);
            book.classList.toggle("hotels");
            book.classList.toggle("dining", false);
            book.classList.toggle("flights", false);
            book.classList.toggle("camping", false);
        } else {
            let c = confirm("All information will be lost!");
            if (c === true) {    
                serviceHeader.innerHTML = "Bendigo Hotel";
                firstfieldIcon.setAttribute("src", "images/welcome-icon/hotel.png");
                lastfieldIcon.setAttribute("src", "images/bookings/room.png");
                lastfieldSuffix.innerHTML = "rooms";
                book.classList.toggle("tour", false);
                book.classList.toggle("transports", false);
                book.classList.toggle("hotels");
                book.classList.toggle("dining", false);
                book.classList.toggle("flights", false);
                book.classList.toggle("camping", false);
                document.getElementById("form").reset();
            }
        }
	} else {
        let c = confirm("All information will be lost!");
        if (c === true) {
            book.classList.toggle("defa");
            book.classList.toggle("hotels");
            document.getElementById("form").reset();
        }
    }
}

function revealRestaurants() {
    if (book.getAttribute("class") != "dining") {
        if (book.getAttribute("class") == "defa") {
            serviceHeader.innerHTML = "Dining";
            firstfieldIcon.setAttribute("src", "images/bookings/restaurant-building.png");
            lastfieldIcon.setAttribute("src", "images/bookings/table.png");
            lastfieldSuffix.innerHTML = "tables";
            book.classList.toggle("defa");
            book.classList.toggle("tour", false);
            book.classList.toggle("transports", false);
            book.classList.toggle("hotels", false);
            book.classList.toggle("dining");
            book.classList.toggle("flights", false);
            book.classList.toggle("camping", false);
        } else {
            let c = confirm("All information will be lost!");
            if (c === true) {
                serviceHeader.innerHTML = "Dining";
                firstfieldIcon.setAttribute("src", "images/bookings/restaurant-building.png");
                lastfieldIcon.setAttribute("src", "images/bookings/table.png");
                lastfieldSuffix.innerHTML = "tables";
                book.classList.toggle("tour", false);
                book.classList.toggle("transports", false);
                book.classList.toggle("hotels", false);
                book.classList.toggle("dining");
                book.classList.toggle("flights", false);
                book.classList.toggle("camping", false);
                document.getElementById("form").reset();
            } 
        }
    } else {
        let c = confirm("All information will be lost!");
        if (c === true) {
            book.classList.toggle("defa");
            book.classList.toggle("dining");
            document.getElementById("form").reset();
        }
    }
}

function revealFlights() {
	if (book.getAttribute("class") != "flights") {
        if (book.getAttribute("class") == "defa") {
            serviceHeader.innerHTML = "Flights";
            book.classList.toggle("defa");
			book.classList.toggle("tour", false);
            book.classList.toggle("transports", false);
            book.classList.toggle("hotels", false);
            book.classList.toggle("dining", false);
            book.classList.toggle("flights");
            book.classList.toggle("camping", false);
        }
        else {
            let c = confirm("All information will be lost!");
            if (c === true) {
                serviceHeader.innerHTML = "Flights";
                book.classList.toggle("tour", false);
                book.classList.toggle("transports", false);
                book.classList.toggle("hotels", false);
                book.classList.toggle("dining", false);
                book.classList.toggle("flights");
                book.classList.toggle("camping", false);
                document.getElementById("form").reset();
            }
        }
	} else {
        let c = confirm("All information will be lost!");
        if (c === true) {
            book.classList.toggle("defa");
            book.classList.toggle("flights");
            document.getElementById("form").reset();
        }
    }
}

function revealCamp() {
	if (book.getAttribute("class") != "camping") {
        if (book.getAttribute("class") == "defa") {
            serviceHeader.innerHTML = "Camp Sites";
            lastfieldIcon.setAttribute("src", "images/welcome-icon/camp.png");
            lastfieldSuffix.innerHTML = "tents";
            book.classList.toggle("defa");
			book.classList.toggle("tour", false);
            book.classList.toggle("transports", false);
            book.classList.toggle("hotels", false);
            book.classList.toggle("dining", false);
            book.classList.toggle("flights", false);
            book.classList.toggle("camping");
        } else {
            let c = confirm("All information will be lost!");
            if (c === true) {
                serviceHeader.innerHTML = "Camp Sites";
                lastfieldIcon.setAttribute("src", "images/welcome-icon/camp.png");
                lastfieldSuffix.innerHTML = "tents";
                book.classList.toggle("tour", false);
                book.classList.toggle("transports", false);
                book.classList.toggle("hotels", false);
                book.classList.toggle("dining", false);
                book.classList.toggle("flights", false);
                book.classList.toggle("camping");
                document.getElementById("form").reset();
            } 
	    }
    } else {
        let c = confirm("All information will be lost!");
        if (c === true) {
            book.classList.toggle("defa");
            book.classList.toggle("camping");
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
