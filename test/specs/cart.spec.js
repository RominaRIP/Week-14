// import LoginPage from '../pageobjects/login.page'
// import Header from '../pageobjects/header.page'
// import InventoryPage from '../pageobjects/inventory.page'
// import CartPage from '../pageobjects/cart.page'

// describe ('Cart page testing', () => {
//   beforeAll('Open browser and login correctly', async () => {
//     browser.url('https://www.saucedemo.com/');
//     await LoginPage.login('standard_user', 'secret_sauce');
//   });

//   describe ('Test cart content page', () => {
//     it('Header images display test in cart page', async () => {
//       await InventoryPage.open();
//       await expect(Header.logoImg).toExist()
//       await expect(Header.sidebarMenu).toExist()
//       await expect(Header.cartButton).toExist()
//       await expect(InventoryPage.titleHeading).toExist()
//     });
//     it('Footer images display and links test in cart page', async () => {
//       await InventoryPage.open();
//       await expect(InventoryPage.twitterLink).toBeClickable();
//       await expect(InventoryPage.twitterLink).toHaveLink('https://twitter.com/saucelabs');
//       await expect(InventoryPage.facebookLink).toBeClickable();
//       await expect(InventoryPage.facebookLink).toHaveLink('https://www.facebook.com/saucelabs');
//       await expect(InventoryPage.linkedinLink).toBeClickable();
//       await expect(InventoryPage.linkedinLink).toHaveLink('https://www.linkedin.com/company/sauce-labs/');
//       await expect(InventoryPage.footerCredits).toExist()
//       await expect(InventoryPage.footerImg).toExist()
//     });

//     it ('Checking items added to cart', async () => {
//       await InventoryPage.addAll();
//       await Header.cartButton.click();
//       await expect(CartPage.cartItemName).toBeDisplayed();
//       await expect(CartPage.cartItemPrice).toExist();
//       await expect(CartPage.cartItemDesc).toExist();
//       await expect(CartPage.cartQuantity).toBeDisplayed();
//       await InventoryPage.removeAll();
//       await CartPage.continueShopButton.click();
//       await InventoryPage.addAll();
//       await Header.cartButton.click();
//       await CartPage.checkoutButton.click();
//       await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
//     });

//     it ('Test cart badge display', async() => {
//         await expect(CartPage.cartBadge).toBeDisplayed();
//       });
//   });
// });