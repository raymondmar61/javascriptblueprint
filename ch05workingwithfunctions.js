function quote(){
	document.write("You should always listen, but sometimes you should only listen.<br>");
	document.getElementById("writehere").innerHTML = "Here is what I write.";
}

function quoteonly(){
	document.write("You should always listen, but sometimes you should only listen.<br>");
}
quote();

function manners(item){
	document.write("Please pass the "+item+".<br>");
}
manners("peas");  //writes Please pass the peas.
manners("butter");
manners("salt");
manners("pepper");

function average(num1, num2, num3){
	return ((num1 + num2 + num3) / 3);
}
document.write(average(16,34,98));  //writes 49.333333333333336
document.write("<br>");
document.write(average(34,56,78));  //writes 56
document.write("<p>");

function average2(num1, num2, num3){
	ave = ((num1 + num2 + num3) / 3);
	document.write(ave);
	document.write("<p>");
}
average2(10,15,20);  //writes 15

var width = 3;
var height = 4;
var depth = 5;
function computarea(width, height, depth){
	area = width * height * depth;
	return area;
}
document.write("The area of the box with the dimensions: "+width+", "+height+", and "+depth+" equals "+computarea(width,height,depth)+".<br>");  //writes The area of the box with the dimensions: 3, 4, and 5 equals 60.

function computarea2(width, height, depth){
	area = width * height * depth;
	document.write("The area is " +area+ ".<br>");
}