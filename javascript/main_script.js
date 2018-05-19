let menu = document.getElementById("menu");

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


let widthCheck = window.matchMedia("(min-width: 700px)"); 
getWidth(widthCheck);
widthCheck.addListener(getWidth);