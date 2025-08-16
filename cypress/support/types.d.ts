// Global types for Cypress tests
// Declared as global so tests under cypress/ can use them without importing.

declare global {
  type User = { username: string; password: string };

  type Users = {
    validUser: User;
    lockedUser: User;
    invalidUser: User;
    wrongPassword: User;
    problemUser?: User;
    performanceGlitchUser?: User;
    errorUser?: User;
    visualUser?: User;
  };
}

export {};
