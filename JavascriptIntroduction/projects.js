// Step 4. Represent all this in an Objects
let person = {
    name: "John",
    age: 25,
    isAdult: true,
    colors: ["red", "green", "blue"]
}

// Step 1. Variables
// Variables are containers for storing data values.
w = 7; // Automatically Set
var x = 8; // Can be changed, but for OLD BROWSERS
let y = 9; // Can be changed, but for NEW BROWSERS
const z = 10; // Cannot be changed
document.getElementById("demo").innerHTML = w;

// Try to use const, then let, then var

// Step 2. Data Types
// Strings
let name = "John";
// Numbers
let age = 25;
// Booleans
let isAdult = true;
// Arrays
let colors = ["red", "green", "blue"];

document.getElementById("info").innerHTML = "Hi my name is " + name + ", I am " + age + " years old.";


// Step 3. Change the color of the info tag
let i = 0;
// setInterval is a function that runs a function every x milliseconds
setInterval(() => {
    if (i == person.colors.length) {
            i = 0;
        }
        document.getElementById("info").style.color = person.colors[i];
        i++;
    }, 1000);


// Move this up to the top and change the code to use the object

// Switch to slideshow and explain controls

// Step 5. Display date when we click button using event handlers
function displayDate() {
    document.getElementById("date").innerHTML = Date();
}

// Step 6. List your projects in an object
let projects = {
    project1: {
        name: "Project 1",
        description: "This is project 1",
        link: "https://www.google.com",
        transition: "slide"
    },
    project2: {
        name: "Project 2",
        description: "This is project 2",
        link: "https://www.google.com",
        transition: "fade"
    },
    project3: {
        name: "Project 3",
        description: "This is project 3",
        link: "https://www.google.com",
        transition: "slide"
    }
}

// Step 6a. Display projects when we hover over a title
let projectsDisplayed = false;

function displayProjects() {
    if (!projectsDisplayed) {
        for (let project in projects) {
            document.getElementById("projects").innerHTML += "<a href='" + projects[project].link + "'>" + projects[project].name + "</a><br>";
        }
        projectsDisplayed = true;
    }
}
