newdateobject = new Date("August 2, 1988 12:30:00");
document.write(newdateobject); //write Tue Aug 02 1988 12:30:00 GMT-0700 (Pacific Daylight Time)
newdateobjectmonth0 = new Date(2000, 1, 15, 14, 45, 10);
document.write(newdateobjectmonth0); //write Tue Feb 15 2000 14:45:10 GMT-0800 (Pacific Standard Time).  Months start with 0 for January.
document.write("<p>");

currentdate = new Date();
document.write(currentdate.toLocaleString());  //write 3/17/2017, 1:58:13 PM
document.write("<br>The current day for which 1 is Monday, 2 is Tuesday, 7 is Sunday is " +currentdate.getDay());
document.write("<br>The current Month for which 0 is January, 6 is July is " +currentdate.getMonth());
document.write("<br>The current Date is " +currentdate.getDate());
document.write("<br>The current Year for which returns a two-digit value is " +currentdate.getYear());
document.write("<br>The current hours is " +currentdate.getHours());
document.write("<br>The current Minutes is " +currentdate.getMinutes());
document.write("<br>The current Seconds is " +currentdate.getSeconds());
document.write("<p>");

setdate = new Date("December 25, 1984");
document.write(setdate);
setdate.setMonth(10)
document.write("<br>New Month " +setdate);
setdate.setDate(17)
document.write("<br>New Date " +setdate);
setdate.setYear(97)
document.write("<br>New Year " +setdate);
setdate.setHours(13);
setdate.setMinutes(47);
setdate.setSeconds(23);
document.write("<br>New Time " +setdate);
document.write("<p>");

currentdate = new Date();
document.write("The number of milliseconds since January 1, 1970 is " +currentdate.getTime());
newdate = new Date("Sep 12, 1974");
document.write("<p>milliseconds passed since January 1, 1970 " +Date.parse(newdate));
