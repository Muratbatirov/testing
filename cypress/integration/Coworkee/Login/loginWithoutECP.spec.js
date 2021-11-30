describe('New organization', function () {

 


    it('Can authorize', function () {
            
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
            
            cy.get('#keysProfile').find('li').eq(2) .click()
            cy.url().should('include', '/#dashboard')
            


            // cy.getButtonByTestId('testtest')
            // .clickButton()cy.login()
    });
   
});
