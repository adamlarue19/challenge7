const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Instalation instructions for your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What isn the usage info for your project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which LICENSE would you like?',
        choices: ["MIT", "Apache", "Unlicense"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

function writeFile(data) {
    fs.writeFile('USERREADME.md', data, (err) =>
        err ? console.error(err) : console.log('README file saved as USERREADME.md')
    )
}
function startApp() {
    inquirer
        .prompt(questions)
        .then((responses) => writeFile(generateMarkdown(responses)));
}

// call the function to start the app
startApp();