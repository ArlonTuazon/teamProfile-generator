const teamCards = teamData => {

    const manager = teamData.manager.map (function (job){
        let managerHTML = `
        <div class = "card border-success mb-3" style="max-width: 18rem;">
        <div class ="card">
        <div class="card-header bg-primary text-white">
            <h4>${job.name}</h4>
            <h5><img src="https://img.icons8.com/wired/30/000000/tea-cup.png"/>Manager</h5>
        </div>
           <div class = "card-body">
            <ul class="list-group list-group-flush">            
            <li class="list-group-item">ID: ${job.id}</li>
            <li class="list-group-item">Email: <a href = "mailto:${job.email}">${job.email}</a></li>
            <li class="list-group-item">Office Number: ${job.officeNum}</li>
            </ul>
          </div>
        </div>
        </div>
        `
       return managerHTML
    });

    const engineer = teamData.engineer.map (function (job){
        let engineerHTML = `
        <div class = "card border-success mb-3" style="max-width: 18rem;">
        <div class ="card">
        <div class="card-header bg-primary text-white">
            <h4>${job.name}</h4>
            <h5><img src="https://img.icons8.com/carbon-copy/25/000000/3d-glasses.png"/>Engineer</h5>
        </div>
        <div class = "card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${job.id}</li>
            <li class="list-group-item">Email: <a href = "mailto:${job.email}">${job.email}</a></li>
            <li class="list-group-item">Github: <a href = "https://github.com/${job.github}" target="_blank">${job.github}</a></li>
         </ul>
        </div>
        </div>
        </div>
        `
       return engineerHTML
    });

    const intern = teamData.intern.map (function (job){
        let internHTML = `
        <div class = "card border-success mb-3" style="max-width: 18rem;">
        <div class = "card">
        <div class="card-header bg-primary text-white">
            <h4>${job.name}</h4>
            <h5><img src="https://img.icons8.com/ios/30/000000/student-male--v1.png"/>Intern</h5>
        </div>
        <div class = "card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${job.id}</li>
            <li class="list-group-item">Email: <a href = "mailto:${job.email}">${job.email}</a></li>
            <li class="list-group-item">School: ${job.school}</li>
         </ul>   
        </div> 
        </div>
        </div>
        `
       return internHTML
    });
    return [manager,engineer,intern]
}

module.exports = employeeData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        
        <body>
            <header>
            <nav class="navbar navbar-light bg-danger text-white" style="padding:20px;">
            <p class="text-center">
            <h1>My Team</h1></p>
            </header>
            </nav>
            <div style="padding:50px;"> 
            <div class = "card-deck">
            ${teamCards(employeeData)}
            </div>
            </div>
     
        </body>
        
        </html>   
        
        `
}