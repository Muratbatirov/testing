// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import { configure } from '@testing-library/cypress'
import './commands'
import "cypress-localstorage-commands"

configure({ testIdAttribute: 'data-cy' })

Cypress.on('uncaught:exception', (error) => {
  // return !(error.message.includes('crossorigin') || error.message.includes('client_id'));
  return false;
})

Cypress.Cookies.defaults({
preserve: 'SESSION'
})
beforeEach(() => {

Cypress.env('token', []);
Cypress.env('profil_data', []);


});
Cypress.Commands.add('loginWithoutECP', (overrides = {}) => {
  cy.visit('http://ergfront')
            cy.url().should('include', 'oauthfront/oauth')
            cy.clearLocalStorage()
            cy.get('#otherMethod').click()
            cy.get('#addUser').click()
            cy.log("res")
            cy.get('#loginName').type('micros')
            cy.get('#nextBtnToAuthPassword').click()
            cy.get('#loginPass').type('pass_micros24')
            cy.get('#logInWithLogin').click()
            
            cy.get('#keysProfile').find('li').eq(1) .click()
            cy.url().should('include', '/#dashboard')
            


            
});

Cypress.Commands.add('get_token', (overrides = {}) => {
  return new Promise(function (resolve, reject) {
const method = 'POST';
const url = 'http://oauth/api/login';


        const formData = new FormData();

        formData.set("username", "murat");
        formData.set("password", "M343D566");
        formData.set("client_id", 2);
        formData.set("client_secret", "gDjnesoiVW3sLsKAmMaZbYJqV7wNGgCXll2WQTu3");
        formData.set("grant_type", "password");
        formData.set("scope", "company user profile person");

        // Perform the request
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
          Cypress.env('token').push(JSON.parse(xhr.response).access_token);
          const xhr2 = new XMLHttpRequest();
          xhr2.open("GET", "http://oauth/api/profiles");
          xhr2.setRequestHeader("Authorization",`Bearer ${JSON.parse(xhr.response).access_token}` );

          xhr2.onload = function () {
            Cypress.env('profil_data').push(JSON.parse(xhr2.response).data[0]);
            resolve({profildata:Cypress.env('profil_data'),
                     token:    Cypress.env('token')
          });
            };
                xhr.onerror = function () {

          };
        xhr2.send();
        };
        xhr.onerror = function () {
            
        };
        xhr.send(formData);})
});

