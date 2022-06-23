import InventoryPage from '../pageobjects/inventory.page';
import Header from '../pageobjects/header.page';
import LoginPage from '../pageobjects/login.page';

describe ('Inventory page testing', () => {
  beforeEach('Login correctly and go to inventory page', async ()=> {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
  });

  describe('Elements display and redirection tests in inventory page', () => {
    it('Header images display test in inventory page', async () => {
      await InventoryPage.open();
      await expect(Header.logoImg).toExist()
      await expect(Header.sidebarMenu).toExist()
      await expect(Header.cartButton).toExist()
      await expect(InventoryPage.titleHeading).toExist()
      await expect(InventoryPage.botHeadImg).toExist()
      await expect(InventoryPage.filterContainer).toExist()
    });
    it('Footer images display and links test in inventory page', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.twitterLink).toBeClickable();
      await expect(InventoryPage.twitterLink).toHaveLink('https://twitter.com/saucelabs');
      await expect(InventoryPage.facebookLink).toBeClickable();
      await expect(InventoryPage.facebookLink).toHaveLink('https://www.facebook.com/saucelabs');
      await expect(InventoryPage.linkedinLink).toBeClickable();
      await expect(InventoryPage.linkedinLink).toHaveLink('https://www.linkedin.com/company/sauce-labs/');
      await expect(InventoryPage.footerCredits).toExist()
      await expect(InventoryPage.footerImg).toExist()
    });

    it('Items descriptions and prices', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.itemDescr).toExist();
      await expect(InventoryPage.itemPrice).toExist()
    });

    it('Backpack image display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.backpackImg).toExist();
      const backpackImg = await $('#item_4_img_link')
      await backpackImg.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
      await InventoryPage.backProductsButton()
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it('Backpack title display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.backpackTitle).toExist();
      const backpackTitle = await $('#item_4_title_link')
      await backpackTitle.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
    });

    it('Bike light image display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.bikeLightImg).toExist();
      const bikeLightImg = await $('#item_0_img_link')
      await bikeLightImg.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
      await InventoryPage.backProductsButton()
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it('Bike light title display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.bikeLightTitle).toExist();
      const bikeLightTitle = await $('#item_0_title_link')
      await bikeLightTitle.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
    });

    it('Bolt T-shirt image display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.boltShirtImg).toExist();
      const boltShirtImg = await $('#item_1_img_link')
      await boltShirtImg.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
      await InventoryPage.backProductsButton()
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it('Bolt T-shirt title display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.boltShirtTitle).toExist();
      const boltShirtTitle = await $('#item_1_title_link')
      await boltShirtTitle.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
    });

    it('Jacket image display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.jacketImg).toExist();
      const jacketImg = await $('#item_5_img_link')
      await jacketImg.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
      await InventoryPage.backProductsButton()
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it('Jacket title display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.jacketTitle).toExist();
      const jacketTitle = await $('#item_5_title_link')
      await jacketTitle.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
    });

    it('Onesie shirt image display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.onesieShirtImg).toExist();
      const onesieShirtImg = await $('#item_2_img_link')
      await onesieShirtImg.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
      await InventoryPage.backProductsButton()
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it('Onesie shirt title display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.onesieShirtTitle).toExist();
      const onesieShirtTitle = await $('#item_2_title_link')
      await onesieShirtTitle.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
    });

    it('Test shirt image display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.testShirtImg).toExist();
      const testShirtImg = await $('#item_3_img_link')
      await testShirtImg.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
      await InventoryPage.backProductsButton()
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it('Test shirt title display and redirection', async () => {
      await InventoryPage.open();
      await expect(InventoryPage.testShirtTitle).toExist();
      const onesieShirtTitle = await $('#item_3_title_link')
      await onesieShirtTitle.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
    })
  })
  describe('Add/remove all ítems to cart test', () => {
    it('', async () => {
      await InventoryPage.open();
      await InventoryPage.addAll();
      await expect(Header.cartButton).toHaveText('6');
      await InventoryPage.removeAll();
      await expect(Header.cartButton).toHaveText('')
    });
  });
})