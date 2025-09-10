describe('Login Flow Test', () => {
  const url = 'https://qa-practice.netlify.app/auth_ecommerce';
  const email = 'admin@admin.com';
  const password = 'admin123';

  it('should successfully log in with valid credentials', () => {
    cy.visit(url);

    // Fill in credentials
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);

    // Click the submit button
    cy.get('button[type="submit"]').first().click();

    // ✅ Wait for and check the shopping cart/dashboard text
    cy.contains('SHOPPING CART', { timeout: 10000 }).should('be.visible');
  });
});
