// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//badge - link found through google search
function renderLicenseBadge(license) {
  if (license !== "no license") {
  return `
  ![badge](https://img.shields.io/badge/${license}-pink)
  `}
  else {
  return 'no license'
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//link for license - found free online source from google search
function renderLicenseLink(license) {
  if (license !== "no license") {
  return `
  https://choosealicense.com/licenses/${license}
  `}
  else {
  return 'no license'
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//license link within section in
function renderLicenseSection(license) {
  if (license !== "no license") {
  return `
  ## License
  ${renderLicenseLink(license)}
  `}
  else {
  return ""
  };
};

//section for demo
// function renderDemo (demo) {

// };


// TODO: Create a function to generate markdown for README
function generateMarkdown(info) {
//README format
  return `
  # ${info.title}

  ${renderLicenseBadge(info.license)}

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#tests)
  - [Questions](#questions)


## Description
${info.description}
${renderLicenseSection(info.license)} 

  
## Installation 
  ${info.installation}

## Usage 
  ${info.usage}
  ${info.screenshot}

## Contribution
  ${info.contribution}

## Testing
  ${info.testing}

## Questions
   Questions? Reach out to me at [${info.github}](https://github.com/${info.github}) or ${info.email}!

`;
};

module.exports = generateMarkdown;
