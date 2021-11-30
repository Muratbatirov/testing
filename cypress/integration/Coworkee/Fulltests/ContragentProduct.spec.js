
describe('Contragent', function () {
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
      cy.visit('http://ergfront')
      cy.url().should('include', 'oauthfront/oauth')
      cy.clearLocalStorage()
      cy.get('#otherMethod').click()
      cy.get('#addUser').click()
      cy.get('#loginName').type('micros')
      cy.get('#nextBtnToAuthPassword').click()
      cy.get('#loginPass').type('pass_micros24')
      cy.get('#logInWithLogin').click()
      cy.get('#keysProfile').find('li').eq(1) .click()
      cy.url().should('include', '/#dashboard')
        
      
    });
    it('Can add contragent', function () {
      
     
     cy.getComponentByTestId('leftmenu')
            
           
            .invoke('getEl')
            .its('dom').find('li').eq(3).click()
            cy.getButtonByTestId('testtest')
        
        .clickButton()
        
        cy.get('input[data-componentid="ext-textfield-4"]').type('Cypress_test')
        cy.get('input[data-componentid="ext-textfield-5"]').type('264841112')
        cy.get('button[data-componentid="ext-button-98"]').click()
            cy.wait(5000)
           
            
        
           
    });
    it('Can delete contragent', function () {
      cy.getTreeGridByTestId('tree').then((component) => 
      {let index= component.component.getRootNode().childNodes.length-1;
         cy.wrap(component)
         .invoke('getEl').its('dom').find('.x-gridrow').eq(index).find('.x-tool').click()
         cy.get('.x-menuitem')
         .find('div').contains('Удалить').click()
         cy.getButtonByTestId('contragent_confirm_delete_yes')
        
             .clickButton()
             cy.wait(5000)
      }
       )
      
            // .find('.x-gridrow').eq(1).find('.x-tool').click()
            // //cy.get('.x-menuitem').eq(1).click()
            // cy.get('div').contains('Удалить').click()
      


            
            
  //  cy.getComponentByTestId('leftmenu').then($component => console.log($component.getExtJSCmp()))
       
        
 
           
    });
    it('Can add group to root', function () {
    
        cy.getButtonByTestId('contragent_add_group_button')
        
        .clickButton()    
        cy.getInputByTestId('contragent_group_input')
        .writeTextInput('Cypress_group')
        cy.getButtonByTestId('contragent_add_save')
        
        .clickButton()   
        cy.wait(5000)   
          });
     it('Can add group to nested folder', function () {
    
            cy.getButtonByTestId('contragent_add_group_button')
            
            .clickButton()
            cy.getComponentByTestId('contragent_group_select')  
            .invoke('getEl')
            .its('dom').find('.x-icon-el').click()  
            cy.get('.for_test').eq(1).click()
            cy.getInputByTestId('contragent_group_input')
            .writeTextInput('Cypress_group2')
            cy.getButtonByTestId('contragent_add_save')
            
            .clickButton()   
            cy.wait(2000)       
              });         
        
   
  });
  describe('Products', function () {
    before(() => {
        cy.clearLocalStorageSnapshot();
      });
      after(() => {

        cy.clearLocalStorageSnapshot();
      });
    
      beforeEach(() => {
        cy.restoreLocalStorage();
        
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });
    it('Auth with login', function () {
      cy.visit('http://ergfront')
      cy.url().should('include', 'oauthfront/oauth')
      cy.clearLocalStorage()
      cy.get('#otherMethod').click()
      cy.get('#addUser').click()
      cy.get('#loginName').type('micros')
      cy.get('#nextBtnToAuthPassword').click()
      cy.get('#loginPass').type('pass_micros24')
      cy.get('#logInWithLogin').click()
      cy.get('#keysProfile').find('li').eq(1) .click()
      cy.url().should('include', '/#dashboard')
        
      
    });
    it('Can add product', function () {
      cy.getComponentByTestId('leftmenu')
            
           
            .invoke('getEl')
            .its('dom').find('li').eq(5).click()
        cy.get('[data-cy=tovar_add_button]')
        
            
        .click()
            
        cy.wait(2000)   
        cy.getInputByTestId('tovar_input_name')
                    .writeTextInput('tovar2')
        
                    cy.getComponentByTestId('tovar_catalog_select')  
                    .invoke('getEl')
                    .its('dom').find('.x-icon-el').click()  
                    cy.get('.for_test').eq(1).click()
                    cy.getButtonByTestId('tovar_save_button')
        
                                 .clickButton()
        
             
            cy.wait(5000)
           
       //
        
           
    });
    
   
  });
