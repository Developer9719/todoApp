// Displaying content
export function display(parentElement = 'body', newElement = 'p', content = 'New content', classes = []) {
    const parent = document.querySelector(parentElement);

    if (!parent) {
        console.error(`Parent element '${parentElement}' not found.`);
        return; // Exit the function if the parent isn't found
    }

    const child = document.createElement(newElement);
    child.textContent = content;

    // Add classes using forEach and the classList property
    if (Array.isArray(classes) && classes.length > 0) {
        classes.forEach(className => {
            child.classList.add(className);
        });
    }

    // Append the new element to the parent
    parent.appendChild(child);
}

// Visual design of the site
export function createLayout() {
    // Inspo: https://bordio.com/wp-content/themes/understrap/images/to-do-list/to-do-list-board-xl-1x.webp
}