class InventoryPage {
    //Getters
    get titleHeading () { return $('.title') }
    get botHeadImg () { return $('.peek') }
    get filterContainer () { return $('.product_sort_container')}

    get backpackImg () { return $('#item_4_img_link') }
    get backpackTitle () { return $('#item_4_title_link') }
    get backpackAddButton () { return $('#add-to-cart-sauce-labs-backpack') }
    get backpackRemoveButton () { return $('#remove-sauce-labs-backpack') }

    get bikeLightImg () { return $('#item_0_img_link') }
    get bikeLightTitle () { return $('#item_0_title_link') }
    get bikeLightAddButton () { return $('#add-to-cart-sauce-labs-bike-light') }
    get bikeLightRemoveButton () { return $('#remove-sauce-labs-bike-light') }

    get boltShirtImg () { return $('#item_1_img_link') }
    get boltShirtTitle () { return $('#item_1_title_link') }
    get boltShirtAddButton () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
    get boltShirtRemoveButton () { return $('#remove-sauce-labs-bolt-t-shirt') }

    get jacketImg () { return $('#item_5_img_link') }
    get jacketTitle () { return $('#item_5_title_link') }
    get jacketAddButton () { return $('#add-to-cart-sauce-labs-fleece-jacket') }
    get jacketRemoveButton () { return $('#remove-sauce-labs-fleece-jacket') }

    get onesieShirtImg () { return $('#item_2_img_link') }
    get onesieShirtTitle () { return $('#item_2_title_link') }
    get onesieShirtAddButton () { return $('#add-to-cart-sauce-labs-onesie') }
    get onesieShirtRemoveButton () { return $('#remove-sauce-labs-onesie') }

    get testShirtImg () { return $('#item_3_img_link') }
    get testShirtTitle () { return $('#item_3_title_link') }
    get testShirtAddButton () { return $('[name="add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)"]') }
    get testShirtRemoveButton () { return $('[name="remove-test\.allthethings\(\)-t-shirt-\(red\)"]') }

    get backButton () { return $('#back-to-products')}

    get itemDescr () { return $('.inventory_item_label') }
    get itemPrice () { return $('.inventory_item_price') }

    get footerCredits () { return $('.footer_copy') }
    get footerImg () { return $('.footer_robot') }

    get twitterLink () { return $('.social_twitter a')}
    get facebookLink () { return $('.social_facebook a')}
    get linkedinLink () { return $('.social_linkedin a')}

    //Methods
    open () {
      return browser.url('https://www.saucedemo.com/inventory.html');
    }
    async login(username, password) {
      await this.setUsername(username);
      await this.setPassword(password);
      await this.btnLogin.click();
    }
    async backProductsButton () {
      await this.backButton.click()
    }
    async addAll() {
      await this.backpackAddButton.click();
      await this.bikeLightAddButton.click();
      await this.boltShirtAddButton.click();
      await this.jacketAddButton.click();
      await this.onesieShirtAddButton.click();
      await this.testShirtAddButton.click();
    }
    async removeAll() {
      await this.backpackRemoveButton.click();
      await this.bikeLightRemoveButton.click();
      await this.boltShirtRemoveButton.click();
      await this.jacketRemoveButton.click();
      await this.onesieShirtRemoveButton.click();
      await this.testShirtRemoveButton.click();
    }
}
module.exports = new InventoryPage();