// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

const generateMarkdown = (data) => {
  return `
  ![License Badge](https://img.shields.io/badge/License-${
    data.license
  }-green.svg)

  #### GitHub Username: ${data.github}

  #### GitHub Email Address: ${data.email}

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Website](#website)
  * [Testing](#testing)
  * [Questions](#questions)
  * [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  # Contributors
  ${data.contributing}

  # Website
  ${data.website}

  ## Tests
  ${data.test}

  ## Questions
  For additional questions and/or information, please go to the creator's Github at: github.com/${
    data.github
  }, or email ${data.email}.


  ## License
  Copyright &copy;${new Date().getFullYear()} by ${data.name}.
  Licensed under the ${data.license} license.
  `
};

module.exports = generateMarkdown;
