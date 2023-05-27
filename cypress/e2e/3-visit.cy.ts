describe("basics", () => {

   beforeEach(()=>{
    cy.visit("/textinput");
   });

    it('yeild: print url', () => {
        cy.url().then((url) => {
            cy.log(`Print URL: ${url}`);
        });
        
    });
    it("title validation", () => {
        cy.title().then((title) => {
            cy.log(title);
            expect(title).to.be.equal("Text Input");

        });
    });   

});