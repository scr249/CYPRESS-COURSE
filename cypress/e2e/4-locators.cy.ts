describe('Locators', () => {
    
    beforeEach('Visit webiste', () => {
        cy.visit("/textinput");
    });

    //This it function is finding a button typing a text, clicking and performing assertions
    it("Input", () => {
        cy.get("input#newButtonName").type("Hello World");
        cy.get("button#updatingButton").click().should('have.text', 'Hello World');
    });

});