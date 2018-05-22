let menu = document.getElementById("menu");
let submitButton = document.getElementsByClassName("submit-button");

function menuButton() {	
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {menu.style.display = "block"}
}

function getWidth(x) {
	if (x.matches) {
		menu.style.display = "block";
	} else {menu.style.display = "none";}
}
//This makes the button spin
function popup1() {
    event.preventDefault();
    submitButton[0].classList.toggle("loading");
    setTimeout(() => {submitButton[0].classList.toggle("loading");
                      submitButton[0].classList.toggle("success");
                     }, 1500);
    setTimeout(() => {document.getElementById("form").submit();
                      alert("Success!");   
                     }, 2500);
}

let widthCheck = window.matchMedia("(min-width: 700px)"); 
getWidth(widthCheck);
widthCheck.addListener(getWidth);