# cypress-tests

This repo contains e2e tests written in Cypress 

### Introduction to Cypress
Cypress is a relatively new automated tests tool which is gaining popularity at a very rapid pace

Here is the home page for Cypress if someone wants to look it up

https://www.cypress.io/

Cypress has very strong documentation so a new comer could find most of the information from their own site

https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell

Also as a starting point it would be good to go through these tutorial videos

https://docs.cypress.io/examples/examples/tutorials.html#Best-Practices

### E2E Tests Repos
This repo is meant to contain a sample for e2e tests

### Protocols for Test Design

In the this project, the following approach was used:

Page Object model is used in spite of what Cypress site says, it increases readability of code and is much easier to manage

Cypress commands and helper functions are still utilized

To manage multiple projects customized config files are used so user is able to run any project without making any change in the code

Config files for projects are placed here

https://github.com/leraroy/cypress-tests/blob/master/cypress.test.config.js

and

https://github.com/leraroy/cypress-tests/blob/master/cypress.config.js


### Test Setup

1. Clone this repository
2. To run tests "npm tests:run"

##### To see reports without installation
Go to this link to see Allure report: https://leraroy.github.io/cypress-tests/


