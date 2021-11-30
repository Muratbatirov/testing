// describe('Auth', function () {

// //Требования для теста:
// //1)На компьютере должен быть установлен программа "Е имзо" и хотя бы один ЭЦП
//     it('Auth with EDS', function () {
//         cy.visit('http://ergfront')
//         cy.url().should('include', 'oauthfront/oauth')
//         cy.clearLocalStorage()
//         cy.get('.main__menu_with_ecp').find('li')
      
//         .click()
//         cy.exec('JavaApplication1.jar')
//         cy.url().should('include', '/#dashboard')
      
//     });
  

    
   
// });
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
    it('Auth with EDS', function () {
        cy.visit('http://ergfront')
        cy.url().should('include', 'oauthfront/oauth')
        cy.clearLocalStorage()
        cy.get('.main__menu_with_ecp').find('li')

      
        .click()
       cy.wait(3000)
        cy.task('nabor')
       
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
  //   it('Can delete contragent', function () {
  //       cy.get('[data-cy=tree]')
  //           .find('.x-gridrow').eq(1).find('.x-tool').click()
  //           //cy.get('.x-menuitem').eq(1).click()
  //           cy.get('div').contains('Удалить').click()
      


            
  //           cy.getButtonByTestId('contragent_confirm_delete_yes')
        
  //           .clickButton()
  //           cy.wait(5000)
  // //  cy.getComponentByTestId('leftmenu').then($component => console.log($component.getExtJSCmp()))
       
        
            
           
  //   });
  //   it('Can add group to root', function () {
    
  //       cy.getButtonByTestId('contragent_add_group_button')
        
  //       .clickButton()    
  //       cy.getInputByTestId('contragent_group_input')
  //       .writeTextInput('Cypress_group')
  //       cy.getButtonByTestId('contragent_add_save')
        
  //       .clickButton()   
  //       cy.wait(5000)   
  //         });
  //    it('Can add group to nested folder', function () {
    
  //           cy.getButtonByTestId('contragent_add_group_button')
            
  //           .clickButton()
  //           cy.getComponentByTestId('contragent_group_select')  
  //           .invoke('getEl')
  //           .its('dom').find('.x-icon-el').click()  
  //           cy.get('.for_test').eq(1).click()
  //           cy.getInputByTestId('contragent_group_input')
  //           .writeTextInput('Cypress_group2')
  //           cy.getButtonByTestId('contragent_add_save')
            
  //           .clickButton()   
                     
  //             });         
        
   
  });
  // describe('Products', function () {
  //   before(() => {
  //       cy.clearLocalStorageSnapshot();
  //     });
  //     after(() => {

  //       cy.clearLocalStorageSnapshot();
  //     });
    
  //     beforeEach(() => {
  //       cy.restoreLocalStorage();
        
  //     });
  //     afterEach(() => {
  //       cy.saveLocalStorage();
  //     });
  //   it('Auth with EDS', function () {
  //       cy.visit('http://ergfront/#warehouse/products')
  //       cy.url().should('include', 'oauthfront/oauth')
  //       cy.clearLocalStorage()
  //       cy.get('.main__menu_with_ecp').find('li')

      
  //       .click()
  //       console.log( cy.get('.main__menu_with_ecp'))
  //       cy.exec('JavaApplication1.jar')
  //       cy.url().should('include', '/#warehouse')
        
      
  //   });
  //   it('Can add product', function () {
  //       cy.get('[data-cy=tovar_add_button]')
        
            
  //       .click()
            
           
  //       cy.getInputByTestId('tovar_input_name')
  //                   .writeTextInput('tovar2')
        
    
  //                   cy.getButtonByTestId('tovar_save_button')
        
  //                                .clickButton()
        
       
  //           cy.wait(5000)
           
  //      //tovar_save_button
        
           
  //   });
    
   
  // });
