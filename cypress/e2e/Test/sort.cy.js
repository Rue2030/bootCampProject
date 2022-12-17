import itemData from '../Data/items.data'
import itemPage from '../Page/item.page'

describe('Search test cases', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
        cy.get("#login-text").should('contain', 'Welcome to the Automation Camp Store');
        cy.get("#signInOrRegister").click();    
        cy.get("[name='email']").type("rrrtester011@test.com");
        cy.get("[name='password']").type("Password@1");
        cy.get("[name='submit']").click();

    })
  
    it('Verify user can filter by category', () => {

        cy.get('#category').select(1);
        cy.wait(3000)
        cy.get('.css-1ccau2i').should('contain', 'shirt');
        cy.get('.css-1ccau2i').contains('hat').should('not.exist');
        cy.get('.css-1ccau2i').contains('pants').should('not.exist');
        cy.get('.css-1ccau2i').contains('shoes').should('not.exist');
        cy.get('.css-1ccau2i').contains('couch').should('not.exist');
        cy.get('.css-1ccau2i').contains('laptop').should('not.exist');
    })

    it('should be able to sort product list from A to Z', () => {
        
        cy.get('#category').select(1);
        cy.wait(3000)
        itemPage.selectSort(itemData.sort['A to Z'])

        //Sort data list from Z to A based on name
        itemData.items.sort()
        cy.wait(3000)

        cy.get(itemPage.itemsName).each(($elem, index) => {
            expect($elem.text()).equal(itemData.items[index].name)
        })
    })

    it('should be able to sort product list from Z to A', () => {
        
        cy.get('#category').select(1);
        cy.wait(3000)
        itemPage.selectSort(itemData.sort['Z to A'])

        //Sort data list from Z to A based on name
        itemData.items.sort().reverse()
        cy.wait(3000)

        cy.get(itemPage.itemsName).each(($elem, index) => {
            expect($elem.text()).equal(itemData.items[index].name)
        })
    })

    
})