// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//badge
function renderLicenseBadge(license) {
  if (license) {
    return ``
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

//link
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//section
function renderLicenseSection(license) {}

//section for demo

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

const {info, github} = data;
 
 
//README format

  return `
  # ${info.title}

  ${renderLicenseBadge(data.license)}

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseBadge(data.license)}
  - [Contribution](#contribution)
  - [Testing](#tests)
  - [Questions](#questions)


  ## Description
  ${info.description}
  ${renderLicenseSection()} 
  ${renderLinkSection()}
  
## Installation 
  ${info.installation}

## Usage 
  ${info.usage}

## Contribution
  ${info.contribution}

## Testing
  ${info.tests}

## Questions
   Questions? Reach out to me at [${github}](https://github.com/${github}) at ${info.questions}!

`;
}

module.exports = generateMarkdown;
