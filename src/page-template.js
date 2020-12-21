const teamCards = teamData => {

    const manager = teamData.manager.map (function (job){
        let managerHTML = `
        <div class = "card" style="width: 18rem:">
            <h2>${job.name}</h2>
            <h4>Manager</h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href = "mailto:${job.email}">${job.email}</a></p>
            <p>Office Number: ${job.officeNum}</p>
        </div>
        `
       return managerHTML
    });
}