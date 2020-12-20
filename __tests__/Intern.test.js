const Intern = require ('../lib/Intern.js')

test ('Sets Intern School getSchool()', () =>{
    const school = 'UCLA';
    const intern = new Intern ('Arrielle', 2, 'arrielle@test.com', school);
    expect (intern.getSchool()).toBe(school);
});
