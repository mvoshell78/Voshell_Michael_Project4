//alert("JavaScript works!");
// Michael Voshell
// SDI 092014
// Project 4

// Global Variables

// Functions

var verifyPhone = function () {
var phonePrompt = prompt( " What is your phone number? Use 111-111-1111 format ")
console.log (phonePrompt)
    if (phonePrompt.length != 12) {
     console.log ("this does not fit the 111-111-1111 format ")
     return false
        } else {
            console.log ("it's 12 digits")
        if (phonePrompt.substr(3,1) != "-") {
            console.log ("this does not fit the 111-111-1111 format ")
            return false
                } else {
                    console.log (" has 1st dash ")
                    if (phonePrompt.substr(7,1) != "-") {
                    console.log ("this does not fit the 111-111-1111 format ")
                     return false
                        } else {
                            console.log("has 2nd dash ")      
                            if (parseInt(phonePrompt) > 111) {
                                if (parseInt(phonePrompt) < 999) {
                            console.log (" I am between 111 and 999")
                                };
                                };
                                var prefix = (parseInt(phonePrompt.substr(4,3)) {
                                    console.log(prefix)
                              
                            if  (prefix < 111) {
                                if (prefix > 999) {
                            console.log (" I am between 111 and 999")
                                };
                                };
                                };
                            if (phonePrompt.substr(8,4) < 1111) {
                                if (phonePrompt.substr(8,4) > 9999) {
                             console.log (" I am between 1111 and 9999")
                                 return true
                                }; 
                                };
                        };
                };
        };
};

// Main Code

var phone = verifyPhone()
console.log (phone)

