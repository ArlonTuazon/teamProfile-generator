const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generatePage = require('./src/page-template.js');
const writeFile = require('./src/generatePage.js')

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = {manager, engineer, intern};

function Prompt() {
    
    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message:"What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'input',
            name: 'employee',
            message: "What is the Employee's name?",
            validate: nameEmployee=> {
                if (nameEmployee) {
                    return true;
                }
                else {
                    console.log ('Please Enter Name!')
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: idEmployee => {
                if (isNaN(idEmployee)) {
                    return "please enter a number";
                  }
                  return true;
                }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: emailEmployee=> {
                if (emailEmployee) {
                    return true;
                }
                else {
                    console.log ('Please Enter Email!')
                    return false;
                }
            }
        }])
        .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer
                    .prompt([{
                        type:'input',
                        name: 'office',
                        message:"What is the Manager's office number?",
                        validate: managerNum => {
                            if (isNaN(managerNum)) {
                                return "please enter a number";
                              }
                              return true;
                            }
                    },
                    {
                        type:'confirm',
                        name:'newEmp',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({office, newEmp}) => {
                        manager.push(new Manager(employee, id, email, office))
                        // console.log(employeeArr)
                        if (newEmp) {
                            return Prompt();
                        }
                    })
            } else if (role === "Engineer") {
                return inquirer
                    .prompt([{
                        type: 'text',
                        name: 'github',
                        message: "What is the Engineer's Github username?"
                    },
                    {
                        type:'confirm',
                        name:'newEmp',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({github, newEmp}) => {
                        engineer.push(new Engineer(employee, id, email, github))
                        // console.log(employeeArr)
                        if (newEmp) {
                            return Prompt();
                        }
                    })
            } else if (role === 'Intern') {
                 return inquirer
                    .prompt([{
                        type:'input',
                        name:'school',
                        message: "What is the Intern's school?",
                        validate: schoolIntern=> {
                            if (schoolIntern) {
                                return true;
                            }
                            else {
                                console.log ('Please Enter Email!')
                                return false;
                            }
                        }
                    },
                    {
                        type:'confirm',
                        name:'newEmp',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({school, newEmp}) => {
                        intern.push(new Intern(employee, id, email, school))
                        // console.log(employeeArr)
                        if (newEmp) {
                            return Prompt();
                        }
                    })
            }
        })
};

Prompt()
  
  .then(teamData => {
    return generatePage(employeeArr);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
  .catch(err => {
    console.log(err);
  });

