import LoginPage from '../pageobjects/login.page';

describe ('Login page testing', () => {
  beforeAll('Open browser', () => {
    browser.url('https://www.saucedemo.com/')
  });

  describe('Username input test', () => {
    it('Empty username field should display an error message', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorMsgContainer).toHaveText('Epic sadface: Username is required')
    });
    it('Invalid username field should display an error message', async () => {
        await LoginPage.open();
        await LoginPage.login('invalidusertest', 'secret_sauce');
        await expect(LoginPage.errorMsgContainer).toHaveText('Epic sadface: Username and password do not match any user in this service')
    });
    it('Locked out username input should display an error message', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorMsgContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    });
    it('Problem username input should redirect to the products page with errors in images', async () => {
        await LoginPage.open();
        await LoginPage.login('problem_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        const imgProblemSrc = await $('#item_4_img_link > img:nth-child(1)').getAttribute('src');
        await expect(imgProblemSrc).toBe('/static/media/sl-404.168b1cce.jpg');
    });
    it('Login with performance glitch username', async () => {
      await LoginPage.open();
      await LoginPage.login('performance_glitch_user', 'secret_sauce');
      await browser.setTimeout({ 'pageLoad': 10000 });
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
  });

  describe('Password input test', () => {
    it('Empty password field should display an error message', async () => {
      await LoginPage.open();
      await LoginPage.login('standard_user', '');
      await expect(LoginPage.errorMsgContainer).toHaveText('Epic sadface: Password is required')
    });
    it('Invalid password field should display an error message', async () => {
      await LoginPage.open();
      await LoginPage.login('standard_user', 'invalidpasstest');
      await expect(LoginPage.errorMsgContainer).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
  });

  describe('Login with valid credentials', () => {
    it('It should login and redirect to the products page', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
  });

  describe('Elements display test in login page', () => {
    it('Image of a robot should be displayed next to the input fields', async () => {
      await LoginPage.open();
      await expect(LoginPage.robotImg).toExist()
    });
    it('Logo image should be displayed in the top of the page', async () => {
      await LoginPage.open();
      await expect(LoginPage.logoImg).toExist()
    })
  })
})