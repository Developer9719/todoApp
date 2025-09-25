import '../styles/structure.css';
import '../styles/contentLayout.css';
import { projectListCRUD, taskListCRUD } from './userInteraction';

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
            children: [
                {
                    tag: 'p',
                    content: content
                }
            ]
        }
    }

    static form (label, buttonName, connection) {
        return {
            tag: 'form',
            children: [
                {
                    tag: 'label',
                    content: label,
                    attributes: {
                        for: connection 
                    }
                },
                {
                    tag: 'input',
                    attributes: {
                        name: connection
                    }
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

    static twoColumnLayout(classParent, classChildren, colOneTitle, colTwoTitle, formBlueprint) {
        // The formBlueprint parameter is now included
        const colOneChildren = [
            {
                tag: 'h2',
                content: colOneTitle
            },
        ];

        // If a form blueprint is provided, add it to the children array.
        if (formBlueprint) {
            colOneChildren.push(formBlueprint);
        }
        
        // Add the project list container
        colOneChildren.push({
            tag: 'div',
            id: 'project-list-container'
        });

        return {
            tag: 'div',
            classes: classParent,
            children: [
                {
                    tag: 'div',
                    classes: [classChildren, 'colOne'],
                    children: colOneChildren
                },
                {
                    tag: 'div',
                    classes: [classChildren, 'colTwo'],
                    children: [
                        {
                            tag: 'h2',
                            content: colTwoTitle
                        }
                    ]
                }
            ]
        };
    }

    static footer(content) {
        return {
            tag: 'footer',
            children: [
                {
                    tag: 'p',
                    content: content
                }
            ]
        }
    }
}

export function customizedHTML() {
    let content = '';

    /* Basic Header */
    const header = basicElementStructures.siteHeader('To-Do List App');
    new basicElementStructures(header, 'body');

    /* Customized Content */
    const colOneTitle = 'Project Listing';
    const colTwoTitle = 'Project Tasks';

    // Create the form blueprint first.
    const projectFormBlueprint = basicElementStructures.form('New Project Name: ', 'Submit Project', 'projectTitle');

    // Create 2 column layout, passing the form blueprint as an argument.
    const twoColumns = basicElementStructures.twoColumnLayout(
        ['gridParent'],
        ['gridChild'],
        colOneTitle,
        colTwoTitle,
        projectFormBlueprint // This is the new parameter
    );
    new basicElementStructures(twoColumns, 'body');


    // Calls project and task user interaction script to run
    projectListCRUD();
    taskListCRUD();

    /* Basic Footer */
    content = '&copy 2025 - To-Do App Project';
    const footer = basicElementStructures.footer(content);
    new basicElementStructures(footer, 'body');
}