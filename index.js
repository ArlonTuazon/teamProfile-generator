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
        message: "Enter Engineer's name?",
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
        message: "Enter Engineer's ID?",
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
        message: "Enter Engineer's email?",
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

