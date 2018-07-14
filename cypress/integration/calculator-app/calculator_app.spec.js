describe('calculator', function () {
    beforeEach(function () {
       cy.visit('http://localhost:3000');
    });

    it('should add two numbers', function () {
        cy.get('[data-cy=button1]').click();
        cy.get('[data-cy=buttonSum]').click();
        cy.get('[data-cy=button2]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '3')
    });

    it('should subtract two numbers', function () {
        cy.get('[data-cy=button5]').click();
        cy.get('[data-cy=buttonSubtract]').click();
        cy.get('[data-cy=button3]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '2')
    });

    it('should multiply two numbers', function () {
        cy.get('[data-cy=button5]').click();
        cy.get('[data-cy=buttonMultiply]').click();
        cy.get('[data-cy=button4]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '20')
    });

    it('should divide two numbers', function () {
        cy.get('[data-cy=button8]').click();
        cy.get('[data-cy=buttonDivide]').click();
        cy.get('[data-cy=button2]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '4')
    });

    afterEach(function () {
        cy.get('[data-cy=buttonClear]').click();
    });
});