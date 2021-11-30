
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


    it('create document', { scrollBehavior: false}, function () {
      cy.get('[data-cy=desktop_document_create_button]').find('button').click()
      
      //cy.getButtonByTestId('desktop_document_create_button').clickButton()
      cy.get('[data-cy=desktop_create_menu]').find('a').eq(0).click()
      cy.wait(2000)
      cy.url().should('include', 'edo/documents/invoice_v2')
      cy.get('[data-cy=desktop_input_document_number]').find('input').type('1234')
      cy.get('[data-cy=desktop_input_contract_no]').find('input').type('1234')
     // cy.getDateInputByTestId('desktop_input_contract_date').setDateToday()
     cy.get('[data-cy=desktop_input_contract_date]').find('input').type('11112021')
     cy.get('[data-cy=desktop_contragent_tin]').find('input').type('307882489')
     cy.wait(3000)
     cy.get('[data-cy=desktop_status_title]').click()
     cy.getGridByTestId('desktop_product_grid').as('gridprod')
    //  cy.get('@gridprod').invoke('getColumns').then((arr)=>{
    //   console.log(arr[1].getCell())

    //  })desktop_product_IKPU_cell
    cy.get('@gridprod').invoke('getEl').its('dom').find('.x-gridcell').eq(1).click()
     cy.get('[data-cy=desktop_productGrid_IKPU_select]').find('.x-expandtrigger').click()
     cy.get('span').contains('04819001007000000').click()
      cy.get('@gridprod').invoke('editRecordByIndexAndCellKeyValue', 0 , 'name', 'testProduct' )
      cy.get('@gridprod').invoke('getEl').its('dom').find('.x-gridcell').eq(4).click()
      cy.get('[data-cy=desktop_productGrid_unit_select]').find('.x-expandtrigger').click()
     
      cy.get('span').contains('штук').click()
      cy.get('@gridprod').invoke('editRecordByIndexAndCellKeyValue', 0 , 'price', 1)
      cy.get('@gridprod').invoke('editRecordByIndexAndCellKeyValue', 0 , 'amount', 1)
      cy.get('@gridprod').invoke('getEl').its('dom').find('.x-gridcell').eq(10).click()
      cy.get('@gridprod').invoke('getEl').its('dom').find('.x-gridcell').eq(10).click()
      cy.get('span').contains('15%').click()

    // cy.get('@gridprod').invoke('editRecordByIndexAndCellKeyValue', 0 , 'vat_total_sum', 1 )
   cy.wait(3000)
     cy.get('[data-cy=desktop_save_button]').find('button').click()
     cy.wait(3000)
    //  cy.get('[data-cy=desktop_status_title]').contains('Черновик')
     //.editRecordByIndexAndCellKeyValue()
     
  //   cy.getComboboxByTestId('desktop_contragent_tin').selectComboboxItemByIndex(0)desktop_save_button
   //  cy.get('[data-cy=desktop_choose_products_button]').find('button').click()

    // cy.getGridByTestId('products_grid').selectGridRowByIndex(6).dblclickSelectedRow()

    // cy.get('[data-cy=desktop_contragent_tin]').find('input').type('31810956520062')products_grid
     //cy.get('[data-cy=desktop_contragent_address]').find('input').type('Sergeli')desktop_choose_products_button
     


      
    });
 
      
        
   
  });
 
