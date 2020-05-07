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
    // {
    //     type: "input",
    //     name: "title",
    //     message: "Enter your project's title:"
    // },
    // {
    //     type: "input",
    //     name: "description",
    //     message: "Add a short description of your project:"
    // },
    // {
    //     type: "input",
    //     name: "licence",
    //     message: "What kind of licence does your project need:"
    // },
    // {
    //     type: "input",
    //     name: "install",
    //     message: "What command should be run to insatll dependencies:"
    // },
    // {
    //     type: "input",
    //     name: "test",
    //     message: "What command should run to run test:"
    // },
    // {
    //     type: "input",
    //     name: "Details",
    //     message: "What does the user need to know about using this repo:"
    // },
    {
        type: "input",
        name: "Contributing",
        message: "What does the user need to know about contributing this repo:"
    }
];

function writeToFile(fileName, data) {
   
}

function init() {
    //ask questions
    try {
        inquirer.prompt(questions)
            .then(function (data) {
                const data= 

            })

    } catch (err) {
        console.log(err);
    }
}

init();

