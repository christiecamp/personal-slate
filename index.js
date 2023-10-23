// TODO: Include packages needed for this application

//required modules
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
    type: 'input',
    name: 'screenshot',
    message: 'Include screenshots as needed:',
},

//live demo
{
    type: 'input',
    name: 'demo',
    message: 'Provide link to live demo:',
},

//license list
{
    type: 'list',
    name: 'license',
    message: 'What license does your project have?',
    choices: [
        'MIT',
        'Apache',
        'GPL',
        'None',
    ],
},

//project contributions
{
    type: 'input',
    name: 'contribution',
    message: 'List your collaborators, if any, with links to their GitHub profiles:',
},

//project testing
{
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application:',
},

//github - questions
{
    type: 'input',
    name: 'github',
    message: 'Enter GitHub Username:',//add Questions? Reach out to me at @GitHub profile
},
{
    type: 'input',
    name: 'email',
    message: 'Enter an email users can reach you at:',//add Questions? Reach out to me at @GitHub profile
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) throw new Error(err);
    console.log('Readme Generated! Check it out in the dist folder!');
});
};

// TODO: Create a function to initialize app
function init() {

    console.log(`
    ***********************
    Welcome to the Personal
    Slate ReadMe Generator!
    ***********************
    `);

    inquirer.promt(questions)
    .then(readmeData => {
        writeToFile("./dist/README.md", generateMarkdown(readmeData))
    });
};
        
// Function call to initialize app
init();
