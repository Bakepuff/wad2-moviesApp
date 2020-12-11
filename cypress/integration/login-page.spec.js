const USER = 'Tanshi'
const PWD = '727399st'

describe('Profile page', () => {
    before(() => {
        cy.configureLayoutInspector({
            excludePadding: true,
        });
    });
    beforeEach(() => {
        cy.visit("/");
        cy.get("nav").find("li").eq(3).find("a").click();
        cy.get('.login-link').click()
    });

    describe(('Layout test'), () => {
        it('logo should be above', () => {
            cy.get('.logo').should('be.above', '.user');
        })
        it('pwd input should below to user', () => {
            cy.get('.pwd').should('be.below', '.user');
        })
        it('pwd input should be above on btn', () => {
            cy.get('.pwd').should('be.above', '.btn');
        })
    })

    describe(('Login function test'), () => {
        it('should login successfully with correct account',() => {
            cy.get('.user').children('input').clear().type(USER)
            cy.get('.pwd').children('input').clear().type(PWD)
            cy.get('.btn').click()
            cy.wait(500)
            cy.url().should('include','/movies/profile')
        })
    })
})