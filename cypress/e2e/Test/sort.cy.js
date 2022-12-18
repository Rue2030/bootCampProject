import itemData from '../Data/items.data'
import itemPage from '../Page/item.page'
import auth from '../Page/auth.page'


describe('Sort test cases', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
      cy.get(auth.registerBtn).click();
      auth.signIn('rrrtester011@test.com', 'Password@1')

    })
  
    it('Verify user can filter by category', () => {

        cy.get(itemPage.category).select(1);
        cy.wait(3000)
        cy.get(itemPage.itemText).should('contain', 'shirt');
        cy.get(itemPage.itemText).contains('hat').should('not.exist');
        cy.get(itemPage.itemText).contains('pants').should('not.exist');
        cy.get(itemPage.itemText).contains('shoes').should('not.exist');
        cy.get(itemPage.itemText).contains('couch').should('not.exist');
        cy.get(itemPage.itemText).contains('laptop').should('not.exist');
    })

    it('should be able to sort product list from A to Z', () => {
        
        cy.get(itemPage.category).select(1);
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
        
        cy.get(itemPage.category).select(1);
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