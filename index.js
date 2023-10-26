// TODO: Include packages needed for this application

//required packages
const inquirer = require('inquirer');
const fs = require('fs');

//link to page where README is developed (generateMarkdown)
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

//array of questions for the user
const questions = [

    //project title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    //project description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project:',
    },

    //project installation
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },

    //project usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },

    //usage screenshot
    {
        type: 'list',
        name: 'screenshot',
        message: 'Is a screenshot provided?',
        choices: [
            'yes',
            'no',
            ],
    },

    //live demo
    {
        type: 'list',
        name: 'demo',
        message: 'Is a demo provided?',
        choices: [
            'yes',
            'no',
            ],
    },

    //license list
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: [
            'mit',
            'apache-2.0',
            'bsl-1.0',
            'no license',
            ],
    },

    //project contributions
    {
        type: 'input',
        name: 'contribution',
        message: 'List your collaborators:',
    },

    //testing - will include actua testing in future development
    {
        type: 'list',
        name: 'testing',
        message: 'Did you go the extra mile and write tests for your application?',
        choices: [
            'yes',
            'no',
            ],
    },

    //github - questions
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub Username:',
    },

    //email - questions
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email users can reach you at:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, info) {
    fs.writeFile(fileName, info, (err) => {
    if (err) throw new Error(err);
    console.log('README Generated! Check it out in the sample folder!');
    });
};

// TODO: Create a function to initialize app
function init() {

    //message displayed at start of prompt
    console.log(`
    ***********************
    Welcome to the Personal
    Slate ReadMe Generator!
    ***********************
    `);

    inquirer.prompt(questions)
    .then(readmeInfo => {
        writeToFile("./sample/sample.md", generateMarkdown(readmeInfo))
    });
};
        
// Function call to initialize app
init();
