const Employee = require ('../lib/Employee.js');

  test('can instantiate Employee instance', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });

  test('Can getName', () => {
    const name = 'Alice'
    const employee = new Employee(name);  
    expect(employee.getName()).toBe(name);
  });


  test('Can set Id', () => {
    const id = 100
    const employee = new Employee('Poochie', id);  
    expect(employee.getId()).toBe(id);
    //expect(employee.id).toEqual(expect.any(Number));
  });

  test('Can set Email', () => {
    const email = 'poochie@yahoo.com'
    const employee = new Employee('Poochie', 1, email);  
    expect(employee.getEmail()).toBe(email);
  });
  
  
  test("getRole() should return \"Employee\"", () => {
    const tempVal = "Employee";
    const employee = new Employee("Alice", 1, "poochie@yahoo.com");
    expect(employee.getRole()).toBe(tempVal);
  });