class item{

    //Item selectors
    get itemsName() { return ('.chakra-text.css-1n64n71') }
    get itemsPrice() { return ('.chakra-stack.css-1ieohnc>p') }
    get sortDropDown() { return ('#sort') }
    get category() { return ('#category') }
    get itemText() { return ('.css-1ccau2i') }

  
    //Action Methods
        selectSort(sort){
            cy.get(this.sortDropDown).select(sort)
        }

        applySelectorFormat(itemName){
            return itemName.toLowerCase().replaceAll(' ', '-')
        }

    }
    export default new item();