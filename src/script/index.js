import './pageLoad.js'; // Runs the IIFE
import './structure.js'; // Setups up the basic structure
import  { createLayout, interaction } from './interface.js';

// Called after structure is loaded 
createLayout(); // Create the customized layout
interaction(); // Add user interaction 