// Object Constructors
export let currentProjects = [];

export function Projects(title) {
    this.title = title;
    this.todos = [];

    // Add new objects to an array of objects
    currentProjects.push(
        {
            title: this.title,
            todos: this.todo
        }
    )

    // Store the current project to the end of the localStorage string as JSON 
    const projects = localStorage.getItem('projects');

    if (projects) {
        JSON.parse(projects);
        // Push each project object into there own object from the Projects class
    } else {
        // Start a new array of objects 


        // Save this array of objects in a JSON string in localStorage
    }

}

// Grab all Projects object to store in a JSON string inside a localStorage JS string




// Factory Function
export const createToDo = (title, description, dueDate, priority) => {
    return { // This is the returned object litteral
        title,
        description,
        dueDate,
        priority: ['low', 'medium', 'high'],
        notes,
        isComplete: false,
        toggleComplete() {
            this.isComplete = !this.isComplete;
        },
        changePriority(currentPriorityLevel = 'low', newPriorityLevel) {
            if (newPriorityLevel != currentPriorityLevel) {
                priority = newPriorityLevel;
            } else {
                alert(`Can not change priority level ${currentPriorityLevel} to ${newPriorityLevel} as it's the same`);
            }
        },
        displayList(Projects) {

        }
    };
};

// Class
class AppManager { 
    constructor() { // Automatically called when using the new keyword to create a new object of the class
        this.projects = [];
    }
    // The bottom 2 are instance methods that can be called on any created object
    addProject(project) { // projects is an object
        this.projects.push(project);
    }

    getProjects() {
        return this.projects;
    }
}
