const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

const employeeArray = [];

const engineerTextGen = (Employee) =>
`
<div class="card-container" style=" display: flex; 
                                        justify-content: center; 
                                        flex-direction: row;
                                        flex-wrap: wrap;
                                        border: 2px; 
                                        background-color: rgb(74, 74, 247); ">
<div class="card" style="flex-direction: row; 
flex-wrap: wrap; 
margin: .7em;
display: flex;
flex-direction: column;">
<div class="card-head" style="background-color: rgb(133, 133, 235);">
<div class="card-head-element">${Employee.getName()}</div>
<div class="card-head-element">${Employee.getRole()}</div>
</div>
<div class="card-body">
<div class="card-body-element">ID: ${Employee.getId()}</div>
<div class="card-body-element">Email: ${Employee.getEmail()}</div>
<div class="card-body-element">Github: ${Employee.getGithub()}</div>
</div>
</div>
`;
const internTextGen = (Employee) =>
`
<div class="card-container" style=" display: flex; 
                                        justify-content: center; 
                                        flex-direction: row;
                                        flex-wrap: wrap;
                                        border: 2px; 
                                        background-color: rgb(74, 74, 247); ">
<div class="card" style="flex-direction: row; 
flex-wrap: wrap; 
margin: .7em;
display: flex;
flex-direction: column;">
<div class="card-head" style="background-color: rgb(133, 133, 235);">
<div class="card-head-element">${Employee.getName()}</div>
<div class="card-head-element">${Employee.getRole()}</div>
</div>
<div class="card-body">
<div class="card-body-element">ID: ${Employee.getId()}</div>
<div class="card-body-element">Email: ${Employee.getEmail()}</div>
<div class="card-body-element">School: ${Employee.getSchool()}</div>
</div>
</div>
`;
const managerTextGen = (Employee) =>
`
<div class="card-container" style=" display: flex; 
                                        justify-content: center; 
                                        flex-direction: row;
                                        flex-wrap: wrap;
                                        border: 2px; 
                                        background-color: rgb(74, 74, 247); ">
<div class="card" style="flex-direction: row; 
flex-wrap: wrap; 
margin: .7em;
display: flex;
flex-direction: column;">
<div class="card-head" style="background-color: rgb(133, 133, 235);">
<div class="card-head-element">${Employee.getName()}</div>
<div class="card-head-element">${Employee.getRole()}</div>
</div>
<div class="card-body">
<div class="card-body-element">ID: ${Employee.getId()}</div>
<div class="card-body-element">Email: ${Employee.getEmail()}</div>
<div class="card-body-element">Office Number:${Employee.getOfficeNumber()}</div>
</div>
</div>
`;

function HTMLgen  (employeeArray) {
    fs.writeFile('employeeDocument.html',
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    
        
        <title>My Team</title>
    </head>
    <body>
        <h1 style =
            "text-align: center; 
            background-color: aqua; 
            color:rgb(1, 104, 39); 
            padding: 1.2em;
            ">
        My Team
        </h1>\n
        `
    ,() => {});
    
    for (i=0; i<employeeArray.length; i++){
       switch(employeeArray[i].getRole()){
        case 'Engineer':
            fs.appendFile("employeeDocument.html",engineerTextGen(employeeArray[i]), () => {})
            break;
        case 'Intern':
            fs.appendFile("employeeDocument.html",internTextGen(employeeArray[i]), () => {})
            break;
        case 'Manager':
            fs.appendFile("employeeDocument.html",managerTextGen(employeeArray[i]), () => {})
            break;
       }
    }; 
    
    fs.appendFile("employeeDocument.html",
                `    </div>
                </body>
                </html>`, () => {} );
};

async function addEmployeePrompt(){
    return inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'would you like to add an Employee?',
                name: 'Boolean',
            }
        ])
        .then(response => {
            switch(response.Boolean){
                case true:
                    
                    addEmployee();
                    break;
                case false:
                    console.log(employeeArray);
                    HTMLgen(employeeArray);
            }
        })
}

async function addEmployee(){
    return inquirer
        .prompt([
            {
                type: 'list',
                message: "what is the employee's role",
                name: 'role',
                choices: ['engineer', 'intern', 'manager'],
            }
        ])
        .then(response => {
            console.log(response);
            switch(response.role){
                case 'engineer': addEngineer();
                break;
                case 'intern': addIntern();
                break;
                case 'manager': addManager();
                break;
            }
        })
}

async function addEngineer() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's name?",
                name: 'name',
            },
            {
                type: "input",
                message: "What is the employee's Id?",
                name: 'id',
            },
            {
                type: "input",
                message: "What is the employee's email?",
                name: 'email',
            },
            {
                type: "input",
                message: "What is the employee's github?",
                name: 'github',
            },
        ])
        .then(response => {
            const employee = new Engineer;
            employee.name = response.name;
            employee.id = response.id;
            employee.email = response.email;
            employee.github = response.github;

            employeeArray.push(employee);
            console.log(employeeArray);

            addEmployeePrompt();

        })
}

async function addIntern() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's name?",
                name: 'name',
            },
            {
                type: "input",
                message: "What is the employee's Id?",
                name: 'id',
            },
            {
                type: "input",
                message: "What is the employee's email?",
                name: 'email',
            },
            {
                type: "input",
                message: "What is the employee's school?",
                name: 'school',
            },
        ])
        .then(response => {
            const employee = new Intern;
            employee.name = response.name;
            employee.id = response.id;
            employee.email = response.email;
            employee.school = response.school;

            employeeArray.push(employee)
            console.log(employeeArray);

            addEmployeePrompt();

        })
}

async function addManager() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's name?",
                name: 'name',
            },
            {
                type: "input",
                message: "What is the employee's Id?",
                name: 'id',
            },
            {
                type: "input",
                message: "What is the employee's email?",
                name: 'email',
            },
            {
                type: "input",
                message: "What is the employee's office number?",
                name: 'officeNumber',
            },
        ])
        .then(response => {
            const employee = new Manager;
            employee.name = response.name;
            employee.id = response.id;
            employee.email = response.email;
            employee.officeNumber = response.officeNumber;

            employeeArray.push(employee);
            console.log(employeeArray);

            addEmployeePrompt();

        })
}


async function init(){
    await addEmployeePrompt()
}
init()



