const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
// const util = require('util');
// const open = require('open');

// This prompts the user for answers and creates the readme
inquirer
    // Questions asked
    .prompt([
        {
            type: 'input',
            message: 'Title:',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Description:',
            name: 'description'
        },
        // {
        //     type: 'input',
        //     message: 'Webpage URL:',
        //     name: 'webpage'
        // },
        // {
        //     type: 'input',
        //     message: 'What are the steps required to install your project?',
        //     name: 'install'
        // },
        // {
        //     type: 'input',
        //     message: 'Provide instructions and examples for use.',
        //     name: 'usage'
        // },
        // {
        //     type: 'input',
        //     message: 'List your collaborators, if any, with links to their GitHub profiles.',
        //     name: 'credits'
        // },
        // {
        //     type: 'input',
        //     message: 'Add guidelines here for contributing',
        //     name: 'contributions'
        // },
        // {
        //     type: 'input',
        //     message: 'Write tests for your application. Then write instructions on how to run them.',
        //     name: 'tests'
        // },
        // {
        //     type: 'input',
        //     message: 'Write any common question/answer here.',
        //     name: 'questions'
        // },
        {
            type: 'list',
            message: 'Which license would you like to use?',
            choices: ['Unlicense', 'MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'BSD 2-clause', 'LGPLv3', 'AGPLv3'],
            name: 'license'
        }
    ])
    // Write markdown file
    .then((response) => {
        // Write file and add title
        title();
        function title() {
            fs.writeFile('Generated-README.md', (
                `# ${response.title}\n`
            ), (err) => err ? console.error(err) : console.log('Readme created. Title added.'))
        }

        // Badge
        badge();
        function badge() {
            switch (response.license) {
                case 'MIT':
                    fs.appendFile('Generated-README.md', (
                        `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`
                    ), (err) => err ? console.error(err) : console.log('Badge added.'))
            }

        }

        // Description
        description();
        function description() {
            fs.appendFile('Generated-README.md', (
                `# Description\n ${response.description}\n`
            ), (err) => err ? console.error(err) : console.log('Description added.'))
        }

        // Table of Contents
        tableOfContents();
        function tableOfContents() {
            fs.appendFile('Generated-README.md', (
                `# Table of Contents\n` +
                `* [Webpage](#Webpage)\n` +
                `* [Install](#Install)\n` +
                `* [Usage](#Usage)\n` +
                `* [Credits](#Credits)\n` +
                `* [Usage](#Usage)\n` +
                `* [Contributions](#Contributions)\n` +
                `* [Tests](#Tests)\n` +
                `* [Questions](#Questions)\n` +
                `* [License](#License)\n`
            ), (err) => err ? console.error(err) : console.log('Table of contents added.'))
        }

        // Webpage, Installation, Usage, Credits, Contributions, Test and Questions
        misc();
        function misc() {
            fs.appendFile('Generated-README.md', (
                // Webpage Link
                `# Webpage\n ${response.webpage}\n` +

                // Installation
                `# Installation\n ${response.install}\n` +

                // Usage
                `# Usage\n ${response.usage}\n` +

                // Credits
                `# Credits\n ${response.credits}\n` +

                // Contributions
                `# Contributions\n ${response.contributions}\n` +

                // Test
                `# Test\n ${response.test}\n` +

                // Questions
                `# Questions\n ${response.questions}\n`
            ), (err) => err ? console.error(err) : console.log('misc added.'))
        }

        // License
        license();
        function license() {
            fs.appendFile('Generated-README.md', (
                `# License\n ${response.license}\n`
            ), (err) => err ? console.error(err) : console.log('License added.'))
        }
    }) // end of .then
