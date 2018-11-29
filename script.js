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
	console.log("Safety Exit activated"); NormalExit();
	
	
}

function search(id){
	el = document.getElementById(id);
	//Open a new tab/window with the search.
	loc = "https://www.domesticshelters.org/search#?q=" + encodeURIComponent(el.value);
	console.log(location);
	w = window.open(loc);
}
function checksearch(e){
    e = e || window.event;
	switch(e.which || e.keyCode) {
		case 13:
			search("shelter-search");
			break;
		default:
			return;
	}
}
