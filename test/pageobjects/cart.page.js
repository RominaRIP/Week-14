class CartPage {
  //Getters
  get checkoutButton () { return $('#checkout') };
  get continueShopButton() {return $('#continue-shopping')};
  get cartItemName () { return $('#item_4_title_link') };
  get cartItemDesc () { return $ ('.inventory_item_desc') };
  get cartItemPrice () { return $('.item_pricebar') };
  get cartQuantity () { return $('.cart_quantity') };
  get cartBadge () {return $('.shopping_cart_badge')}

  //Methods
  open() {
    return browser.url('https://www.saucedemo.com/cart.html')
  }
};
export default new CartPage();