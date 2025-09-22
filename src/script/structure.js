import { display } from './interface.js';
import '../styles/structure.css';

// Customize HTML template for current project
const siteTitle = 'To-Do';
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