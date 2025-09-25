// In pageLoad.js
import { currentProjects, loadProjects } from "./logic.js";
import { basicElementStructures, customizedHTML } from "./structure.js";

(function() {
    // 1. Build the basic page structure first.
    customizedHTML();

    // 2. Load existing projects from localStorage.
    loadProjects();

    // 3. Get the specific container where projects should be displayed.
    const projectsContainer = document.getElementById('project-list-container');
    
    // Check if the container exists before trying to add elements.
    if (projectsContainer) {
        // For Testing Purposes to clear the array
        //currentProjects.length = 0;
        // 4. Iterate over the loaded projects and render them into the container.
        currentProjects.forEach(project => {
            const projectBlueprint = basicElementStructures.div(project.title);
            
            // Build the project element and append it to the specific container.
            new basicElementStructures(projectBlueprint, projectsContainer);
        });
    }

    
})();

