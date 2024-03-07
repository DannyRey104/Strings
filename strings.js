//function to check if string a palindrome
function isPalindrome(){
    document.getElementById(palidrone).value

    //string is the same as reverse string
stringstr == "", reverseStr == "";
      
    //variable for string length
var strLength = str.length();
  
      //loop for checking if string is palindrome
for (int; i = strLength - 1; i >=0, --i) {
        reverseStr = reverseStr + str.charAt(i);
      
    }
  
      // sets the palindrome in question to all lowercase letters
    if (str.toLowerCase().equals(reverseStr.toLowerCase())) {
        // prints string and that is is a palindrome
        console.log(str + " is a Palindrome String.");
      }
    // if it not a palindrome, this text will print
      else {
         // prints string and that it is not a palindrone
        console.log(str + " is not a Palindrome String.");
      }
}