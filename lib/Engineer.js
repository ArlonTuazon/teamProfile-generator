const Employee = require ('../lib/Employee.js')

class Engineer extends Employee {
  constructor (name, id, email, github){
      super(name, id, email);
      this.github = github; 
  }

  getRole () {
    return 'Engineer';
  }

  getgitHub () {
      return this.github;
  }

}
module.exports = Engineer;