var answer1 = 9;
var answer2 = 2.5;
var answer3 = "Milky Way";
var answer4 = true;
document.write(answer1+ " is variable type " +typeof(answer1)+".<br>");
document.write(answer2+ " is variable type " +typeof(answer2)+".<br>");
document.write(answer3+ " is variable type " +typeof(answer3)+".<br>");
document.write(answer4+ " is variable type " +typeof(answer4)+".<br>");
function testfunction() {
	document.write("Yes");
}
document.write("testfunction() is type " +typeof(testfunction)+".<br>");  //writes testfunction() is type function.

var string1 = "1.55";
document.write(parseInt(string1));  //writes 1
document.write("<br>");
document.write(parseFloat(string1));  //writes 1.55
document.write("<br>");
document.write(isNaN(string1));  //writes false

var number1 = 55
document.write(number1.toString());  //writes 55
document.write("<br>");

array1 = new Array;
array1 = [1, 3, 5, 7, 11];  //use brackets define an array by itself
document.write(array1[0],array1[1], array1[2], array1[3], array1[4]);  //writes 135711
document.write("<br>");
document.write("There are " +array1.length+ " elements in array1.");
document.write("<br>");
array2 = new Array("bark","apple","nebula","gregarious","jumpy","water");  //use paranthesis define an array
document.write(array2[0],array2[1], array2[2], array2[3], array2[4], array2[5]);  //writes barkapplenebulagregariousjumpywater
document.write("<br>");
document.write("There are " +array2.length+ " elements in array2.");
document.write("<br>");
document.write(array2.join());  //writes bark,apple,nebula,gregarious,jumpy,water; default separation is a comma
document.write("<br>");
document.write(array2.join(" "));  //writes bark apple nebula gregarious jumpy water
document.write("<br>");
document.write(array2.join(" yum "));  //writes bark yum apple yum nebula yum gregarious yum jumpy yum water
document.write("<br>");
searchstring = array2.join(" ");
beginChar = searchstring.indexOf("apple");
document.write(beginChar);  //writes 5
document.write("<br>");
document.write(array2.sort());  //writes apple,bark,gregarious,jumpy,nebula,water
document.write("<br>");
arraynumbers = new Array (1, 10, 160, 101, 2, 23);
document.write(arraynumbers.sort());  //writes 1,10,101,160,2,23; sorts alphabetically instead of numerically
document.write("<br>");

function numbersort(var1, var2) {
	return var1 - var2;
}
arraynumbers1 = new Array (1, 2, 12, 34, 72);
document.write(arraynumbers1.sort(numbersort));  //writes 1,2,12,34,72
document.write("<br>");
arraynumbers = new Array (1, 10, 160, 101, 2, 23);
document.write(arraynumbers.sort(numbersort));  //writes 1,2,10,23,101,160
document.write("<br>");

isnumber1 = 24;
isnumber2 = "Spark";
document.write(isNaN(isnumber1));  //writes false
document.write("<br>");
document.write(isNaN(isnumber2));  //writes true
document.write("<br>");

/*
array1 = new Array (1, 3, 5, 7, 11);  //use brackets define an array by itself?!?
document.write(array1[0],array1[1], array1[2], array1[3], array1[4]);  //writes 135711
document.write("<br>");
document.write("There are " +array1.length+ " elements in array1.");
document.write("<br>");
array2 = new Array
array2 = ["bark","apple","nebula","gregarious","jumpy","water"];  //use paranthesis define an array?!?
document.write(array2[0],array2[1], array2[2], array2[3], array2[4], array2[5]);  //writes barkapplenebulagregariousjumpywater
document.write("<br>");
document.write("There are " +array2.length+ " elements in array2.");
document.write("<br>");
*/