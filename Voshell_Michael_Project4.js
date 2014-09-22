//alert("JavaScript works!");
// Michael Voshell
// SDI 092014
// Project 4

// Global Variables

// Functions

// This function verifies is a string of data is a phone number 
var verifyPhone = function () {
var phonePrompt = prompt( " What is your phone number? Use 111-111-1111 format ")
console.log (" You entered " + phonePrompt )
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



// Main Code

var phone = verifyPhone() // conditional statements for return
if (phone === true) {
    console.log ("This Telephone number fits the format" )
    } else {
        if (phone === false) {
            console.log ("This is not a phone number or it does not for the format ")
            }   ;// false conditional
    }; // close conditonal


