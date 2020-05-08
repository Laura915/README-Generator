//bring in all files needed
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const markDownFile = require("./utils/generateMarkdown");


const readFileAsync = util.promisify(fs.readFile);
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
        type: "input",
        name: "license",
        message: "What kind of licence does your project need:"
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to insatll dependencies:"
    },
    {
        type: "input",
        name: "test",
        message: "What command should run to run test:"
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
         //ask questions
     const answers= await inquirer.prompt(questions);
    
    //construct markdown file
     const formatContent=markDownFile(answers);
        // console.log(formatContent);
     writeToFile("README.MD", formatContent);
    
    } catch (err) {
        console.log(err);
    }
}

init();

