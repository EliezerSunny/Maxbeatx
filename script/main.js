function myFunction() {
    // body...
var date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = day + "-" + month + "-" + year;

if (month == "12" || month == "1") {
    // LOGO
var img = document.createElement("img");
img.src = "img/MaxBeatx2.png";
var src = document.getElementById("logo");
src.appendChild(img);

// LOGO END
} else {
    // LOGO
var img = document.createElement("img");
img.src = "img/MaxBeatx.png";
var src = document.getElementById("logo");
src.appendChild(img);

// LOGO END
}


if (month == "12" || month == "1") {
// LOGO FOOTER
var img = document.createElement("img");
img.src = "img/MaxBeatx2.png";
var src = document.getElementById("logo2");
src.appendChild(img);

// LOGO FOOTER END
} else {
    // LOGO FOOTER
var img = document.createElement("img");
img.src = "img/MaxBeatx.png";
var src = document.getElementById("logo2");
src.appendChild(img);

// LOGO FOOTER END
}





if (month == "12" || month == "1") {
    document.getElementById("greetings").innerHTML = "Merry Christmas & Happy New Year!!! &#x1F389;";
} else if (currentDate == "09-09-2023") {
    document.getElementById("greetings").innerHTML = "Happy Birthday, Eliazer!!! &#127881;&#x1F389;";
}

}

myFunction();











function openNav() {
		// body...
		document.getElementById("mySidenav").style.width = "200px";
	}

	function closeNav() {
		// body...
		document.getElementById("mySidenav").style.width = "0";
	}

	var open = document.querySelector(".nav-menu");

	open.addEventListener("click", function() {
		// body...
		document.querySelector("body").classList.toggle("active");
	})