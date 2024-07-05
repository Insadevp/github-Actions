describe('template spec', () => {
  it('Visits Magento website and selects a product', () => {
    cy.visit('https://magento.softwaretestingboard.com/').wait(4000)

    cy.get('#ui-id-5').trigger('mouseover');
    cy.get('#ui-id-17').click();
   
    cy.get('#ui-id-4').trigger('mouseover');
    cy.get('#ui-id-9').trigger('mouseover');
    cy.get('#ui-id-5').click();

    // Sélectionne le premier produit
    cy.get('.product-image-photo').first().click();
   
    // Sélectionne la première taille disponible
    cy.get('#option-label-size-143-item-166').first().click();


    // Sélectionne une couleur disponible
    cy.get('[aria-describedby="option-label-color-93"]').click(); 
    //ajouter un produit au panier
    cy.get('#product-addtocart-button').click();
    // Modifier la quantité
    cy.get('#qty').clear().type(2);
    // Consulter le panier
    cy.contains('span', 'Add to Cart').click();
    cy.get('.minicart-wrapper .action.showcart').click();
    cy.get('#top-cart-btn-checkout').click();

   //remplir le formulaire
   cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping')
    cy.get('#customer-email').type('insaf69@gmail.com');
    cy.get('input[name="firstname"]').type('insaf2');
    cy.get('input[name="lastname"]').type('saadaoui'); 
    cy.get('input[name = "street[0]"]').type('5 rue francois mansart');
    cy.get('input[name="city"]').type('saint priest');
    cy.get('input[name="postcode"]').type('69800');
    cy.get('[name="country_id"]').select('France');
    cy.get('[name="region_id"]').select('Rhône'); 
    cy.get('input[ name = "telephone"]').type('0603030201');
   cy.get('.price').contains('$15.00').click();

    cy.wait(3000)
    cy.get('span').contains('Next').click();
    cy.url().should('include', '/checkout/#payment');
    cy.get('span').contains('Place Order').click();
    cy.contains('Thank you for your purchase!')
   
  
  });
  


 
   

  })
