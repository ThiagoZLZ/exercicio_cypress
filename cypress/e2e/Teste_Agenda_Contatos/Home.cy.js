/// <reference types="cypress" />

describe('Teste para a home', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });  
    it('Quantidade de contatos na lista!', () => {
        cy.get('div.sc-beqWaB.eQdhbg.contato').then(($div) => {
            const contatos = $div.length;

            cy.log('Tem ' + contatos + ' contatos na lista.' )
        })
    })

    it('Teste do botão adicionar', () => {
        cy.get('input[type="text"').type('Thiago')
        cy.get('input[type="email"').type('thiago@test.com')
        cy.get('input[type="tel"').type('21 9999999')
        cy.get('button.adicionar').click()
    })

   

    it('Teste do botão Editar', () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
        cy.get('input[type="text"').clear().type('Matheus Teste')
        cy.get('input[type="email"').clear().type('FINAL TESTE@Teste')
        cy.get('input[type="tel"').clear().type('21 21 21 21')
        cy.get('button.alterar').click()
    })

    it('Teste do botão Deletar', () => {
        cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
    })
})