
// packages needed for this application

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require('./src/generateHTML');


// prompt questions
const questions = [
  {
    type: 'list',
    name: 'role',
    message: 'Please choose a role for the employee you would like to add.',
    choices: ['Manager', 'Engineer', 'Intern']
  }
];

const engineer = [
    {
      type: 'input',
      name: 'name',
      message: "What is Engineer's first name?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is their id number?',
    },
    {
      type: 'input',
      name: 'password',
      message: 'What is their email?',
    },
    {
      type:'input',
      name: 'github',
      message: 'What is their Github user name?'
    },
    {
      type: 'confirm',
      name: 'continue',
      message: 'Would you like to add another employee?',
    }
  ];

  const manager = [
    {
      type: 'input',
      name: 'name',
      message: "What is Manger's first name?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is their id number?',
    },
    {
      type: 'input',
      name: 'password',
      message: 'What is their email?',
    },
    {
      type:'input',
      name: 'office',
      message: 'What is their Office number?'
    },
    {
      type: 'confirm',
      name: 'continue',
      message: 'Would you like to add another employee?',

    }
  ];

  const intern = [
    {
      type: 'input',
      name: 'name',
      message: "What is Intern's first name?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is their id number?',
    },
    {
      type: 'input',
      name: 'password',
      message: 'What is their email?',
    },
    {
      type:'input',
      name: 'school',
      message: 'What school do they attend?'
    },
    {
      type: 'confirm',
      name: 'continue',
      message: 'Would you like to add another employee?', 

    }
  ];




  // function to write generated HTML file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data)
};



// function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(response => {
      // console.log(response);
      writeToFile('generated-team.html', generateHTML({ ...response }))
    })
};

// Function call to initialize app
init();
