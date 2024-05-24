describe('Testando aplicação', () => {
    beforeEach(() => {
        cy.viewport(1440, 900)
        cy.visit('http://localhost:3000/')
    })
    context('Teste de toda a aplicação', () => {
        it('Testando título do cabeçalho', () => {

            cy.get('.title').contains('Weather Forecast')
        })
        it('Digitando Cidade', () => {

            cy.get('input').type('Washington, D.C.')
            cy.get('.search-button').click()
        })
        it('Validando se a cidade está correta', () => {

            cy.get('input').type('Washington, D.C.')
            cy.get('.search-button').click()
            cy.get('h2').contains('Washington, D.C.')
        })

        it('Buscando cidade salva', () => {
            cy.get('input').type('São Paulo')
            cy.get('.search-button').click()
            cy.get('h2').contains('São Paulo')
            cy.get('.select-list').contains('São Paulo')
        })
    })
})