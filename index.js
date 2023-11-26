//importing everything necessary for the file to run
const fs = require("fs");
const inquirer = require("inquirer");
const {CImageBox, CCircle, CTriangle, CSquare} = require("./lib/shapes"); 

//Questions to ask the user
const questions = [
    {   type: "input",
        name: "show_text",
        message: "Enter 3 characters to display: "
    },
    {   type: "input",
        name: "show_font_color",
        message: "Enter a color keyword/hexadecimal number for the text: "
    },
    {    type: "list",
        name: "show_shape",
        message: "Choose the shape you want: ",
        choices: ["Circle", "Triangle", "Square"],
    },
    {   type: "input",
        name: "show_shape_color",
        message: "Enter a color keyword/hexadecimal number for the selected shape: "
    }
];

//writing everything to the file
function writeToFile(sFilename, response) {
    fs.writeFileSync(sFilename, response, function(err) {
        if(err) {
            return console.log(err);
        }         
    });
}

//The init() function to initialize the app
function init() {

    inquirer.prompt(questions)
    .then(function (answers) {        
        var svgFile = "egerev_logo.svg";
        var sSvgOutput = generateSvgOutput(answers);
        writeToFile(svgFile, sSvgOutput);
        console.log("Generated " + svgFile);
    })
    .catch((err) => {
        console.log(err);
    });
}

/**
 * This function creates the shape and text necessary for the .svg file
 * @param {*} answers parameter for the user answers
 * @returns the SVG file
 */
function generateSvgOutput(answers) {
    var iWidth = 300;
    var iHeight = 200;
  
    var aAnswerShapeColor = answers["show_shape_color"].toLowerCase();
    var sAnswerShape = answers["show_shape"];

    var sAnswerFontColor = answers["show_font_color"].toLowerCase();
    var sAnswerTextValue =  answers["show_text"];
    var iLen =   sAnswerTextValue.length;
    if (iLen < 1) {
        sAnswerTextValue = "???";
    } else if (iLen > 3) {
        sAnswerTextValue = answers.show_text.substring(0, 3);
    } 

    let CShapeUser;
    switch(sAnswerShape) {
        case "Triangle":
            CShapeUser = new CTriangle(iWidth, iHeight);
            break;
        case "Circle":
            CShapeUser = new CCircle(iWidth, iHeight);
            break;
        case "Square":
            CShapeUser = new CSquare(iWidth, iHeight);
            break; 
        default:
            console.log("Unknown Shape!");
    }   
    CShapeUser.setColor(aAnswerShapeColor);

    //constructing SVG box 
    var CImageBoxUser = new CImageBox(iWidth, iHeight);
    CImageBoxUser.buildChildText(sAnswerTextValue, sAnswerFontColor, sAnswerShape);
    CImageBoxUser.buildChildShape(CShapeUser);
    return  CImageBoxUser.render();
}
init();

