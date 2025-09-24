import '../styles/contentLayout.css';
import { createToDo, Projects } from './logic.js';

let classList = [];

// Displaying content
export function display(htmlElementNeeded = 'div', nested = false, parentElement) {
    // Rework this function to optimize usage
    /**
     * Right now I call this function 10 times or more in 15 lines of code 
     * Rework it so i can call it once to have it generate everything at once
     * - IE: Call once to generate a form with an input and a button instead of calling once for each element  
     */

    // Validation Rules
    let validationPassResult = false;
    if (nested == true && parentElement != undefined || nested == true && parentElement == '') {
        validationPassResult = true;
    }

    // Basic Element Structure

}

// Visual design of the site
export function createLayout() {
/*    // Inspo: https://bordio.com/wp-content/themes/understrap/images/to-do-list/to-do-list-board-xl-1x.webp

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
    display('footer', 'p', '&copy 2025 To Do App', classList);*/
}
    
export function interaction() {
/*    // CRUD: Create and Read actions
    // 1. Create the form and its elements
    const form = display('.leftSide', 'form', undefined, 'addNewProjectForm');

    display('form', 'label', 'New Project Title:', 'formLabel');
    display('form', 'input', undefined, 'formInput').setAttribute('name', 'projectTitle');

    // 2. Creates the button to add projects
    const projectButton = display('.leftSide', 'button', 'Add New Project', ['interactionButtons', 'addProjectButton']);

    // 3. Add a submit event listener to the form itself
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission (full page reload)
        event.preventDefault();

        // 4. Get the value from the input field
        const inputElement = form.querySelector('input[name="projectTitle"]');
        const newProjectTitle = inputElement.value;

        // 5. Create a new object for the project
        const createTheProject = new Projects(newProjectTitle);

        // 6. Displays the new project's title
        display('.leftSide', 'a', createTheProject.title, [], 'project').setAttribute('href', `${createTheProject.title}`); 
        // Href tag uses a id. This id will clear the right side to display only the to-do's associated with the current project
        classList = ['editButton'];
        display('.leftSide', 'a', 'Edit', classList, undefined);
        classList = ['deleteButton'];
        display('.leftSide', 'a', 'Delete', classList, undefined).setAttribute('href', `delete-${createTheProject.title}`);
        display('.leftSide', 'br', undefined, undefined, undefined);

        // Clear the input field after submission
        inputElement.value = '';
    });

    /* CRUD: Update and Delete actions */
    /* Edit: */
    // Get the href value of the a tag for the selected element 
    // Replace a tag with form input element
    // On enter key press update name in object


    /* Delete: */
    // Get the href value of the a tag for the selected element 
    // Delete element object
    // Remove project from the UI    

    // ? Refactor this to work for adding projects and there tasks ? */
}

