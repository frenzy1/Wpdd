let book = document.getElementById("book");
let serviceHeader = document.getElementById("service-header");
let firstfield = document.getElementById("firstfield");
let destination = document.getElementById("destination");
let calendar = document.getElementById("calendar");
let people = document.getElementById("people");
let lastfield = document.getElementById("lastfield");
let submitButton = document.getElementById("submit-button");

function revealTour() {
	book.style.display = "initial";
	serviceHeader.innerHTML = "Tour Packages";
}

function popup1() {
    event.preventDefault();
    submitButton.classList.toggle("loading");
    setTimeout(() => {submitButton.classList.toggle("loading");
                      submitButton.classList.toggle("success");
                     }, 1500);
    setTimeout(() => {document.getElementById("form").submit();
                      alert("BANK DETAIL NOW!!!");   
                     }, 2000);
}
