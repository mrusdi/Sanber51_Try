class loginPage{
    usrnm = '#user-name'
    pswd = '[data-test="password"]'
    login_btn = '.submit-button.btn_action'
    err_msg = '[data-test="error"]'

    inputUsername(name){
        cy.get(this.usrnm).type(name)
    }

    inputPassword(pass){
        cy.get(this.pswd).type(pass)
    }
    clickLogin(){
        cy.get(this.login_btn).click()
    }

   

}

export default new loginPage()