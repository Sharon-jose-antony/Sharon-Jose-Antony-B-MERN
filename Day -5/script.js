
// ==========================================
// DAY 5 - ASYNC/AWAIT & EXCEPTION HANDLING
// ==========================================


// TASK 1 - STUDENT DETAILS

async function getStudentDetails() {

    return new Promise((resolve) => {

        setTimeout(() => {

            const student = {
                id: 101,
                name: "Sharon Jose Antony",
                department: "CSE Cyber Security"
            };

            resolve(student);

        }, 2000);

    });
}

async function displayStudentDetails() {

    const output = document.getElementById("studentOutput");

    output.className = "output";
    output.innerHTML = "Loading student details...";

    try {

        const student = await getStudentDetails();

        output.className = "output success";

        output.innerHTML = `
            <strong>Student Details</strong><br>
            ID: ${student.id}<br>
            Name: ${student.name}<br>
            Department: ${student.department}
        `;

    } catch (error) {

        output.className = "output error";
        output.textContent = error.message;

    }
}


// TASK 2 - PRODUCT AVAILABILITY

function checkProductAvailability(isAvailable) {

    return new Promise((resolve, reject) => {

        if (isAvailable) {
            resolve("Product Available");
        } else {
            reject(new Error("Product Out of Stock"));
        }

    });
}

async function checkProduct(isAvailable) {

    const output = document.getElementById("productOutput");

    try {

        const result = await checkProductAvailability(isAvailable);

        output.className = "output success";
        output.textContent = result;

    } catch (error) {

        output.className = "output error";
        output.textContent = error.message;

    }
}


// TASK 3 - LOGIN VALIDATION

function login(email, password) {

    return new Promise((resolve, reject) => {

        const correctEmail = "student@gmail.com";
        const correctPassword = "123456";

        if (
            email === correctEmail &&
            password === correctPassword
        ) {

            resolve("Login Successful!");

        } else {

            reject(new Error("Invalid Email or Password"));

        }

    });
}

async function validateLogin() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const output = document.getElementById("loginOutput");

    try {

        const result = await login(email, password);

        output.className = "output success";
        output.textContent = result;

    } catch (error) {

        output.className = "output error";
        output.textContent = error.message;

    }
}


// TASK 4 - ATM WITHDRAWAL

function withdrawMoney(balance, amount) {

    if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error("Enter a valid withdrawal amount");
    }

    if (amount > balance) {
        throw new Error("Insufficient Balance");
    }

    return balance - amount;
}

function atmTransaction() {

    const balance = 5000;

    const amount = Number(
        document.getElementById("withdrawAmount").value
    );

    const output = document.getElementById("atmOutput");

    try {

        const remainingBalance = withdrawMoney(balance, amount);

        output.className = "output success";

        output.innerHTML = `
            Withdrawal Successful!<br>
            Withdrawn Amount: ₹${amount}<br>
            Remaining Balance: ₹${remainingBalance}
        `;

    } catch (error) {

        output.className = "output error";
        output.textContent = "Error: " + error.message;

    } finally {

        output.innerHTML += "<br>Transaction Completed";

    }
}


// TASK 5 - EMPLOYEE DATA VALIDATION

function validateEmployee(employee) {

    if (!employee.name || employee.name.trim() === "") {
        throw new Error("Employee name is required");
    }

    if (
        !employee.email ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email)
    ) {
        throw new Error("Invalid employee email");
    }

    if (
        !Number.isFinite(employee.salary) ||
        employee.salary <= 0
    ) {
        throw new Error("Invalid employee salary");
    }

    return "Employee Data Validated Successfully!";
}

function employeeValidation() {

    const employee = {

        name: document.getElementById("employeeName").value.trim(),

        email: document.getElementById("employeeEmail").value.trim(),

        salary: Number(
            document.getElementById("employeeSalary").value
        )

    };

    const output = document.getElementById("employeeOutput");

    try {

        const result = validateEmployee(employee);

        output.className = "output success";
        output.textContent = result;

    } catch (error) {

        output.className = "output error";
        output.textContent = "Error: " + error.message;

    } finally {

        output.innerHTML += "<br>Employee Validation Completed";

    }
}


// TASK 6 - NUMBER DIVISION

function divideNumbers(num1, num2) {

    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }

    return num1 / num2;
}

function performDivision() {

    const num1 = Number(
        document.getElementById("number1").value
    );

    const num2 = Number(
        document.getElementById("number2").value
    );

    const output = document.getElementById("divisionOutput");

    try {

        if (
            document.getElementById("number1").value === "" ||
            document.getElementById("number2").value === ""
        ) {
            throw new Error("Please enter both numbers");
        }

        const result = divideNumbers(num1, num2);

        output.className = "output success";
        output.textContent = "Division Result: " + result;

    } catch (error) {

        output.className = "output error";
        output.textContent = "Error: " + error.message;

    } finally {

        output.innerHTML += "<br>Calculation Completed";

    }
}
