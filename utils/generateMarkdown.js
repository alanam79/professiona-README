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
    #### GitHub Username: ${data.github}
    #### GitHub Email Address: ${data.email}

    ## License
    Copyright &copy;${new Date().getFullYear()} by ${data.contributing}.
    Licensed under the ${data.license} license.
    `;
};

module.exports = generateMarkdown;
