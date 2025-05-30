/// ＜reference types="cypress-downloadfile"/＞

it('File Upload Demo', function(){
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')
})

it('File Download Test', function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/commons/f/fe/Union_Pacific_4-4-0_wood_burning_locomotive.JPG', 'mydownloads', 'downloadedImage.jpg')
})