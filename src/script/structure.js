import '../styles/structure.css';

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
        // Check if the parentElement is a string selector or an actual element object.
        const parent = typeof parentElement === 'string' 
                    ? document.querySelector(parentElement) 
                    : parentElement;

        // Validation Rules
        if (!parent) {
            console.error('Parent element not found.');
            return;
        } else if (!blueprint) {
            console.error('Blueprint not found.');
            return;
        }

        // Create the element
        const element = document.createElement(blueprint.tag);

        // Apply properties like classes, ID, attributes, and content.
        if (blueprint.id) {
            element.id = blueprint.id;
        }
        
        if (blueprint.classes) {
            blueprint.classes.forEach(className => {
                element.classList.add(className);
            });
        }

        if (blueprint.attributes) {
            for (const attribute in blueprint.attributes) {
                element.setAttribute(attribute, blueprint.attributes[attribute]);
            }
        }

        if (blueprint.content) {
            element.textContent = blueprint.content;
        }

        if (blueprint.children && Array.isArray(blueprint.children)) {
            blueprint.children.forEach(childBlueprint => {
                this.build(childBlueprint, element);
            });
        }

        parent.appendChild(element);
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

    static siteHeader(title) {
        return {
            tag: 'header',
            children: [
                {
                    tag: 'h1',
                    content: title
                }
            ]
        }
    }
}

export function basicHTML() {
    const header = basicElementStructures.siteHeader('To-Do List App');
    new basicElementStructures(header, 'body');
}

export function customizedLayout() {
    
}