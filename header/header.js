class Header {

  handleShoppingOpenPage () {
    shoppingPage.render()
  }

  render (counter) {
    const html = `
    <div class=" header__take">
      
    <div class="header__take1">
    <div class="header__item " onclick="HraderPage.handleShoppingOpenPage();"  >
   <h3>
     🛒
   </h3>
   </div>
    <div class="header__take1">
    <div class="basket-radius">
    <span>${counter}</span>
  </div>
 


    </div> 

  </div>
        
    `
    ROOT_HEADER.innerHTML = html
  }
}

const headerPage = new Header()

const productsStore = localStorageUtil.getProducts()
headerPage.render(productsStore.length)