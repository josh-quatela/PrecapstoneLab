// Grabs the ints the user passed in
var newInts = process.argv.slice(2);
var output = "";

// Iterates through the numbers passed in
for (i=0; i < newInts.length; ++i) {
  // Iterates through each digit of the current number
  for (j=0; j < newInts[i].length; ++j) {
    // Switch function that adds correct phonetic spelling of the digit
    // to the output
    switch(newInts[i][j]) {
      case "1":
        output += "One";
        break;
      case "2":
        output += "Two";
        break;
      case "3":
        output += "Three";
        break;
      case "4":
        output += "Four";
        break;
      case "5":
        output += "Five";
        break;
      case "6":
        output += "Six";
        break;
      case "7":
        output += "Seven";
        break;
      case "8":
        output += "Eight";
        break;
      case "9":
        output += "Nine";
        break;
      case "0":
        output += "Zero";
        break;
    }
  }
  // Adds comma to seperate each input number
  output += ",";
}
// Prints answer to console
process.stdout.write(output.substring(0, output.length - 1));
