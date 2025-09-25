import { Projects } from "./logic";
import { basicElementStructures } from "./structure";

export function projectListCRUD() {
    const form = document.querySelector('form');
    form.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents a full reload 

        // Form Values
        const input = document.querySelector('input[name="projectTitle"');
        const newProjectTitle = input.value;

        // Create project object
        let project = new Projects(newProjectTitle); 

        // Display project title in listing
        const titleDisplay = basicElementStructures.div(project.title);
        new basicElementStructures(titleDisplay, '.colOne');

        // Clear the input field after submission
        input.value = '';
    });
}

export function taskListCRUD() {

}