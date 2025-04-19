// JavaScript function to validate form
function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var aadhaar = document.getElementById("aadhaar").value;
    
    // Name validation: Minimum 10 characters
    if (name.length < 10) {
        alert("Name must be at least 10 characters.");
        return false;
    }
    
    // Age validation: Age must be between 18 and 80
    if (age < 18 || age > 80) {
        alert("Age must be between 18 and 80.");
        return false;
    }
    
    // Address validation: Address should not be empty
    if (address == "") {
        alert("Address is required.");
        return false;
    }
    
    // Date of Birth validation: It should be in the past
    var currentDate = new Date();
    var dateOfBirth = new Date(dob);
    if (dateOfBirth >= currentDate) {
        alert("Date of Birth must be in the past.");
        return false;
    }
    
    // Aadhaar validation: Exactly 10 digits
    var aadhaarPattern = /^[0-9]{10}$/;
    if (!aadhaarPattern.test(aadhaar)) {
        alert("Aadhaar Card number must be exactly 10 digits.");
        return false;
    }
    
    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}

