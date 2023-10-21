function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const operator = prompt("Enter the operator (+, -, *, /):");
    const num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Invalid input. Please enter valid numbers.");
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Error: Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Error: Invalid operator. Please use +, -, *, or /.");
            return;
    }

    alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
}

calculator();
