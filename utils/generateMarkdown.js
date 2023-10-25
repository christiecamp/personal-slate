// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//badge - link found through google search
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `
    ![badge](https://img.shields.io/badge/${license}-hotpink)
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

//license section and link added within readdme
function renderLicenseSection(license) {
  if (license !== "no license") {
    return `
### ![license](../assets/branding/9.png)
${renderLicenseLink(license)}
  `}
  else {
    return ""
  };
};

//section for screenshot
function renderScreenShot(screenshot) {
  if (screenshot !== "no screenshot") {
    return `
### ![screenshot](../assets/branding/7.png)
![screenshot](../assets/screenshot.png)
  `}
  else {
    return ""
  };
};

//section for demo
function renderDemo(demo) {
  if (demo !== "no demo") {
    return `
### ![demo](../assets/branding/8.png)
![demo](../assets/)
    `}
  else {
    return ""
  };
};

//section for testing
function renderTest(testing) {
  if (testing !== "no test") {
    return `
## ![testing](../assets/branding/5.png)
![testing](../assets/branding/test.png)
    `}
  else {
    return ""
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(info) {
// README format
  return `
  
![banner](../assets/branding/banner.png)

# ${info.title}

  ${renderLicenseBadge(info.license)}

## ![table-of-contents](../assets/branding/toc.png)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Connect](#connect)

## ![description](../assets/branding/1.png)
  ${info.description}
 ${renderLicenseSection(info.license)}
  
## ![installation](../assets/branding/2.png)
  ${info.installation}

## ![usage](../assets/branding/3.png)
  ${info.usage}
  ${renderScreenShot(info.screenshot)}
  ${renderDemo(info.demo)}

## ![contribution](../assets/branding/4.png)
  ${info.contribution}

  ${renderTest(info.testing)}

## ![connect](../assets/branding/6.png)
   Questions? Connect with me at:</br>
   GiHub: [${info.github}](https://github.com/${info.github})</br>
   Email: ${info.email}!</br>
   <a href="https://www.christiecamp.com"><img height="150px" src ="../assets/branding/cc.png"></a>
`;
};

module.exports = generateMarkdown;
