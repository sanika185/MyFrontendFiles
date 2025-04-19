function calculate() {
    // Get the values from the inputs
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers!";
    } else {
        // Perform the operation based on the selected option
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    result = "Error! Division by zero";
                } else {
                    result = num1 / num2;
                }
                break;
        }
    }

    // Display the result
    document.getElementById('result').textContent = `Result: ${result}`;
}
