export function testingConnection() {
    console.log('Hello from JS');
    const body = document.getElementsByTagName('body')[0];
    const titleDisplay = document.createElement('h1');
    const title = 'Hello from JS';
    titleDisplay.textContent = title;

    body.appendChild(titleDisplay);
}