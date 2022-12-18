# bootCampProject
Final Project Bootcamp

The is the project for the UI Automated Bootcamp


Dependencies

NodeJS v12, v14 or above
NPM v6 or above
Chrome browser


Getting Started

Install dependencies and packages

$ npm install

$ npm install @faker-js/faker --save-dev

$ npm install cypress-iframe --save

Note: For iframes add "require('cypress-iframe');" to your commands.js


Folder Structure

cypress/e2e/Page: Page files will be added here

cypress/e2e/Data: Data files will be added here

cypress/e2e/test: Test files will be added here


Execute tests

Execute the Cypress GUI

npx cypress open


Execute the Cypress via commandline

npx cypress run 


Executes all tests in the Chrome browser and generates a Mochawesome report.

npm test


Execute a specific test file

Without Report

npx cypress run --spec cypress/e2e/test/cart.cy.js

OR

With Report

npm run test:spec cypress/e2e/test/cart.cy.js
