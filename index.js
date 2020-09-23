const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
        type: "input",
        name: "title",
        message: "What would you like your title to be? ",
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of the project",
    },
    {
        type: "list",
        name: "license",
        message: "Pick your license",
        choices: ["MIT", "Apache2.0", "GNUv3.0", "BSD3", "none"]
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information",
    },
    {
        type: "input",
        name: "contributor",
        message: "Do you have any contributors to your project?",
    },
    {
        type: "input",
        name: "tests",
        message: "Do you have any project tests?",
    },
];

// function to write README file    
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log("I'm making your ReadMe")
            writeToFile("README.md", generateMarkdown({
                ...answers
            }));
        });
}

// function call to initialize program
init()