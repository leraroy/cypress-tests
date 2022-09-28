import MainPage from "./pages/main.page";
import RegisterPage from "./pages/register.page";
import resources from "./resources";

describe('Telnyx', () => {

  const mainPage = new MainPage();
  const registerPage = new RegisterPage();

  beforeEach(() => {
    mainPage.open();
  });

  it('should has Telnyx in title', () => {
    mainPage.clickAcceptAndClose();
    cy.title().should('contain', 'Telnyx');
  });

  it('should has buttons on the page menu', () => {
    mainPage.clickOpenMenu();
    mainPage.listHeader.each((item, index) => {
      cy.wrap(item.text()).should('contain', resources.textListButton[index]);
    });
  });

  it('should after click on "Sign up", contain title Sign Up', () => {
    mainPage.clickSignUp();
    cy.title().should('contain', 'Sign Up');
  });

  it('should after enter email on main page, show email on register page', () => {
    mainPage.enterEmail('qsbhbhsx@shdb.bdb');
    mainPage.clickTryForFree();
    registerPage.email.should('have.value', 'qsbhbhsx@shdb.bdb');
    cy.title().should('contain', 'Sign Up');
  });

  it('should registration with empty credentials', () => {
    mainPage.clickSignUp();
    cy.wait(3000);
    registerPage.clickSubmit();
    registerPage.getTextError.should('have.length', 2);
  });

  it('should registration with right credentials', () => {
    mainPage.clickSignUp();
    registerPage.register();
    registerPage.getTextDownError.should(($x)=>{
      expect($x).to.not.be.null;
    })
  });

  it('should after click on "Talk to an expert", switch to page Contact', () => {
    mainPage.clickOpenMenu();
    mainPage.clickTalkToExpert();
    cy.url().should('contain', '/contact-us');
  });

  it('should after move to Products, show right href', () => {
    mainPage.clickOpenMenu();
    mainPage.listHeader.first().click();
    cy.wait(3000);
    mainPage.listBtnInMenu.each((item, index, $listofElements) => {
      cy.wrap(item.text()).should('contain', resources.textListProducts[index]);
    });
  });

  it('should after move to Pricing, show right count href', () => {
    mainPage.clickOpenMenu();
    mainPage.listHeader.eq(5).click();
    mainPage.listBtnInMenu.each((item, index, $listofElements) => {
      cy.wrap(item.text()).should('contain', resources.textListPricing[index]);
    });
  });

  it('should have the correct title of all product links', () => {
    for (let i = 0; i < 9; i++) {
      mainPage.clickOpenMenu();
      mainPage.listHeader.first().click();
      mainPage.listBtnInMenu.eq(i).click();
      cy.title().should('contain', resources.textTitlesProducts[i]);
      cy.go(-1);
    }
  });
});