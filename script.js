document.onkeydown = function(e) {
    e = e || window.event;
	
	switch(e.which || e.keyCode) {
		case 27:
			NormalExit();
			break;
		default:
			return;
	}
}

var NormalExitSites = [
	"https://weather.com/",
	"https://www.google.com",
	"https://www.google.com/search?q=current+weather"
];
var SafetyExitSites = [];

function NormalExit(){
	console.log("Normal Exit Activated");
	r = Math.floor(Math.random()*NormalExitSites.length);
	window.location = NormalExitSites[r];
}
function SafetyExit(){
	console.log("Safety Exit activated");
}


