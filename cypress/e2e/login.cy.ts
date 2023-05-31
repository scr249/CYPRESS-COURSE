import {MockProvider} from '@rsksmart/mock-web3-provider';

describe ('E2E Test Cases for TNL Locker Room', () => {
    const address = "0xB93603845F6b623b4750d7F57cf8411834967427"
    const privateKey = "336d666f44aa64aa9162cb2be561d316afe117c9cb69178949cdb1fef7c674f6"
    beforeEach(() => {
        //set network to Porcini chain - but it doesn't matter for now
        cy.on('window:before:load', win => {
          win.ethereum = new MockProvider({
            address,
            privateKey,
            networkVersion: 5,
            debug: true,
          });
        });
        cy.visit('https://locker.tnl-dev-tuneiyjkkn.tnl.al8st.me/');
        cy.get("button#log_in_with_futurepass").click();
        cy.contains('Metamask').click();
        cy.url().should('include', 'boxers');
        // cy.setCookie('_interaction', 'aGhi6tzfIhMzWLLo_zj6s')
      });

// Add & Editing boxer FirstName & LastName

    const randomName = Math.random().toString(36).substring(2,15);

    it('Edit boxer name', () => {
      cy.contains('Edit boxer', {timeout:10000}).click();
      cy.contains('Edit').click();
      cy.get('#figher-first-name').clear();
      cy.get('#figher-first-name').type(randomName);
      cy.get('#figher-last-name').clear();
      cy.get('#figher-last-name').type(randomName);
      cy.contains('Save', {timeout:10000}).click();
      cy.contains('Changes will be seen on Opensea shortly').should('be.visible');
}); 

// Add & Editing boxer Bio
  
    const randomBio = Math.random().toString(36).substring(2,15);

    it('Edit boxer bio', () => {
      cy.contains('Edit boxer', {timeout:10000}).click();
      cy.contains('Bio').click();
      cy.get('.css-j7qwjs > .MuiButtonBase-root').click();
      cy.get('#fighter-story').clear();
      cy.get('#fighter-story').type(randomBio);
      cy.contains('Save',{timeout:10000}).click();
      cy.contains('Changes will be seen on Opensea shortly').should('be.visible');
    }); 

});