import './pageLoad.js'; // Runs the IIFE
import { htmlStructure } from './structure.js'; 
import  { createLayout, interaction } from './interface.js';
import { basicElementStructures } from './structure.js';

htmlStructure(); // Setups up the basic structure
createLayout(); // Create the customized layout
interaction(); // Add user interaction 

const createDiv = basicElementStructures.div('Testing Class. Class working for div at least'); // Dynamically creates element blueprint
new basicElementStructures(createDiv, 'main'); // Creates the new element