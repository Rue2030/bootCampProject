class search{

    //search selectors
    get searchs() { return ('#search') }
    get itemsName() { return ('.css-12qzrsi') }
    get category() { return ('#category') }
    get itemText() { return ('.css-1ccau2i') }

    //Action Methods
        searchItem(term){
            cy.get(this.search).type(term)
        }

        filterItem(value){
            cy.get(this.category).select(value)
        }
    }
    export default new search();