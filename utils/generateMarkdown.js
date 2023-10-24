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
  ### License
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
### Screenshot
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
### Demo
 ![demo](../assets/)
  `}
  else {
  return ""
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(info) {
//README format
  return `

![banner](../assets/branding/readme-banner.png)

# ${info.title}

  ${renderLicenseBadge(info.license)}

## ![table-of-contents](../assets/branding/2.png)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#tests)
  - [Questions](#questions)

## ![description](../assets/branding/3.png)
  ${info.description}
  ${renderLicenseSection(info.license)} 
  
## ![installation](../assets/branding/4.png)
  ${info.installation}

## ![usage](../assets/branding/5.png)
  ${info.usage}
  ${renderScreenShot(info.screenshot)}
  ${renderDemo(info.demo)}

## ![contribution](../assets/branding/6.png)
  ${info.contribution}

## Testing
  ${info.testing}

## Questions
   Questions? Reach out to me at:</br>
   GiHub: [${info.github}](https://github.com/${info.github})</br>
   Email: ${info.email}!</br>
   <a href="https://www.christiecamp.com"><img height="150px" src ="../assets/branding/cc.png"></a>
`;
};

module.exports = generateMarkdown;
