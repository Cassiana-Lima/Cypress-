
describe('Funcionalidade: Login no Sistema', () => {
  it('Login com credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    //Login efetuado com sucesso, próxima página:
    cy.get('[data-test="title"]').should('contain', "Products" )
  })
  })

    //Login com usuario inválido envia para o usuario mensagem de erro:
  it('Login com usuario invalido', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("errrororr")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface')
  });

    //Login válido e insercao de objeto no cart.
  describe('Funcionalidade: Objeto no Cart', () => {
  it('Login com credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').should('contain', "Products" )

    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    // Objeto no cart e mudanca de pagina para efetuar pagamento.

    cy.get('[data-test="title"]').should('contain', "Your Cart" )
    cy.get('[data-test="checkout"]').click()

    // Checkout da compra, mudanca de página para preenchimento de Formulário.
    cy.get('[data-test="title"]').should('be.visible').and('contain', 'Checkout: Your Information' )
    cy.get('[data-test="firstName"]').type("Cassiana")
    cy.get('[data-test="lastName"]').type("Lima")
    cy.get('[data-test="postalCode"]').type("123456")
    cy.get('[data-test="continue"]').click()
  
    
    // Apos preencher o Formulario, o site direciona para outra página para finalizar a compra do Objeto.

    cy.get('[data-test="title"]').should('contain', "Checkout: Overview" )
    cy.get('[data-test="finish"]').click()

  })

})