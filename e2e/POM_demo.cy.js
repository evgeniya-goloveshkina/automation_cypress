import { LoginPage } from "./pages/login_page.cy"

const loginPage = new LoginPage

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('All Login Tests', function () {
    
    it('Login Test - valid credentials', function () {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-icon').click()
    })

    it.skip('Login Test - invalid username', function () {
        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-icon').click()
    })
})

 it('Login Test - invalid password', function () {
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-icon').click()
})