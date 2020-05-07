function generateMarkdown(data) {
  return `
(https://img.shields.io/static/v1?label=license&message=${data.license}&color=blue)
  # ${data.title}

## Description 
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test)
- [Questions](#questions)

## Installation
To install the required dependencies, run the following command:
${data.install}
## Usagec
${data.usage}
## License
${data.license}
## Contributing
${data.contributing}
`;
}

module.exports = generateMarkdown;
