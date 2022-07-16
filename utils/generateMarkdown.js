const generateMarkdown = (data) => {
  return `
  ![License Badge](https://img.shields.io/badge/License-${
    data.license
  }-green.svg)

  #### GitHub Username: [${data.github}](https://github.com/${data.github})

  #### Email Address: ${data.email}

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Website](#website)
  * [Testing](#testing)
  * [Screenshots](#screenshots)
  * [Questions](#questions)
  * [License](#license)
  * [Special Thanks](#special-thanks)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  # Contributors
  ${data.contributing}

  # Website
  ${data.website}

  ## Testing
  ${data.test}

  ## Screenshots

  ## Questions
  For additional questions and/or information, please go to the creator's Github at: github.com/${
    data.github
  }, or email ${data.email}.


  ## License
  Copyright &copy;${new Date().getFullYear()} by ${data.name}.
  Licensed under the ${data.license} license.

  ## Special Thanks
  `;
};

module.exports = generateMarkdown;
