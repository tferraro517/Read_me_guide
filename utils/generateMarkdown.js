// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blueviolet.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License`;
  }
  return "";
}

//Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log (data)
  return `# ${data.title}

 ## Description
  ${data.discription}
  ## Table of Contents (Optional)
  
 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.useage}
  
  
  ## License
  ${data.license}
  ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.test}

  ##Questions
  ## Github
  [${data.github}](https://github.com/${data.github}/)
  ## Email
  ${data.email}
  
`;


}

module.exports = generateMarkdown;
