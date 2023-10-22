// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project.',
},
{
    type: 'input',
    name: 'tableOfContents',
    message: '',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
},
{
    type: 'input',
    name: 'screenshot',
    message: 'Include screenshots as needed:',
},
{
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
},
{
    type: 'input',
    name: 'contributing',
    message: 'List your collaborators, if any, with links to their GitHub profiles:',
},
{
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application:',
},
{
    type: 'input',
    name: 'questions',
    message: '',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
