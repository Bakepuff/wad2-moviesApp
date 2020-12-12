let movies;
const movieId = 497582; // Enola Holmes movie id
let reviews;

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

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate to the movie details page and change browser URL", () => {
      login()
      cy.get("nav").find("li").eq(0).find("a").click();
      cy.wait(500)
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      login()
      cy.get("nav").find("li").eq(3).find("a").click();
      cy.get("h2").contains("Favorite Movies");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Discover Movies");
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get("nav.navbar-brand").find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("No. Movies");
    });
  });
  describe("From the Movie Details page ", () => {
    beforeEach(() => {
      cy.visit(`/movies/${movieId}`);
    });
    it("should change browser URL when show/hide reviews is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movieId}/reviews`);
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", `/movies/${movieId}/reviews`);
    });
    it("navigate to the full review page when a 'Full Review' link is clicked", () => {
        cy.contains("Show Reviews").click();
        cy.url().should("include", `/movies/${movieId}/reviews`);
        cy.contains("Full Review").click();
        cy.get(".col-9")
      .children()
      .contains("Review By: ");
    });
  });
  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("No. Movies");
    });
    // it("should navigate from favorites page to movie details and back", () => {
    //     cy.contains("Add to Favorites").click();
    //     cy.contains("Favorites").click();
    //     cy.get(".card").eq(0).find("img").click();
    //     cy.get("svg[data-icon=arrow-circle-left]").click();
    //     cy.url().should("include", `/favorites`);
    //     cy.get("h2").contains("Favorite Movies");
    // });
  });
});