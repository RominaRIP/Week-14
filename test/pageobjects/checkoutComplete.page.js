class CheckoutCompletePage {
  //Getters
  get completeContainer () { return $('#checkout_complete_container') };
  get completeHeader () { return $('.complete-header') };
  get completeText () { return $('.complete-text') };
  get completeImg () { return $('.pony_express') };
  get backButton () { return $('#back-to-products')};

  //Methods
  open () {
    return browser.url('https://www.saucedemo.com/checkout-complete.html');
  }
};
export default new CheckoutCompletePage();