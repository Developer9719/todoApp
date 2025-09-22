import { display } from "./interface";

// Object constructors vs factory functions is simply a matter of preference.

// Projects: Object Constructors
/**
 * Creates multiple objects with the same properties and methods
 * Create an object constructor with a regular function and a capital letter on the name 
 * Use the this keyword to assign properties and methods to the new object that will be created
 * 
 * Create a new Projects object: const projectOne = new Projects('Project Title');
 * console.log(projectOne); - Will output { title: 'Project Title' }
 */
function Projects(title) {
    this.title = title;
    this.todos = [];
}

// Creating to do items: Factory Function
/**
 * Creates and returns a new object that does not require using the new keyword
 * Create new todo: const myNewTodo = createToDo('Finish Homework', 'Complete math problems', '2025-09-22', 'high');
 * 
 * console.log(myNewTodo.title); // "Finish Homework"
 * console.log(myNewTodo.isComplete); // false
 * 
 * myNewTodo.toggleComplete();
 * console.log(myNewTodo.isComplete); // true
 */
const createToDo = (title, description, dueDate, priority) => {
    return { // This is the returned object litteral
        title,
        description,
        dueDate,
        priority,
        notes,
        isComplete: false,
        toggleComplete() {
            this.isComplete = !this.isComplete;
        },
    };
};

// App Manager: Class
/**
 * Create a new instance of the AppManager
 * const myApp = new appManager();
 * 
 * Call the addProject method to add a new project
 * myApp.addProject({ title: 'Work Tasks' });
 * 
 * Call the getProjects method to see the data
 * console.log(myApp.getProjects()); // Output: [{ title: 'Work Tasks' }]
 */
class AppManager { // PascalCase: This is the convention for class names
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
