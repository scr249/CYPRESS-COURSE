

describe ('Visit website', () => {

    beforeEach('Visit Website', () => {
        cy.visit("https://thenextlegends.xyz/");
    });

//click login 
    it('login', () =>{
        cy.contains('LOGIN').click();
        cy.visit('https://play.thenextlegends.xyz/login')
        cy.get("button#log_in_with_futurepass").click();
        cy.xpath
        
});

});