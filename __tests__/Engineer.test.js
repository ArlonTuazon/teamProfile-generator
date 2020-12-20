const Engineer = require ('../lib/Engineer.js');

test("Sets GitHUb account", () => {
    const tempVal = 'GitUserJay';
    const engineer = new Engineer('Jay', 1, 'jay@yahoo.com', tempVal);
    expect(engineer.github).toBe(tempVal);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const tempVal = "Engineer";
    const engineer = new Engineer('Jay', 1, 'jay@yahoo.com', 'GitUserJay');
    expect(engineer.getRole()).toBe(tempVal);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const github = 'GitUserJay'
    const engineer = new Engineer('Jay', 1, 'jay@yahoo.com', github);
    expect(engineer.getgitHub()).toBe(github);
  });