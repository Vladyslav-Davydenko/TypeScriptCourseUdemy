import { randomBytes } from "crypto"

type Employee = {
    name: string,
    id: string,
    email: string,
    salary: number
}

function generateRandomId (): string{
    return randomBytes(10).toString("hex")
}

function createEmployee (employeeName: string, salaryAmount: number): Employee{
    return {
        name: employeeName,
        id: generateRandomId(),
        email: `${employeeName}@mail.com`,
        salary: salaryAmount
    }
}

const Bob = createEmployee("Bob", 40000)
const Tom = createEmployee("Tom", 80000)
const allEmployees: Employee[] = [Bob, Tom]

function sendWelcomeMessage(employee: Employee): void {
    console.log(`To: ${employee.email}
    Hello ${employee.name}!
    Welcome to our awesome company!
    Your salary will be ${employee.salary}
    `)
}

allEmployees.forEach(employee => sendWelcomeMessage(employee))