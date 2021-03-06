const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const markDownFile = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "title",
        message: "Enter your project's title:"
    },
    {
        type: "input",
        name: "description",
        message: "Add a short description of your project:"  
    },
    {
        type: "list",
        name: "license",
        message: "What kind of licence does your project need:",
        choices:[ 
            "MIT", 
            "APACHE2.0", 
            "GPL3.0", 
            "BSD3",
            "None"
        ]
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to insatll dependencies:",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run test:",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this repo:"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing this repo:"
    }
];

function writeToFile(fileName, data) {
   return writeFileAsync(fileName,data);
}

async function init() {
   
    try {
     const answers= await inquirer.prompt(questions);

     const formatContent=markDownFile(answers);

     writeToFile("README.md", formatContent);
    
    } catch (err) {
        console.log(err);
    }
}

init();