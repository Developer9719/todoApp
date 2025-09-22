import '../styles/contentLayout.css';

// Displaying content
export function display(parentElement = 'body', newElement = 'p', content, classes = []) {
    const parent = document.querySelector(parentElement);

    if (!parent) {
        console.error(`Parent element '${parentElement}' not found.`);
        return; // Exit the function if the parent isn't found
    }

    const child = document.createElement(newElement);
    if (content != undefined) {
        child.textContent = content;
    }    

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

    let classList = ['content'];
    display('main', 'div', undefined, classList);
    // Left 20% of Page
    classList = ['leftSide']
    display('.content', 'div', undefined, classList);
    display('.leftSide', 'h2', 'Project List', undefined);

    // Right 80% of Page
    classList = ['rightSide'];
    display('.content', 'div', undefined, classList);
    display('.rightSide', 'h2', 'To-Do', undefined);

    // Footer
    display('footer', 'p', '&copy 2025 To Do App', classList);
}