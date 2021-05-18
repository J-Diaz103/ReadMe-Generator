const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const promptUse = () => {
    return inquirer.prompt([
        {
          type: 'input',
          message: 'What is your Project name?',
          name: 'title',
        },
        {
          type: 'input',
          message: 'A detailed description of the the project',
          name: 'description',
        },
        {
          type: 'input',
          message: 'what needs to be installed to run this app?',
          name: 'install',
        },
        {
            type: 'input',
            message: 'How do you use the application?',
            name: 'use',
          },
          {
            type: 'input',
            message: 'What are the contibution guidelines?',
            name: 'contribution',
          },
          {
            type: 'input',
            message: 'What comand do you need to test this app? ie. node index.js',
            name: 'test',
          },
          {
            type: 'checkbox',
            message: 'Which license are you using',
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNU GPLv3"
            ],
            name: 'license',
          },
          {
            type: 'input',
            message: 'What is your github username?',
            name: 'github',
          },
          {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
          },
      ]);

};

   const generateReadMe = (answers) =>
    `
    ## ${answers.title}
       
    ## Description
    ${answers.description}
    ## Table of Contents (Optional)
    If your README is long, add a table of contents to make it easy for users to find what they need.
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Test](#test)
    - [Questions](#questions)
    ## Installation
    ${answers.install}
    ## Usage
    ${answers.use}
    ## License
    ${answers.license}
    ## Contributing
    ${answers.contribution}
    ## Tests
    To test this application use command: ${answers.test}
    
    ## Questions
    Reach out for any questions
    GitHub:
    https://github.com/${answers.github}
    Email:
    ${answers.email}
    
    `;
   
    const init = () => {
        promptUse()
          .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
          .then(() => console.log('Successfully wrote to README.md'))
          .catch((err) => console.error(err));
      };
      
      init();