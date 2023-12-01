const inquirer = require('inquirer');
const fs = require('fs');

const generateReadME = ({ title, summary, imageURL, description, usage, depndencies, liveLink, installing, executing, authors }) => 
  `# ${title}
${summary}

## Description 
![Image of the webpage](${imageURL})
${description}




## Usage

${usage}

## Dependencies

${depndencies}
3. <a href="${liveLink}" alt="WeatherApp">A link to the webpage</a>

## Installing
${installing}

## Executing program

${executing}

## Authors
${authors}`
    



inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'summary',
      message: 'Can you give me a small summary of your project?',
    },
    {
      type: 'input',
      name: 'imageURL',
      message: 'Enter the url of the image you want to include!',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What a is a description of your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage of your project?',
    },
    {
      type: 'input',
      name: 'liveLink',
      message: 'What is the URL for the live project?',
    },
    {
      type: 'input',
      name: 'installing',
      message: 'How do you install the project?',
    },
    {
      type: 'input',
      name: 'executing',
      message: 'How do you execute your project?',
    },
    {
      type: 'input',
      name: 'authors',
      message: 'Please list all the people who helped make this project a reality!',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateReadME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });