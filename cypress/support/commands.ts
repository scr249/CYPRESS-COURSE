Cypress.Commands.add('login', () => {
    it('login', () => {
        cy.get("button#log_in_with_futurepass").click();
    
});
});