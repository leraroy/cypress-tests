
const talkToExpert='nav [href="/contact-us"]';
const listButtonHeader='nav>div+div button, a[href*="network"]>span';
const listBtnInMenu='nav span';
const emailInput='[name="email"]';
const tryForFree='[type="submit"]';
const signUp='ul>div>[href="/sign-up"]';
const acceptandClose='[aria-label*="close"]~div button';
const openMenu='[aria-label="Open menu"]';

class MainPage {

    open(){
        cy.visit('/');
    }

    get listBtnInMenu(){
        return cy.get(listBtnInMenu);
    }

    get listHeader(){
        return cy.get(listButtonHeader);
    }
    
    get email() {
        return cy.get(emailInput);
    }
    
    clickAcceptAndClose() {
        cy.get(acceptandClose).click();
    }

    clickTalkToExpert() {
        cy.get(talkToExpert).click();
    }

    clickSignUp() {
        cy.get(signUp).click();        
    }

    enterEmail(email) {
        cy.get(emailInput).type(email);
    }

    clickTryForFree() {
        cy.get(tryForFree).click();
    }

    clickOpenMenu(){
        cy.get(openMenu).click();
    }
}
export default MainPage;
