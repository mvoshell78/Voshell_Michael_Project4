//alert("JavaScript works!");
// Michael Voshell
// SDI 092014
// Project 4

// Global Variables

var dateCurrent = new Date(); 
var dateFuture = new Date("2014/12/25")
var myAge = "36"
var myArray = [1, "Bob", 27, 15, "yellow" ]

// Functions

// Find the total value of just the numbers in an array, even if some of the items are not numbers.
var sumArray = function(myArray) {
    
    i = 0
    while  (i < myArray.length) {
        console.log(myArray[i])
            if (myArray === isNaN(myArray[i])) {
                console.log (myArray)
            }
            }
        i++
        };
    
    
// Given a string version of a number such as "42", return the value as an actual Number, such as 42.

var stringToNumber = function(myAge) {
    
    var convert = parseInt(myAge)
    
    return convert
    
}; 

// Does a string follow a 123-456-7890 pattern like a phone number?

var verifyPhone = function () {


var areaCode = (phonePrompt.substr(0,3))
var prefix = (phonePrompt.substr(4,3))
var lastFour= (phonePrompt.substr(8,4))
var wholeNumber = parseInt(areaCode + prefix + lastFour)

    if (phonePrompt.length != 12) {
     return false
        } else {   
        if (phonePrompt.substr(3,1) != "-") {
            return false
                } else {
                    if (phonePrompt.substr(7,1) != "-") {
                        return false
                    } else {
                        if (wholeNumber <= 9999999999) {
                            if (wholeNumber >= 1111111111) {
                                return true
                            } else {
                                return false
                            };
                        };
                        
                    };

};
};
};

// Is the string a URL? (Does it start with http: or https:?)
    
var webAddress = function() {
    
    
    if (webPrompt.substr(0,5) === "http:") {
        return true 
    } else {
        if (webPrompt.substr(0,6) === "https:") {
           return true
        } else {
            return false
            };//  1st conditional
    };//2nd coditional
   };// end of webAddress function
 
// Find the number of hours or days difference between two dates.

var dateDiff = function(dateCurrent, dateFuture) {
    
    var diffInHours = Math.abs((((dateCurrent-dateFuture)/1000)/60)/60); // calculates hours
    var diffInDays = Math.abs(((((dateCurrent-dateFuture)/1000)/60)/60)/24); //  calculates days
    diffInHours = Math.round(diffInHours);
    diffInDays = Math.round(diffInDays);
    return [diffInDays, diffInHours]    // returning an array
    };

// Main Code

// calling sum array function

sumArray(myArray)

//calling string to number function

var myAgeConverted = stringToNumber(myAge)
console.log(" I am " + myAgeConverted + " years old")


// calling the diffdate function

var christmas = dateDiff(dateCurrent,dateFuture)
    var christmasDays = christmas[0]
    var christmasHours = christmas[1]
        console.log (christmasDays + " days left till Christmas")
        console.log ("Better get with it, thats only " + christmasHours + " more hours!")

// calling verify phone 

var phonePrompt = prompt( " What is your phone number? Use 111-111-1111 format ")
console.log (" You entered " + phonePrompt )
var phone = verifyPhone(phonePrompt) // conditional statements for return
if (phone === true) {
    console.log ("This Telephone number fits the format" )
    } else {
        if (phone === false) {
            console.log ("This is not a phone number or it does not for the format ")
            }   ;// false conditional
    }; // close conditonal*/

// verify url

var webPrompt = prompt ("Enter a full web address, including https:")   
var web = webAddress()
console.log(webPrompt)
if (web === true) {
    console.log("This is a url")
    } else {
        if (web === false ) {
            console.log("This is not a url, You forgot to add http:")
        }
        };



