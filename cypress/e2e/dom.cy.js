it('Testing issue 1', function() {
    cy.visit('http://localhost:8080/');
    cy.get('[onclick="background()"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(190, 204, 195)');
  });

  it('Testing issue 2', function() {
    cy.visit('http://localhost:8080/');
    cy.get('#fname').clear();
    cy.get('#fname').type('Rodrigo');
    cy.get('#lname').clear();
    cy.get('#lname').type('Prestes Machado');
    cy.get('[onclick="show()"]').click();
    cy.get('#result').click();
    cy.get('#result').should('have.text', 'Rodrigo Prestes Machado');
  });

  it('Testing issue 3 with one letter', function() {
    cy.visit('http://localhost:8080/');
    cy.get('#name').clear();
    cy.get('#name').type('r');
    cy.get('#search > :nth-child(1)').click();
    cy.get('#search > :nth-child(1)').should('have.text', 'Rodrigo');
    cy.get('#search > :nth-child(2)').should('have.text', 'Ricardo');
  });

  it('Testing issue 3 with two letters', function() {
    cy.visit('http://localhost:8080/');
    cy.get('#name').clear();
    cy.get('#name').type('ri');
    cy.get('#search > div').click();
    cy.get('#search > div').click();
    cy.get('#search > div').should('have.text', 'Ricardo');
  });
