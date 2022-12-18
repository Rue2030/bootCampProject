import auth from '../Page/auth.page'
import search from '../Page/search.page'

describe('Search test cases', () => {
    beforeEach(() => {
      cy.visit('/')
        
      //Login to account
      cy.get(auth.registerBtn).click();
      auth.signIn('rrrtester011@test.com', 'Password@1')

    })
  
    it('Verify user can search valid item name', () => {

        //search data
        search.searchItem('Quality Trucker Hat');

        //assert item found
        cy.get(search.itemsName).should('contain', 'Quality Trucker Hat');
    })

    it('Verify user can search invalid item name', () => {

        //search value that doesnt exist
        search.searchItem('No Data');

        //assert no data found
        cy.get(search.itemsName).should('be.empty');

    })

    it('Verify user can search filtered option', () => {

        //filter and search
        search.filterItem(1)
        search.searchItem('Quality Sweatshirt');
        
        cy.get(search.itemsName).should('contain', 'Quality Sweatshirt');

        //search and search the search field
        cy.get(search.searchs).clear();
        search.searchItem('Quality Trucker Hat');
        
        //assert its empty
        cy.get(search.itemsName).should('be.empty');
    })
})