const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const generatePage = ('./src/page-template')
const fs = require('fs');

let manager = [];
let engineer = [];
let intern = [];
let empList = {manager, engineer, intern};

const Prompt = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message:"Enter Employee's role:",
        choices: ['Manager', 'Engineer', 'Intern']
    },

    {
        type: "input",
        name: "name",
        message: "Enter Employee's name:",
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
        type: "input",
        name: "id",
        message: "Enter Employee's ID:",
        validate: idEmployee => {
            if (isNaN(idEmployee)) {
                return "please enter a number";
              }
              return true;
            }
    }, 
    
    {
        type: "input",
        name: "email",
        message: "Enter Employee's email:",
        validate: emailEmployee=> {
            if (emailEmployee) {
                return true;
            }
            else {
                console.log ('Please Enter Email!')
                return false;
            }
        }
    }, 

])
.then(({name, id, email, role}) => {
    if (role === "Manager") {
        return inquirer
                    .prompt([
    {
    
        type: "input",
        name: "officeNum",
        message: "Enter Manager's Office Number:",
    }, 

    {
        type:'confirm',
        name:'anotherEntry',
        message: "Add another employee?",
        default: false
    }])
.then(({office, newEmp}) => {
    manager.push(new Manager(name, id, email, office))
    // console.log(newEmp)
    if (newEmp) {
        return Prompt();
    }
    })
    } 
    else if (role === "Engineer") {
        return inquirer
        .prompt([
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's Github username?"
    },

    {
        type:'confirm',
        name:'anotherEntry',
        message: "What you like to add another employee?",
        default: false
    }
    ])
    .then(({github, newEmp}) => {
        engineer.push(new Engineer(name, id, email, github))
      // console.log(newEmp)
        if (newEmp) {
            return Prompt();
        }
        })
    }
     else if (role === 'Intern') {
        return inquirer
        .prompt([    
    {
        type: "input",
        name: "school",
        message: "Enter Intern's school:",
        validate: schoolIntern=> {
            if (schoolIntern) {
                return true;
            }
            else {
                console.log ('Please Enter School!')
                return false;
            }
        }
    },
    
    {
        type:'confirm',
        name:'anotherEntry',
        message: "What you like to add another employee?",
        default: false
    }
])
.then(({school, newEmp}) => {
    intern.push(new Intern(name, id, email, school))
    // console.log(newEmp)
    if (newEmp) {
        return Prompt();
    }
})
}
})
};

Prompt()
    .then(teamData => {
        return generatePage(empList)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })

