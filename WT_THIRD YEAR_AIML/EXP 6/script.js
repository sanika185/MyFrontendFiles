// script.js
function validateForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const adharNumber = document.getElementById('AdharNumber').value;
    const photo = document.getElementById('photo').value;

    // Validate Name
    if (name === "") {
        alert("Full Name is required.");
        return false;
    }

    // Validate Date of Birth
    if (dob === "") {
        alert("Date of Birth is required.");
        return false;
    }

    // Validate Age (Age should be a number)
    if (age === "" || isNaN(age)) {
        alert("Please enter a valid age.");
        return false;
    }

    // Validate Gender
    if (gender === "") {
        alert("Gender is required.");
        return false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Address
    if (address === "") {
        alert("Address is required.");
        return false;
    }

    // Validate Aadhar Number (Should be exactly 12 digits)
    const adharPattern = /^\d{12}$/;
    if (adharNumber === "" || !adharPattern.test(adharNumber)) {
        alert("Please enter a valid 12-digit Aadhar number.");
        return false;
    }

    // Validate Photo Upload
    if (photo === "") {
        alert("Please upload a photo.");
        return false;
    }

    // If everything is valid
    alert("Form submitted successfully!");
    return true;
}
