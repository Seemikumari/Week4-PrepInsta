function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}

// Sample employee data
let employees = [
    new Employee("John Doe", 30, "HR", 50000),
    new Employee("Alice Smith", 35, "IT", 60000),
    new Employee("Bob Johnson", 40, "Finance", 70000),
    new Employee("Emily Brown", 28, "HR", 55000),
    // Add more employees as needed
];

// Display past employees by default
displayEmployees();

// Create Employee
function createEmployee() {
    const name = prompt("Enter employee name:");
    const age = parseInt(prompt("Enter employee age:"));
    const department = prompt("Enter employee department:");
    const salary = parseInt(prompt("Enter employee salary:"));
    if (name && !isNaN(age) && department && !isNaN(salary)) {
        const newEmployee = new Employee(name, age, department, salary);
        employees.push(newEmployee);
        displayOutput(`Employee ${name} created successfully.`);
        displayEmployees();
    } else {
        displayOutput("Invalid input. Please fill in all fields with valid data.");
    }
}

// Calculate Average Salary
function calculateAverageSalary() {
    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
    const averageSalary = totalSalary / employees.length;
    displayOutput(`Average Salary: $${averageSalary.toFixed(2)}`);
}

// Find Employees in a Department
function findEmployeesByDepartment() {
    const department = prompt("Enter department name:");
    const employeesInDepartment = employees.filter(employee => employee.department.toLowerCase() === department.toLowerCase());
    if (employeesInDepartment.length > 0) {
        displayOutput(`Employees in ${department}: ${employeesInDepartment.map(employee => employee.name).join(', ')}`);
    } else {
        displayOutput(`No employees found in ${department} department.`);
    }
}

// Increase Salary for Employees
function increaseSalary() {
    const percentage = parseFloat(prompt("Enter percentage increase:"));
    if (!isNaN(percentage)) {
        employees.forEach(employee => {
            employee.salary += (employee.salary * (percentage / 100));
        });
        displayOutput(`Salaries increased by ${percentage.toFixed(2)}%`);
    } else {
        displayOutput("Invalid percentage.");
    }
}

// Sort Employees by Age
function sortEmployeesByAge() {
    const sortedEmployees = employees.slice().sort((a, b) => a.age - b.age);
    displayOutput("Employees sorted by age:");
    sortedEmployees.forEach(employee => {
        displayOutput(`- ${employee.name} (Age: ${employee.age})`);
    });
}

// Display employees in tabular format
function displayEmployees() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ""; // Clear existing content
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    for (const property in employees[0]) {
        const headerCell = headerRow.insertCell();
        headerCell.textContent = property.toUpperCase();
    }
    employees.forEach(employee => {
        const row = table.insertRow();
        for (const property in employee) {
            const cell = row.insertCell();
            cell.textContent = employee[property];
        }
    });
    outputDiv.appendChild(table);
}

// Display output on the webpage
function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    outputDiv.appendChild(paragraph);
}

