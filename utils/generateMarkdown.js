
function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

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
  

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.test}
`;
}

module.exports = generateMarkdown;
