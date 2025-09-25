export let currentProjects = [];

// A helper function to save projects to localStorage
function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(currentProjects));
}

// A helper function to load projects from localStorage
export function loadProjects() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        currentProjects = JSON.parse(storedProjects);
    }
}

// The Projects constructor function
export function Projects(title) {
    this.title = title;
    this.todos = [];

    // Push the new project object into the array
    currentProjects.push({
        title: this.title,
        todos: this.todos
    });

    // Save the updated array to localStorage
    saveProjects();
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
