const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');
const fs = require('fs');

const promptEngineer = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter Engineer's name:",
        validate: nameEngineer=> {
            if (nameEngineer) {
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
        message: "Enter Engineer's ID:",
        validate: idEngineer => {
            if (isNaN(idEngineer)) {
                return "please enter a number";
              }
              return true;
            }
    }, 
    
    {
        type: "input",
        name: "email",
        message: "Enter Engineer's email:",
        validate: emailEngineer=> {
            if (emailEngineer) {
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
        name: "github",
        message: "Enter Engineer's Github:",
    }, 

    {
        type: "list",
        name: "addMore",
        message: "Would you like to add another Engineer or Intern?",
        choices: ["Engineer", "Intern", "None"]
    }, 
])

}
const promptIntern = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter Intern's name:",
        validate: nameIntern=> {
            if (nameIntern) {
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
        message: "Enter Intern's ID:",
        validate: idIntern => {
            if (isNaN(idIntern)) {
                return "please enter a number";
              }
              return true;
            }
    }, 

    {
        type: "input",
        name: "email",
        message: "Enter Intern's email:",
        validate: emailIntern => {
            if (emailIntern) {
                return true;
            }
            else {
                console.log ('Please Enter email!')
                return false;
            }
        }
    },

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
        type: "list",
        name: "addMore",
        message: "Would you like to add another Engineer or Intern?",
        choices: ["Engineer", "Intern", "None"]
    }, 

])
}
promptEngineer().then(function (answers){
    console.log(answers);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  })

  promptIntern().then(function (answers){
    console.log(answers);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  })
