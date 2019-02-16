alert("Desktop browser view is recommended");

let pipe = document.getElementById("pipe");

setInterval(function() {
	if (pipe.textContent == "|") {
		pipe.textContent = "";
	} else {
		pipe.textContent = "|";
	}
}, 600);