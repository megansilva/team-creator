const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

// employee array
const employees = [];

function initApp() {
    startHtml();
    addTeam();
}

function addTeam() {
    inquirer.prompt([{
        type: "input",
        message: "Enter the team members name.",
        name: "name"
    },
    {
        type: "list",
        message: "Select this team member's role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    {
        type: "input",
        message: "Enter this team members employee ID.",
        name: "ID"
    },
    {
        message: "Enter this team member's email address.",
        name: "email"
    }])

        .then(function ({ name, role, ID, email }) {
            let memRole = "";
            if (role === "Manager") {
                memRole = "Office Number";
            } else if (role === engineer) {
                memRole = "Github";
            } else {
                memRole = "School";
            }

            inquirer.prompt([{
                message: `Enter team member's ${memRole}`,
                name: "memRole"
            },
            {
                type: "list",
                message: "Would you like to add more team member's?",
                choices: [
                    "Yes",
                    "No"
                ],
                name: "moreMem"
            }])

                .then(function ({ memRole, moreMem }) {
                    let newMem;
                    if (role === "Manager") {
                        newMem = new manager(name, ID, email, memRole);
                    } else if (role === "Engineer") {
                        newMem = new Engineer(name, ID, email, memRole);
                    } else {
                        newMem = new intern(role, ID, Email, memRole)
                    }

                    employees.push(newMem);
                    addHTML(newMem)
                        .then(function () {
                            if (moreMem === "Yes") {
                                addTeam();
                            } else {
                                finishHtml();
                            }
                        });
                });


        });
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="./assets/style.css">
        <title>Meet the Team</title>
    </head>
    
    <body>
        <header>
            <nav class="nav bg-danger mb-5" id="navbar">
                <span class="nav-brand mb-0 h1 w-100 text-center" id="navtext">Team Profile</span>
            </nav>
        </header>
    
        <main>
            <div class="container">
                <div class="row justify-content-center" id="employee-cards">`;

    fs.writeFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(employ) {
    return new Promise(function (resolve, reject) {
        const name = employ.getName();
        const role = employ.getRole();
        const ID = employ.getId();
        const email = employ.getEmail();
        let data = "";
        if (role === "Manager") {
            const officeNum = employ.getOfficeNum();
            data = `<div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${name}</h3>
                    <h4>Manager</h4><i class="glyphicon glyphicon-user"></i>
                </div>
            </div>

            <div class="card-info">
                <p class="eminfo">ID: ${ID}</p>
                <p class="eminfo">Email: ${email}</p>
                <p class="eminfo">Office Number: ${officeNum}</p>
            </div>
        </div>`;
        } else if (role === "Engineer") {
            const gitH = employ.getgitH();
            data = `<div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${name}</h3>
                    <h4>Engineer</h4><i class="glyphicon glyphicon-download-alt"></i>
                </div>
            </div>
            
            <div class="card-info">
                <p class="eminfo">ID: ${ID}</p>
                <p class="eminfo">Email: ${email}</p>
                <p class="eminfo">GitHub: ${gitH} </p>
            </div>
        </div>`;
        } else {
            const school = employ.getschool();
            date = `<div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${name}</h3>
                    <h4>Intern</h4><i class="glyphicon glyphicon-list-alt"></i>
                </div>
            </div>
            
            <div class="card-info">
                <p class="eminfo">ID:  ${ID}</p>
                <p class="eminfo">Email: ${email}</p>
                <p class="eminfo">School: ${school} </p>
            </div>
        </div>`;
        }

        console.log("adding team employees");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });



    function finishHtml() {
        const html = ` </div>

            </div>
        </main>
    </body>

    </html>`;

        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                console.log(err);
            };

        });

        console.log("end");
    }

}

initApp();

