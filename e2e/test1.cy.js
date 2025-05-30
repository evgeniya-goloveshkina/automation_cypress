it('Google Search', () => {
    cy.visit('https://google.com')
    cy.wait(2000)
    cy.get('#APjFqb', {timeout:5000}).type('Automation{Enter}')
})