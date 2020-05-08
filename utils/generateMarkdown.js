function generateMarkdown(data) {
  return `
  # ${data.title}

  ![badge](https://img.shields.io/static/v1?label=licence&message=${data.license}&color=blue)

 ## Description 
 ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#test)

  * [Questions](#questions)

  ## Installation
  To install required dependencies, run the following command:

  \`\`\`${data.dependencies}\`\`\`

  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license
  
  ## Contributing
  ${data.contributing}
 
  ## Test
  To run test, run the following command:
  
  \`\`\`${data.test}\`\`\`
  
  ## Questions
  If you have a question about this repo, open a issue or contact ${data.username} 

  `;
}

module.exports = generateMarkdown;
