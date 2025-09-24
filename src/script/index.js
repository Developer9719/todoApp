import './pageLoad.js'; // Runs the IIFE
import { htmlStructure } from './structure.js'; 
import  { createLayout, interaction } from './interface.js';

htmlStructure(); // Setups up the basic structure
createLayout(); // Create the customized layout
interaction(); // Add user interaction 