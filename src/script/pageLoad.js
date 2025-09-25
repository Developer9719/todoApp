import { currentProjects } from "./logic";

(function () {
    /* Find all current projects and there to-do's stored in a JSON string in localStorage (JS Property) */
    const projects = localStorage.getItem('projects');

    if (projects) {
        JSON.parse(projects);
        // Push each project object into there own object from the Projects class
    }

})();