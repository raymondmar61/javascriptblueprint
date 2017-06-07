var month = "Dec";
var day = 25;
if (month == "Dec" && day == 25) {
	document.write("Today is Christmas.<br>");
} else if (month = "Jan" && day == 1) {
	document.write("Today is New Year's Day.<br>");
} else if (month = "Aug" && day == 3) {
	document.write("Today is my birthday.<br>");
} else {
	document.write("Today is another day.<br>");
}

for (count=1; count <=10; count++){
	document.write("The preschool class learned how to count the for loop number " +count+ ".<br>");
}

function countdown(start) {
	for (start; start>0; start--) {
		document.write(start+"<br>");
	}
}
countdown(9);

i = 0
while (i<=15) {
	document.write("The preschool class learned how to count the while loop number " +i+ ".<br>");	
	i++;
}

i = 100
while (i<=115) {
	if (i == 108){
		document.write("Let's stop at " +i+ ".<br>");
		break;
	}
	document.write("The preschool class learned how to count the 100s while loop number " +i+ ".<br>");	
	i++;
}

c=0;
while (c<=19){
	c++;
	if (c==8){
		document.write("Bobby's favorite number is " +c+ ".<br>");
		continue
	}
	document.write("The kindergarten class learned how to count c while loop number " +c+ ".<br>");	
}

function changecolor(){
	document.bgColor = "lightblue";
}

function randomnumber(){
	number = Math.floor(Math.random() * 11);
	document.write("The random number now is " +number+".<br>");
	if (number == 10) {
		document.write("Stop at number " +number+".<br>");
		window.clearInterval(assignvariable);
	}
}
assignvariable = window.setInterval('randomnumber()', 3000);

