const Manager = require ('../lib/Manager.js');
//const Employee = require ('../lib/Employee.js')

test ('Gets office number via getOfficeNum()', () =>{
   const officeNum = 88888 
   const manager = new Manager('Nikka', 3, 'nikka@test.com', officeNum);
   expect(manager.getOfficeNum()).toBe(officeNum); 
});