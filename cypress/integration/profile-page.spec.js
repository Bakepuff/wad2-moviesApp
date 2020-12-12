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
    })

    describe(('upcoming'), () => {

        it('should have favorite movies in watch list', ()=>{
            cy.get("nav").find("li").eq(0).find("a").click();
            cy.get(".card").eq(0).find("button").click();
            cy.get("nav").find("li").eq(3).find("a").click();
            cy.get('.card').should('have.length', 1)
        })

        it('should have upcoming movies in watch list', ()=>{
            cy.get("nav").find("li").eq(1).find("a").click();
            cy.get(".card").eq(0).find("button").click();
            cy.get("nav").find("li").eq(3).find("a").click();
            cy.get('.watch-tab').click()

        })
    })
})