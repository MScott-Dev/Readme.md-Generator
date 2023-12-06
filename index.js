const inquirer = require('inquirer');
const fs = require('fs');


const htmlbadge = (pL) => {
    const htmlImage = "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white";

    if (pL.includes("HTML")) {
        return `<img src="${htmlImage} " />`
    } else {
        return ''
    }
};

const cssbadge = (pL) => {
    const cssImage = "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white";

    if (pL.includes("CSS")) {
        return `<img src="${cssImage} " />`;
    } else {
        return ''
    }
};

const jsbadge = (pL) => {
    const jsImage = "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E";

    if (pL.includes("JavaScript")) {
        return `<img src="${jsImage} " />`;
    } else {
        return ''
    }
};

const licenseBagde = (license) => {
  const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  const GNUGeneralPublicLicensev3 = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  const MITLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  const BSD2ClauseSimplifiedLicense = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  const BSD3ClauseNeworRevisedLicense = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  const BoostSoftwareLicense1 = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  const CreativeCommonsZerov1universal = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  const EclipsePublicLicense2 = "[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://www.eclipse.org/legal/epl-2.0/)";
  const GNUAfferoGeneralPublicLicensev3 = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  const GNULesserGeneralPublicLicensev21 = "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)";
  const MozillaPublicLicensev2 = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  const TheUnlicense = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

  if (license.includes("Apache License 2.0")) {
      return apache;
  } else if (license.includes("GNU General Public License v3.0")) {
      return GNUGeneralPublicLicensev3;
  } else if (license.includes("MIT License")) {
    return MITLicense;
  } else if (license.includes("BSD 2-Clause Simplified License")) {
    return BSD2ClauseSimplifiedLicense;
  } else if (license.includes("BSD 3-Clause New or Revised License")) {
    return BSD3ClauseNeworRevisedLicense;
  } else if (license.includes("Boost Software License 1.0")) {
    return BoostSoftwareLicense1;
  } else if (license.includes("Creative Commons Zero v1.0 universal")) {
    return CreativeCommonsZerov1universal;
  } else if (license.includes("Eclipse Public License 2.0")) {
    return EclipsePublicLicense2;
  } else if (license.includes("GNU Affero General Public License v3.0")) {
    return GNUAfferoGeneralPublicLicensev3;
  } else if (license.includes("GNU Lesser General Public License v2.1")) {
    return GNULesserGeneralPublicLicensev21;
  } else if (license.includes("Mozilla Public License v2")) {
    return MozillaPublicLicensev2;
  } else if (license.includes("The Unlicense")) {
    return TheUnlicense;
  } else {
    return ' '
  }
};





const generateReadME = ({ title, pL, summary, imageURL, description, usage, dependencies, liveLink, installing, contributing, tests, executing, authors, license, github, email }) => 
  `# ${title}
  ${htmlbadge(pL)} ${cssbadge(pL)} ${jsbadge(pL)} <br>
  ${licenseBagde(license)}
  <br>
${summary}

## Table of Contents

[Description](#Description) <br>
[Usage](#Usage) <br>
[Dependencies](#Dependencies) <br>
[Installing](#Installing) <br>
[Contributing](#Contributing) <br>
[Executing](#Executing) <br>
[Authors](#Authors) <br>
[License](#License) <br>


## Description <a name="Description"></a>
![Image of the webpage](${imageURL}) <br>
${description}




## Usage <a name="Usage"></a>
${usage}

## Dependencies <a name="Dependencies"></a>
${dependencies} <br>
<a href="${liveLink}" alt="WeatherApp">A link to the webpage</a>

## Installing <a name="Installing"></a>
${installing}

## Contributing <a name="Contributing"></a>
${contributing}

## Tests <a name="Tests"></a>
${tests}

## Executing program <a name="Executing"></a>
${executing}

## Authors <a name="Authors"></a>
${authors}

## License <a name="License"></a>
This project is licensed under the ${license}. Click on the badge at the top for more information!

## Questions

For any questions you may have, feel free to reach out! <br>
Here are some ways! <br>
<a href="${github}" alt="GitHub">GitHub</a> <br>
<a href="mailto:${email}">Email</a>
`
    



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
      name: 'contributing',
      message: 'How can people contribute to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What kind of tests did you perform on this project?',
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
    {
      type: 'checkbox',
      message: 'What license would you like to add to this project?',
      name: 'license',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License v2', 'The Unlicense']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the link to your GitHub profile?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateReadME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
    
  });
