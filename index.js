// Get the HTML element with the ID tip-form
document.getElementById('tip-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh on submit

    // Get values and convert to numbers
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);

    // Validate inputs
    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount < 0 || tipPercentage < 0) {
        alert("Please enter valid positive numbers");
        return;
    }

    // Calculate tip and total
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    // Display results with proper formatting
    document.getElementById('result').innerHTML = `
        <h5>Tip: $${tipAmount.toFixed(2)}</h5>
        <h5>Total: $${totalAmount.toFixed(2)}</h5>
    `;
});