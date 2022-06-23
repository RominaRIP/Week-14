import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'
import CartPage from '../pageobjects/cart.page'
import Header from '../pageobjects/header.page'
import CheckoutStepOnePage from '../pageobjects/checkoutStepOne.page'
import CheckoutStepTwoPage from '../pageobjects/checkoutStepTwo.page'
import CheckoutCompletePage from '../pageobjects/checkoutComplete.page'

describe ('Test final step in checkout process', () => {
  beforeAll('Login and open final checkout step', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user','secret_sauce');
    await InventoryPage.addAll();
    await Header.cartButton.click();
    await CartPage.checkoutButton.click();
    await CheckoutStepOnePage.completeFields('Eleanor', 'Rigby', '2000');
    await CheckoutStepTwoPage.finishButton.click()
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

  it('Test content display', async () => {
    await CheckoutCompletePage.open();
    await expect(CheckoutCompletePage.completeContainer).toBeDisplayed();
    await expect(CheckoutCompletePage.completeHeader).toHaveText('THANK YOU FOR YOUR ORDER');
    await expect(CheckoutCompletePage.completeText).toHaveTextContaining('Your order has been dispatched');
    await expect(CheckoutCompletePage.completeImg).toBeDisplayed();
  });

  it ('Testing back button', async () => {
    await CheckoutCompletePage.backButton.click();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })
})