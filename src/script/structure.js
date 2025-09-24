import { display } from './interface.js';
import '../styles/structure.css';

export function htmlStructure() {
    // Customize HTML template for current project
    const siteTitle = 'To-Do App';
    document.title = siteTitle;

    // Build up main body structure
    const body = document.getElementsByTagName('body')[0];

    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);

    // Set up page title to be viewed on the page 
    display('header', 'h1', siteTitle, undefined);
}

// Basic Element Structure
/**
 * Store all needed HTML element structures in an object to allow for less display function calls
 */

export class basicElementStructures {
    constructor(blueprint, parentElement) { // Called when a new object of this class is created
        // Validation Rules
        if (!blueprint || !parentElement) { // Are the blueprint and parentElement varables empty
            console.log('Both the blueprint and parent elements are required.');
            return; // Exits the constructor 
        }

        this.build(blueprint, parentElement) // Calls the build method of this class
    }

    build(blueprint, parentElement) {
        // Validation Rules 
        const parent = document.querySelector(parentElement);
        if (!parent) { // If parent is undefined 
            console.log('Parent element not found.');
        } else if (!blueprint) { // If blueprint is not found
            console.log('Blueprint not found');
        }

        // Create the element
        const element = document.createElement(blueprint.tag);

        // Apply classes, id's and attributes to the new element
        if (blueprint.id) { // If blueprint object has id property
            element.id = blueprint.id;
        }
        
        if (blueprint.classes) { // If blueprint object has a class property
            blueprint.classes.forEach(className => {
                element.classList.add(className);
            });
        }

        if (blueprint.attributes) { // If blueprint object has an attribute property
            for (const attribute in blueprint.attributes) {
                element.setAttribute(attribute, blueprint.attributes[attribute]);
            }
        }

        if (blueprint.content) { // If blueprint object has a content property
            element.textContent = blueprint.content;
        }

        if (blueprint.children && Array.isArray(blueprint.children)) { // Checks if blueprint object has a children property and if its an array
            blueprint.children.forEach(childBlueprint => { // Loop over each child blueprint in the array
                this.build(childBlueprint, element); // Calls the build method again on each child lopping until all nested children have been build
            });
        }

        parent.appendChild(element); // Adds the new element to the DOM under the parent element
    }

    // Element Blueprints
    static div(content) {
        return {
            tag: 'div',
            content: content
        }
    }

    static form (label, buttonName) {
        return {
            tag: 'form',
            children: [
                {
                    tag: 'label',
                    content: label
                },
                {
                    tag: 'input'
                },
                {
                    tag: 'button',
                    content: buttonName
                }
            ]
        }
    }
}