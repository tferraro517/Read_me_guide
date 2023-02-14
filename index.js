// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'discription',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are your installation requirements?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is your usage?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license are you using?',
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "None"]
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What does the user need to know about contributing to the repo?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should I run to run tests?',
    },
  ])
  .then((answers) => {
    const readMe = generateMarkdown(answers);

    fs.writeFile('index.md', readMe, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe!')
    );
  });
}

// Function call to initialize app
init();
