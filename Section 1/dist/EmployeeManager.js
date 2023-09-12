"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
function generateRandomId() {
    return (0, crypto_1.randomBytes)(10).toString("hex");
}
function createEmployee(employeeName, salaryAmount) {
    return {
        name: employeeName,
        id: generateRandomId(),
        email: `${employeeName}@mail.com`,
        salary: salaryAmount
    };
}
const Bob = createEmployee("Bob", 40000);
const Tom = createEmployee("Tom", 80000);
const allEmployees = [Bob, Tom];
function sendWelcomeMessage(employee) {
    console.log(`To: ${employee.email}
    Hello ${employee.name}!
    Welcome to our awesome company!
    Your salary will be ${employee.salary}
    `);
}
allEmployees.forEach(employee => sendWelcomeMessage(employee));
