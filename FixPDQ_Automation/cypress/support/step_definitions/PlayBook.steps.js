const playBook = require('../pages/PlayBook.json');

And('Click On PlayBook Button',()=>{
    cy.get(playBook.playBookButton).should('be.visible').click()
  })

  And('MyPlayBook Button Is Visible',()=>{
    cy.get(playBook.MyplayBookButton).should('be.visible')
  })

  And('playBookStock Button Is Visible',()=>{
    cy.get(playBook.playBookStockButton).should('be.visible')
  })

  And('Like Icon In FilterBar is Visible',()=>{
    cy.get(playBook.filterBar).find(playBook.LikeIcon).should('be.visible')
  })

  And('Save Icon In FilterBar is Visible',()=>{
    cy.get(playBook.filterBar).find(playBook.SaveIcon).should('be.visible')
  })

  And('Verify Card Under Filter Bar',()=>{
    cy.get(playBook.cardUnderFilter).should('be.visible').each((element,index,list)=>{
      element.should('be.visible')
    })    
  })
