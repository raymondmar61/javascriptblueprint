sentence = "The quick brown fox jumped over the lazy dog.";
document.write("<br>");
document.write("did these escape charactes work?  The quick \n brown fox \r jumped over the \t lazy dog.");
document.write("<br>");
document.write(sentence.length," is the length of the variable 'sentence'.");  //write 45
document.write("<br>");
document.write(sentence.bold());
document.write("<br>");
document.write(sentence.big());
document.write("<br>");
color = "Blue";
document.write(sentence.fontcolor(color));
document.write("<br>");
size = 24;
document.write(sentence.fontsize(6));
document.write("<br>");
document.write(sentence.italics());
// document.write("<br>");
// href = "google.com";
// document.write(sentence.fontlink(href));
document.write("<br>");
document.write(sentence.small());
document.write("<br>");
document.write(sentence.strike());
document.write("<br>");
document.write(sentence.toLowerCase());
document.write("<br>");
document.write(sentence.toUpperCase());
document.write("<br>");
document.write(sentence.substring(0,11));  //print The quick b.  T is 0.  b is 11
document.write("<br>");
document.write(sentence.substr(16,3));  //print fox.  fox starts at 16, want 3 characters.
document.write("<br>");

slicesentence = "out to lunch";
document.write(slicesentence.slice(3,-2));  //print to lun.  I think it's start the slice at 3 from the left and end at -2 from the right
document.write("<br>");
document.write(sentence.concat(slicesentence));  //print The quick brown fox jumped over the lazy dog.out to lunch
document.write("<br>");
document.write(sentence+ " " +slicesentence);  //print The quick brown fox jumped over the lazy dog. out to lunch
document.write("<br>");

document.write("H"+"2".sub()+"O");
document.write("<br>");
document.write("X"+"2".sup());
document.write("<p>");

anchorstring = "I didn't understand .anchor() and .link() the end";
document.write(anchorstring.anchor("end"));
document.write("<p>");

searchstring = "Today is a good day!";
document.write(searchstring.search("good"));  //print 11.  Remember counting starts at 0
document.write("<br>");

indexofstring = "I like spaghetti and meatballs and garlic bread garlic";
document.write(indexofstring.indexOf("and", 20));  //print 31.  Start searching for and at the 20th position.
document.write(indexofstring.lastIndexOf("garlic"));  //print 48.  Start searching for the last garlic at the position from the start
document.write("<br>");

replacestring = "Spring is a time for flowers and trees and baby bunnies";
document.write(replacestring.replace("and",", "));  //print Spring is a time for flowers , trees and baby bunnies
// replacestring = "Spring is a time for flowers and trees and baby bunnies";
// while (replacestring.search("and") != -1) {
// 	replacestring.replace("and",", ");
// }
// document.write(replacestring);
document.write("<br>");

splitstring = "Oscar the Grouch, Big Bird, Cookie Monster"
document.write(splitstring); //print Oscar the Grouch, Big Bird, Cookie Monster
splitstringarray = splitstring.split(",");
document.write(splitstringarray[0]+" "); //print Oscar the Grouch
document.write(splitstringarray[1]+" "); //print Big Bird
document.write(splitstringarray[2]+" "); //print Cookie Monster