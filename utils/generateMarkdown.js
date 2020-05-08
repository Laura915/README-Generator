function generateMarkdown(data) {
  return `
  ![badge](https://img.shields.io/static/v1?label=licence&message=${data.license}&color=blue)
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
${data.dependencies}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributing}
`;
}

module.exports = generateMarkdown;
