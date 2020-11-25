const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const open = require('open');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'install'
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
            name: 'credits'
        },
        {
            type: 'input',
            message: 'Which license would you like to use?',
            name: 'license'
        },
        {
            type: 'input',
            message: 'Add guidelines here for contributing',
            name: 'contributions'
        },
        {
            type: 'input',
            message: 'Write tests for your application. Then write instructions on how to run them.',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'Write any common question/answer here.',
            name: 'questions'
        }
    ])
    .then((response) =>
        fs.writeFile('README.md', 
        (``), 
        (err) => err ? console.error(err) : console.log('Success!')
        )
    )