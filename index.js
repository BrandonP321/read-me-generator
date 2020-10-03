const fs = require('fs')
const inquirer = require('inquirer')

const promptuser = function () {
    const readmeInfo = inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Write a description for your project',
                name: 'description'
            },
            {
                type: 'input',
                message: 'What are the contribution guidelines?',
                name: 'contribution'
            },
            {
                type: 'input',
                message: 'write any installation instructions',
                name: 'installation'
            },
            {
                type: 'input',
                message: "Describe any usage information",
                name: 'usage'
            },
            {
                type: 'input',
                message: 'What are the test instructions?',
                name: 'testInstructions'
            },
            {
                type: 'list',
                message: 'What license is being used?',
                choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'other'],
                name: 'license'
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'githubUserName'
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email'
            }
        ]).then(function(response) {
            const {title, description, contribution, installation, usage, testInstructions, license, githubUserName, email} = response
            generateReadme(title, description, contribution, installation, usage, testInstructions, license, githubUserName, email)
        })
}

const generateReadme = function(title, description, contribution, installation, usage, test, license, git, email) {
    const text = `
# ${title}

## Description
${description}

## Installation Instructions
\`${installation}\`

## Usage Information
${usage}

## License
${license}

## Contribution Guidelines
${contribution}

## Test Instructions
${test}

## Questions
Email me at ${email}
My git username: ${git}
    `
    fs.writeFile('README.md', text, function(err) {
        if (err) {
            return console.log(err)
        } else {
            console.log('Success!')
        }
    })
}

promptuser()