// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![license badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

 
### Description
${data.description},

### Table of Contents
1. [ Description. ](##Description)
2. [ Installation. ](##Installation)
3. [ Usage. ](##usage)
4. [ License. ](##license)
5. [ Contributor. ](##contributor)
6. [ Test. ](##test)

### Installation
${data.installation},

### Usage
${data.usage},

### License
${data.license},

### Contributor
${data.contributor}

### Test
${data.test}





`;

}

module.exports = generateMarkdown;