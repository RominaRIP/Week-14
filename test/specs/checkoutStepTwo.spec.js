import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'
import CartPage from '../pageobjects/cart.page'
import Header from '../pageobjects/header.page'
import CheckoutStepOnePage from '../pageobjects/checkoutStepOne.page'
import CheckoutStepTwoPage from '../pageobjects/checkoutStepTwo.page'

describe ('Test step two in checkout process', () => {
  beforeAll('Login and open checkout step two page', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user','secret_sauce');
    await InventoryPage.addAll();
    await Header.cartButton.click();
    await CartPage.checkoutButton.click();
    await CheckoutStepOnePage.completeFields('Eleanor', 'Rigby', '2000');
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

  it('Test summary information', async () => {
    await expect(CheckoutStepTwoPage.summaryInfo).toBeDisplayed();
    await expect(CheckoutStepTwoPage.summarySubtotal).toHaveTextContaining('Item total:');
    await expect(CheckoutStepTwoPage.summaryTax).toHaveTextContaining('Tax:');
    await expect(CheckoutStepTwoPage.summaryTotal).toHaveTextContaining('Total:');
  });

  describe('Test the buttons', () => {
    it ('Testing cancel button', async () => {
      await CheckoutStepTwoPage.cancelButton.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
    it ('Testing finish button', async () => {
      await CheckoutStepTwoPage.open();
      await CheckoutStepTwoPage.finishButton.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
    });
  })
})