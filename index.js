const inquirer = require('inquirer');
const fs = require('fs');


const htmlbadge = (pL) => {
    const htmlImage = "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white";

    if (pL.includes("HTML")) {
        return `<img src="${htmlImage} " />`
    } else {
        return ''
    }
}

const cssbadge = (pL) => {
    const cssImage = "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white";

    if (pL.includes("CSS")) {
        return `<img src="${cssImage} " />`;
    } else {
        return ''
    }
}

const jsbadge = (pL) => {
    const jsImage = "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E";

    if (pL.includes("JavaScript")) {
        return `<img src="${jsImage} " />`;
    } else {
        return ''
    }
}

const generateReadME = ({ title, pL, summary, imageURL, description, usage, dependencies, liveLink, installing, executing, authors }) => 
  `# ${title}
  ${htmlbadge(pL)} ${cssbadge(pL)} ${jsbadge(pL)} 
  <br>
${summary}

## Description 
![Image of the webpage](${imageURL})
${description}




## Usage

${usage}

## Dependencies

${dependencies}
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
      type: 'checkbox',
      message: 'What languages did this project include?',
      name: 'pL',
      choices: ['HTML', 'CSS', 'JavaScript'],
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
      name: 'dependencies',
      message: 'What is are the dependencies of your project?',
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
