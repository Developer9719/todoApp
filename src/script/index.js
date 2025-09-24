import './pageLoad.js' // Runs the IIFE to check for save projects and there to-do's in a JSON string in localStorage
import  { basicHTML, customizedLayout } from './structure.js';

// Create the basic and customized page layout
basicHTML();
customizedLayout();