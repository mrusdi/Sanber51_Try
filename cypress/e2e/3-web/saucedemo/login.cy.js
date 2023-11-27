
import loginPage from '../../../support/pageObject/loginPage'
const userData = require('../../../fixtures/userData.json')


describe('verify Saucedemo Login Functionlity', () => {
  it('failed login - Lokced user', () => {
    cy.visit('')
    cy.get(loginPage.usrnm).type(Cypress.env('lockedUser'))
    cy.get(loginPage.pswd).type(userData.valid.valid_password)
    cy.get(loginPage.login_btn).click()
    cy.get(loginPage.err_msg).should('contain', ' Sorry, this user has been locked out.')
    //cy.get('#user-name').type(Cypress.env('lockedUser'))
    //cy.get('[data-test="password"]').type(userData.valid.valid_password)
    //cy.get('.submit-button.btn_action').click()
    //cy.get('[data-test="error"]').should('contain', ' Sorry, this user has been locked out.')
  })
  it('failed login - Wrong Password', () => {
    cy.visit('')
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type(userData.invalid.invalid_password)
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('contain', ' Username and password do not match any user in this service')
  })
  it('success login', () => {
    cy.visit('')
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('.submit-button.btn_action').click()
    cy.url().should('include', '/inventory.html')
  })
  it('failed login - Wrong creds CUSTOM COMMANDS', () => {
    cy.visit('')
    cy.login('rusdi', 'lubis')
    cy.verifyContain('[data-test="error"]',' Username and password do not match any user in this service' )
    // cy.get('[data-test="error"]').should('contain', ' Username and password do not match any user in this service')
  })

  it.only('failed login - Wrong Password With POM', () => {
    cy.visit('')
    loginPage.inputUsername('standard_user')
    loginPage.inputPassword(userData.invalid.invalid_password)
    loginPage.clickLogin()
    cy.get('[data-test="error"]').should('contain', ' Username and password do not match any user in this service')

    // cy.get('#user-name').type('standard_user')
    // cy.get('[data-test="password"]').type(userData.invalid.invalid_password)
    // cy.get('.submit-button.btn_action').click()
    // cy.get('[data-test="error"]').should('contain', ' Username and password do not match any user in this service')
  })
})
