
// packages needed for this application

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require('./src/generateHTML');


// do we need to include all the questions from every profile??? like school, github, office number??
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your first name?',
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is your id number?',
    },
    {
      type: 'input',
      name: 'password',
      message: 'What is your email?',
    },
    // {
    //   type: '',
    //   name: '',
    //   message: '',
    // },
  ];


  // function to write generated HTML file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data)
};


// is the generated file going to be a html file????? how do we link it??
// function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(response => {
      // console.log(response);
      writeToFile('generated-index.html', generateHTML({ ...response }))
    })
};

// Function call to initialize app
init();
