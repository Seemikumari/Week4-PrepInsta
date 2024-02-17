// Your JavaScript code here (the Employee object and functions)

// Example Usage:
const employees = [
    new Employee("John Doe", 30, "IT", 60000),
    new Employee("Jane Smith", 28, "HR", 50000),
    new Employee("Bob Johnson", 35, "Finance", 70000),
    // Add more employees as needed
];

// Display employee information in the HTML document
function displayEmployeeInformation() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Employee Information</h2>';

    if (employees.length === 0) {
        outputDiv.innerHTML += '<p>No employees found.</p>';
        return;
    }

    const table = document.createElement('table');
    const headerRow = table.createTHead().insertRow(0);

    for (const key in employees[0]) {
        if (Object.hasOwnProperty.call(employees[0], key)) {
            const th = document.createElement('th');
            th.textContent = key.toUpperCase();
            headerRow.appendChild(th);
        }
    }

    const tbody = table.createTBody();

    employees.forEach(employee => {
        const row = tbody.insertRow();
        for (const key in employee) {
            if (Object.hasOwnProperty.call(employee, key)) {
                const cell = row.insertCell();
                cell.textContent = employee[key];
            }
        }
    });

    outputDiv.appendChild(table);
}

// Call the display function
displayEmployeeInformation();
