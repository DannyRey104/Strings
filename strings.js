//function to check if string a palindrome as well as firtNameAndLastName and zipcode length
function isPalindrome(){
    const palindrome = document.getElementById("palindrome").value;
    const stringstr = document.getElementById("stringstr").value;
    const reverseStr = document.getElementById("reverseStr").value;


    //string is the same as reverse string
stringstr == "", reverseStr == "";
      
    //variable for string length
var strLength = str.length();


      //loop for checking if string is palindrome
for (int; i = strLength - 1; i >=0, --i) {
        reverseStr = reverseStr + stringstr.charAt(i);
      
    }
  
      // sets the palindrome in question to all lowercase letters and checks if string is same in reverse
    if (stringstr.toLowerCase().equals(reverseStr.toLowerCase())) {
        // prints string and that is is a palindrome
      alert (palindrome + " is a Palindrome String.");
      return;
      }
    // if it not a palindrome, this text will print
      else {
         // prints string and that it is not a palindrone
        alert (palindrome + " is not a Palindrome String.");
        return;
      }

    }

    //function for user information input
function isUserInput(){
  const firtNameAndLastName = document.getElementById("firstNameAndLastName").value;
  const zipcode = document.getElementById("zipcode").value;


      //set text lenth
let text = "";
let length = text.length;
console.log(length);
  
//assign integer to first and last name to check length
for (int; j = length - 1; j >=0, --j){
  firstNameAndLastName(j)
}

//if statement to check if "first and last name" are over 20 characters and if so, produce an alert
if(firstNameAndLastName >= 21){
  alert("First name and last name must be under 20 characters long");
  return;
 }

 //if statement to check if "zipcode" is not 5 characters and if so, produce an alert
 if(zipcode != 5){
  alert("Zipcode must be 5 characters long");
  return;
 }

 //if statement that checks if "first and last name" are less than or equal to 20 characters and if so, produce default alert.
 if(firstNameAndLastName() <= 20 && zipcode() == 5){
   alert("Form has been completed successfully!")
   return;
 } 

// set default alert for form
alert("Form commpleted successfully");
document.getElementById("palindromeText").submit();

}