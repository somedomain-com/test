context('Test an app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000')
  })

  it('Shows a button', () => {
    cy.queryByText('Nooswq22asdting').should('exist')
  })

  it('Clicks', () => {
    cy.queryByText('Nooswq22ting').click()
  })
})
