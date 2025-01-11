
	let date = new Date();
	let options = {
		weekday: "long",  year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
	};
    
document.getElementById('date').innerHTML = date.toLocaleString("en-us", options);




document.getElementById('year').innerHTML = new Date().getFullYear(); // Year only

document.getElementById('birth').innerHTML = new Date().getFullYear(); // Birth Year only





