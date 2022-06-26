const generateHTMLPage = function (employeeCards) {
//Generates base HTML
    return `
<!DOCTYPE html>
<html lang="en-US">

  <head>
    <meta charset="UTF-8">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header class="navbar-brand mb-0 h1 w-100 text-center">
      <h2>My Team</h2>
    </header>

    <section>
        <div class="container">
        ${employeeCards}
        </div>
    </section>

  </body>

</html>
`
};

//generates Manager card html
const generateManager = function (Manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${Manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${Manager.id}</p>
                <p class="email">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
                <p class="office">Office Number: ${Manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `
};

// push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateHTMLPage(employeeCards); 
    return generateTeam;

}

//generates Engineer card html
const generateEngineer = function (Engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
             <h3>${Engineer.name}</h3>
             <h4>Engineer</h4>
            </div>
            <div class="card-body">
            <p class="id">ID: ${Engineer.id}</p>
            <p class="email">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
};

//generates Intern card html
const addIntern = function (Intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${Intern.name}</h3>
                 <h4>Intern</h4>
             </div>
            <div class="card-body">
            <p class="id">ID: ${Intern.id}</p>
            <p class="email">Email:<a href="mailto:${Intern.email}">${Intern.email}</a></p>
            <p class="school">School: ${Intern.school}</p>
            </div>
        </div>
    </div>
    `
};

module.exports = generateHTMLPage;