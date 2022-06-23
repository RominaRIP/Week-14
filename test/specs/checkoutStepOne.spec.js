import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import CartPage from '../pageobjects/inventory.page';
import Header from '../pageobjects/header.page'
import CheckoutStepOnePage from '../pageobjects/checkoutStepOne.page';

describe ('Test step one in checkout process', () => {
  beforeAll('Login and open checkout step one page', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user','secret_sauce');
    await InventoryPage.addAll();
    await Header.cartButton.click();
  });

  it ('Test display elements in header and footer', async () => {
    await expect(Header.logoImg).toExist()
    await expect(Header.sidebarMenu).toExist()
    await expect(Header.cartButton).toExist()
    await expect(InventoryPage.titleHeading).toExist()
    await expect(InventoryPage.twitterLink).toBeClickable();
    await expect(InventoryPage.twitterLink).toHaveLink('https://twitter.com/saucelabs');
    await expect(InventoryPage.facebookLink).toBeClickable();
    await expect(InventoryPage.facebookLink).toHaveLink('https://www.facebook.com/saucelabs');
    await expect(InventoryPage.linkedinLink).toBeClickable();
    await expect(InventoryPage.linkedinLink).toHaveLink('https://www.linkedin.com/company/sauce-labs/');
    await expect(InventoryPage.footerCredits).toExist()
    await expect(InventoryPage.footerImg).toExist()
  });

  describe('Test the input fields', () => {
    it('Empty first name field should display an error message', async () => {
      await CheckoutStepOnePage.open();
      await CheckoutStepOnePage.completeFields('', '', '');
      await expect(CheckoutStepOnePage.errorMsgContainer).toHaveText('Error: First Name is required')
    });
    it('Empty last name field should display an error message', async () => {
      await CheckoutStepOnePage.completeFields('Eleanor', '', '');
      await expect(CheckoutStepOnePage.errorMsgContainer).toHaveText('Error: Last Name is required')
    });
    it('Empty zip code field should display an error message', async () => {
      await CheckoutStepOnePage.completeFields('Eleanor', 'Rigby', '');
      await expect(CheckoutStepOnePage.errorMsgContainer).toHaveText('Error: Postal Code is required')
    });
    it ('Test all the input fields completed correctly', async () => {
      await CheckoutStepOnePage.completeFields('Eleanor', 'Rigby', '2000');
      await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    })
  });

  describe('Test the buttons', () => {
    it ('Testing cancel button', async () => {
      await CheckoutStepOnePage.open();
      await CheckoutStepOnePage.cancelButton.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    });
  })
})