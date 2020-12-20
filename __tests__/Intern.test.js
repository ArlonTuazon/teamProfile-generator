const Intern = require ('../lib/Intern.js')

test ('Sets Intern School getSchool()', () => {
    const school = 'UCLA';
    const intern = new Intern ('Arrielle', 2, 'arrielle@test.com', school);
    expect (intern.getSchool()).toBe(school);
});

test ('"getRole() should return \"Intern\""', () => {
    const tempVal = 'Intern';
    const intern = new Intern ('Arrielle', 2, 'arrielle@test.com', 'UCLA')
    expect (intern.getRole()).toBe(tempVal);
});
