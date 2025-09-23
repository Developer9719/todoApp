import '../styles/contentLayout.css';
import { createToDo, Projects } from './todoItemLogic.js';

let classList = [];

// Displaying content
export function display(parentElement = 'body', newElement = 'p', content, classes = [], ids) {
    const parent = document.querySelector(parentElement);

    if (!parent) {
        console.error(`Parent element '${parentElement}' not found.`);
        return; // Exit the function if the parent isn't found
    }

    const child = document.createElement(newElement);
    if (content != undefined) {
        child.textContent = content;
    }    

    // Add classes using forEach and the classList property
    if (Array.isArray(classes) && classes.length > 0) {
        classes.forEach(className => {
            child.classList.add(className);
        });
    }

    if (ids != undefined) {
        child.id = ids;
    }

    // Append the new element to the parent
    parent.appendChild(child);
}

// Visual design of the site
export function createLayout() {
    // Inspo: https://bordio.com/wp-content/themes/understrap/images/to-do-list/to-do-list-board-xl-1x.webp

    classList = ['content'];
    display('main', 'div', undefined, classList);
    // Left 20% of Page
    classList = ['leftSide']
    display('.content', 'div', undefined, classList);
    display('.leftSide', 'h2', 'Project List', undefined);

    // Right 80% of Page
    classList = ['rightSide'];
    display('.content', 'div', undefined, classList);
    display('.rightSide', 'h2', 'To-Do', undefined);

    // Footer
    display('footer', 'p', '&copy 2025 To Do App', classList);
}
 export function interaction() {
    // Create the form element with input to allow user to type the new project name 
    display('.leftSide', 'form', undefined, 'addNewProjectForm', undefined);
    const form = document.querySelector('form');
    form.setAttribute('method', 'POST');
    display('form', 'label', 'New Project Title: ', undefined, undefined);
    const label = document.querySelector('label');
    label.setAttribute('for', 'projectTitle');
    display('form', 'input', undefined, undefined, undefined);
    const input = document.querySelector('input');
    input.setAttribute('name', 'projectTitle');


    // Creates the button to add projects
    classList = ['interactionButtons', 'addProjectButton'];
    display('.leftSide', 'button', 'Add New Project', classList);

    // Testing module functionality with hard coded project name
    const newProjectButton = document.querySelector('.addProjectButton');
    let newProjectTitle = 'Testing Functionality on the Modules'; // Update this to use form inputs
    let createTheProject = new Projects(newProjectTitle);
    newProjectButton.addEventListener('click', createTheProject);

    // Displays all the projects and the to-do's for the current project
    console.log(createTheProject); // Displays the project before creating it, displays on load
    display('.leftSide', 'p', createTheProject.title, undefined, 'testProjectId'); 
 }