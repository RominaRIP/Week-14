class CheckoutStepTwoPage {
  //Getters
  get summaryInfo () { return $('.summary_info') };
  get summarySubtotal () { return $('.summary_subtotal_label') };
  get summaryTax () { return $('.summary_tax_label') };
  get summaryTotal () { return $('.summary_total_label') };
  get cancelButton () { return $('#cancel')};
  get finishButton () { return $('#finish') }

  //Methods
  open () {
    return browser.url('https://www.saucedemo.com/checkout-step-two.html');
  }
};
export default new CheckoutStepTwoPage();