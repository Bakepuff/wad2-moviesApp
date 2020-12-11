const USER = 'Tanshi'
const PWD = '727399st'

const login = () => {
    cy.visit("/");
    cy.get("nav").find("li").eq(3).find("a").click();
    cy.get('.login-link').click()
    cy.get('.user').children('input').clear().type(USER)
    cy.get('.pwd').children('input').clear().type(PWD)
    cy.get('.btn').click()
    cy.wait(500)
}

describe('Watchlist page', () => {

    before(() => {
        cy.configureLayoutInspector({
            excludePadding: true,
        });
    });

    beforeEach(() => {
       login()
    });

    describe(('Layout test'), () => {
        it('should naviagte to profile', () => {
            cy.url().should('include','/profile')
        })
        it('favorite should be left of watchlist', () => {
            cy.get('.favorite-tab').should('be.leftOf','.watch-tab')
        })
        it('display the watchlist', () => {
            cy.get('.watch-tab').click()
        })
    })


})