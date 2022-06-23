class LoginPage {
  //Getters
  get inputUsername () {return $('#user-name')};
  get inputPassword () {return $('#password')};
  get btnLogin () {return $('#login-button')};
  get errorMsgContainer () {return $('.error-message-container.error')};
  get robotImg () {return $('.bot_column')};
  get logoImg () {return $('.login_logo')}

  //Setters
  async setUsername(username) {
      await this.inputUsername.setValue(username)
  };
  async setPassword(password) {
      await this.inputPassword.setValue(password)
  };

  //Methods
  async login(username, password) {
      await this.setUsername(username);
      await this.setPassword(password);
      await this.btnLogin.click()
  };

  open() {
      return browser.url('http://www.saucedemo.com/')
  }
};
export default new LoginPage();