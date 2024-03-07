//function to check if string a palindrome as well as firtNameAndLastName and zipcode length
function isPalindrome(){
    const palidrome = document.getElementById("palidrome").value;
    const firtNameAndLastName = document.getElementById("firtNameAndLastName").value;
    const zipcode = document.getElementById("zipcode").value;


    //string is the same as reverse string
stringstr == "", reverseStr == "";
      
    //variable for string length
var strLength = str.length();

//set text lenth
let text = "";
let length = text.length;
console.log(length);
  
//assign integer to first and last name to check length
for (int; j = length - 1; j >=0, --j){
  firtNameAndLastName(j)
}

//if statement to check if "first and last name" are over 20 characters and if so, produce an alert
  if (firtNameAndLastName() >= 21){
   alert("First name and last name must be under 20 characters long");
  }

  //if statement to check if "zipcode" is not 5 characters and if so, produce an alert
  if (zipcode() != 5){
    alert("Zipcode must be 5 characters long");
  }

  //if statement that checks if "first and last name" are less than or equal to 20 characters and if so, produce default alert.
  if (firtNameAndLastName() <= 20, zipcode() = 5){
    alert
  } 

      //loop for checking if string is palindrome
for (int; i = strLength - 1; i >=0, --i) {
        reverseStr = reverseStr + str.charAt(i);
      
    }
  
      // sets the palindrome in question to all lowercase letters and checks if string is same in reverse
    if (str.toLowerCase().equals(reverseStr.toLowerCase())) {
        // prints string and that is is a palindrome
        console.log(str + " is a Palindrome String.");
      }
    // if it not a palindrome, this text will print
      else {
         // prints string and that it is not a palindrone
        console.log(str + " is not a Palindrome String.");
      }

// set default alert for form
alert("Form commpleted successfully");
document.getElementById("palindromeText").onsubmit();

}