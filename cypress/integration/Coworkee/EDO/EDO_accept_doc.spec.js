
describe('Tab_Funksional', function () {
    before(() => {
        cy.clearLocalStorageSnapshot();
      });
    
      beforeEach(() => {
        cy.restoreLocalStorage();
        
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });
      after(() => {
        
        cy.clearLocalStorageSnapshot();
       
      });
    it('Auth with login', function () {
      cy.visit('http://'+Cypress.env('domen'))
      cy.url().should('include', 'oauth')
      cy.clearLocalStorage()
      cy.get('#otherMethod').click()
      cy.get('#addUser').click()
      cy.get('#loginName').type('micros')
      cy.get('#nextBtnToAuthPassword').click()
      cy.get('#loginPass').type('pass_micros24')
      cy.get('#logInWithLogin').click()
      cy.get('#keysProfile').find('li').eq(1) .click()
      cy.url().should('include', '#dashboard')
        
      
    });
    it('Open documents page', function () {
      
     
     cy.getComponentByTestId('leftmenu')
            
           
            .invoke('getEl')
            .its('dom').find('li').eq(1).click()
        cy.get('.top-menu-container-item')
        .should('satisfy', ($el) => {
          const classList = Array.from($el[0].classList); 
          return classList.includes('active')  
        }) 
        
     
            
        
           
    });
    it('open inbox tab', function () {

      cy.get('.top-menu-container-item').eq(1).click()
      cy.url().should('include', 'inbox')
 
        
    });
   
    it('create document', function () {
      

     
    cy.get('[data-cy=desktop_grid]')
    .find('.x-gridrow').eq(10).dblclick()
    cy.get('[data-cy=edo_dock_accept_button]').find('button').click()


    //  cy.wait(3000)
    //  cy.get('[data-cy=desktop_status_title]').click()
    //  cy.getGridByTestId('desktop_product_grid')
    //  .invoke('editRecordByIndexAndCellKeyValue', 0 , 'name', 'testCy' )
    //  cy.wait(1000)
    //  cy.get('[data-cy=desktop_save_button]').find('button').click()
    //  cy.get('[data-cy=desktop_status_title]').contains('Черновик')
     //.editRecordByIndexAndCellKeyValue()
     
  //   cy.getComboboxByTestId('desktop_contragent_tin').selectComboboxItemByIndex(0)desktop_save_button
   //  cy.get('[data-cy=desktop_choose_products_button]').find('button').click()

    // cy.getGridByTestId('products_grid').selectGridRowByIndex(6).dblclickSelectedRow()

    // cy.get('[data-cy=desktop_contragent_tin]').find('input').type('31810956520062')products_grid
     //cy.get('[data-cy=desktop_contragent_address]').find('input').type('Sergeli')desktop_choose_products_button
     


      
    });
 
      
        
   
  });
 
