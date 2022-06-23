class CheckoutStepOnePage {
  //Getters
  get inputFirstName() {return $('#first-name')};
  get inputLastName() {return $('#last-name')};
  get inputZipCode() {return $('#postal-code')};
  get errorMsgContainer () {return $('.error-message-container.error')};

  get cancelButton() {return $('#cancel')};
  get continueButton() {return $('#continue')};

  //Setters
  async setFirstName(firstName) {
    await this.inputFirstName.setValue(firstName);
  };
  async setLastName(lastName) {
    await this.inputLastName.setValue(lastName);
  };
  async setZipCode(zipCode) {
    await this.inputZipCode.setValue(zipCode);
  };

  //Methods
  async completeFields(firstName, lastName, zipCode) {
    await this.setFirstName(firstName);
    await this.setLastName(lastName);
    await this.setZipCode(zipCode);
    await this.continueButton.click();
  }
  open() {
    return browser.url('https://www.saucedemo.com/checkout-step-one.html')
  }
};
export default new CheckoutStepOnePage();