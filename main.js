// Sample sales data (simulated database)
let salesData = [];

function calculateCommissions() {
    // Remaining code (same as before)
    // Sample sales data (salespersons with their sales figures)
    const commissionRate = 0.1; // Assuming a commission rate of 10%

    let totalCommission = 0;

    // Get the table element
    const table = document.getElementById('salesTable');

    // Clear any previous rows in the table
    table.innerHTML = "<tr><th>Salesperson</th><th>Sales Amount (in R)</th></tr>";

    // Calculate commissions for each salesperson and populate the table
    salesData.forEach(salesperson => {
        const commission = Math.floor(salesperson.sales * commissionRate);
        totalCommission += commission;

        // Add a row to the table for each salesperson
        table.innerHTML += `<tr><td>${salesperson.name}</td><td>R${salesperson.sales}</td></tr>`;
    });

    // Display the total commissions earned
    const totalCommissionDisplay = document.getElementById('totalCommission');
    totalCommissionDisplay.textContent = `Total Commissions for 6 months: R${totalCommission}`;


}

document.getElementById('salesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const nameInput = document.getElementById('salespersonName');
    const amountInput = document.getElementById('salesAmount');

    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value);

    // Simple data validation
    if (name !== '' && !isNaN(amount) && amount > 0) {
        // Add the sales data to the array
        salesData.push({ name, sales: amount });

        // Clear the form fields
        nameInput.value = '';
        amountInput.value = '';

        // Display the added sales in the table
        const table = document.getElementById('salesTable');
        table.innerHTML += `<tr><td>${name}</td><td>R${amount}</td></tr>`;
    } else {
        alert('Please enter valid data');
    }
});
