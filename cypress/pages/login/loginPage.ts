class LoginPage {
  visit(): void {
    cy.visit('/');
  }

  username() {
    return cy.get('[data-test="username"]');
  }

  password() {
    return cy.get('[data-test="password"]');
  }

  loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }

  errorCloseButton() {
    return cy.get('[data-test="error-button"]');
  }

  login(username: string, password: string): void {
    this.username().clear().type(username);
    this.password().clear().type(password);
    this.loginButton().click();
  }
}

export default new LoginPage();