document.writeln("Hello");
document.writeln("and welcome to my webpage.  It appears .writeln() doesn't work.  Supposed to print two separate lines.");

color = "";
if (color == "#FF0000") {
	document.bgColor = "#FF0000"; //red
} else if (color == "Orange") {
	document.bgColor = "Orange";
} else {
	document.bgColor = "White";
}
document.fgColor = "black";
document.linkColor = "red";
document.alinkColor = "brown";
document.vlinkColor = "purple";

name="Raymond Mar"
document.title = "Webpage title goes here " +name;

document.write("Here is the URL of the current document "+document.URL)
document.write("Here is the URL referring webpage for which depending on browser configuration it may show nothing " +document.referrer)

function windowopen(linkurl) {
	window.open(linkurl, "name of new window here", "width=800, height=600, toolbar=yes, status=no, resizeable=yes");
}

// onload = "window.status='Set the text displayed in the status bar.'";