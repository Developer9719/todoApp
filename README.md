# todoList
*** This is a breakpoint in the lessons, this will show everything I've learned (listed below) in action and I will come back to this for help with these topics in the future ***

Use this project to practice everything I learned so far:
- CSS Grid and/or Flexbox
- Object, Object Literals, Object Constructors
- Factory Functions and IIFE modules
- Classes
- ES6 Modules
  - seperate script files that make use of imports and exports 
- NPM
  - to install packages for use in the project
- Webpack
  - bundles project code and dependancies and assets like CSS and images into smaller, optimized bundles for the browser to read
  - starts with the defined entry point to create a dependancy graph by tracing imports for modules (seperate script files) and assets in the project
  - loaders are used to process non JS code 
  - plugins can be used to expand functionality for things like minimizing code
  - after all this it outputs a bundle code for the browser
- JSON 
- OOP Principles 

Log terminal commands used
- Webpack Commands
  
  - npm init -y: Creates a package.json which stores all dependancies of the project, defines scripts to automatically run tasks at certain points amount other jobs
    - main property is the entry point for a package or module, and is loaded first when the package is used 
  - npm install --save-dev webpack webpack-cli
    - installs and saves webpack and the webpack-cli as dev dependancies, this updates in package.json automatically and creates a node_modules folder as well as creating a package-lock.json ()
  - npm install webpack-dev-server: Installs a dev server with live reload into the project and adds this into the package.json as well
  - npm install webpack-merge
  - npm install html-webpack-plugin: Installs the HTMLWebpackPlugin which uses the output bundle file in the package.json file as the script tag in the HTML. It does this automatically

  - npm install css-loader: Converts CSS to JS, handles url() images. The purpose is to apply styles per module as opposed to globally in 1 stylesheet (outputs a string)
  - npm install style-loader: Takes the string from css-loader and applies the styles
    - Write CSS in its own file
    - Import the file into the JS module where it's needed

  - "openServer": "npx webpack serve --config webpack.dev.js": Custom script created in package.json to start the server

  - npx webpack serve --config webpack.dev.js: Starts the live server with the live reload. This one is need as opposed to npx webpack serve because there is no webpack.config.js file and it is instead split into 3 files
    - You wont see the dist folder or files within it during development as it creates those in memory, they only appear after production or running npm run build

Other Information 
- 