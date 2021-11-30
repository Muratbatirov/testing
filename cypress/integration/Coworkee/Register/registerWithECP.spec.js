describe('New organization', function () {
//Требования для теста:
//1)На компьютере должен быть установлен программа "Е имзо" и хотя бы один ЭЦП
    it('Auth with EDS', function () {
        cy.visit('http://ergfront')
        cy.url().should('include', 'oauthfront/oauth')
        cy.clearLocalStorage()
        cy.get('#register').click()
        cy.get('#regWithECP').click()
        cy.get('.main__menu_with_ecp').find('li').click()
        cy.get('#regNextBtn').click()
        cy.get('#regLoginEmail').type("test@email.com")
        cy.get('#regLoginPhone').type("+998901234567")
        cy.get('#regLogin').type("testLogin")
        cy.get('#regPass').type("12345678")
        cy.get('#regCheckPass').type("12345678")
        cy.get('#logInWithReg').click()
        //cy.url().should('include', '/#dashboard')

      
    });


    
   
});
