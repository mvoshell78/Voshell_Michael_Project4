//alert("JavaScript works!");
// Michael Voshell
// SDI 092014
// Project 4

// Global Variables

// Functions

var verifyPhone = function () {
var phonePrompt = prompt( " What is your phone number? Use 111-111-1111 format ")
console.log (phonePrompt)
var areaCode = (phonePrompt.substr(0,3))
var prefix = (phonePrompt.substr(4,3))
var lastFour= (phonePrompt.substr(8,4))
var wholeNumber = parseInt(areaCode + prefix + lastFour)

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
                        console.log ("it has a second dash")
                        if (wholeNumber >= 9999999999) {
                            if (wholeNumber <= 1111111111) {
                                console.log ("this number is not between 1 and 9")
                                return false
                            } else { 
                                
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

