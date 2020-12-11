let movies; 
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Top tated Page ", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/")
    cy.get("nav").find("li").eq(2).find("a").click();
  });
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Top Rated Movie");
        cy.get(".badge").contains(20);
      });
    })
    describe("Filtering", () => {
        describe("By movie title" ,() => {
          it("should display movies with 'p ' in the title", () => {
            const searchString = 'p'
            const matchingMovies = filterByTitle(movies, searchString );
            cy.get("input").clear().type(searchString) ;
            cy.get(".card").should("have.length", matchingMovies.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
            });
          })
          it("should display movies with 'o' in the title", () => {
            const searchString = "o";
            const matchingMovies = filterByTitle(movies, searchString);
            cy.get("input").clear().type(searchString);
            cy.get(".card").should("have.length", matchingMovies.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
            })
          })
          it("should not have movie with 'xyz'", () => {
            const searchString = "xyz";
            filterByTitle(movies, searchString)==0;
            
          })
        })
        describe("By movie genre", () => {
      it("should display movies with the specified genre only", () => {
        const selectedGenreId = 35;
        const selectedGenreText = "Comedy";
        const matchingMovies = filterByGenre(movies, selectedGenreId);
        cy.get("select").select(selectedGenreText); 
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
        });      
      });
  });
  describe("By movie genre and text", () => {
    it("should display movies with the specified genre and text", () => {
      const selectedGenreId = 35;
      const selectedGenreText = "Comedy";
      const searchString = "ov";
      const matchingMovies1 = filterByTitle(movies, searchString);
      const matchingMovies2 = filterByGenre(matchingMovies1, selectedGenreId);
      cy.get("input").clear().type(searchString);
      cy.get("select").select(selectedGenreText); 
      cy.get(".card").should("have.length", matchingMovies2.length);
      cy.get(".card").each(($card, index) => {
        cy.wrap($card)
          .find(".card-title")
          .should("have.text", matchingMovies2[index].title);
      });      
    });
});
      })
    })