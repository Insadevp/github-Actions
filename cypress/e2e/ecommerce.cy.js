describe('template spec', () => {
  it('Visits Magento website and selects a product', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    cy.get('#ui-id-5').trigger('mouseover');
    cy.get('#ui-id-17').click();
   
    cy.get('#ui-id-4').trigger('mouseover');
    cy.get('#ui-id-9').trigger('mouseover');
    cy.get('#ui-id-5').click();
   /* cy.url().should('include','/men.html')
    cy.visit('https://magento.softwaretestingboard.com/men/tops-men.html')*/
    // Sélectionne le premier produit
    cy.get('.product-image-photo').first().click();
   
    // Sélectionne la première taille disponible
    cy.get('#option-label-size-143-item-166').first().click();

    // Sélectionne une couleur disponible
    cy.get('[aria-describedby="option-label-color-93"]').click(); 
    //ajouter un produit au panier
    cy.get('#product-addtocart-button').click();
    // Consulter le panier
   
    // cy.get('span').wait(3000).contains('View and Edit Cart').click();
    // Modifier la quantité
   
    cy.get('.details-qty qty input').clear().type(2);
    
    cy.contains('button','Update Shopping Cart').click();
    cy.get('span').contains('Proceed to Checkout').click();
    cy.pause()
    cy.get('input[name="username"]').type('insaf@gmail.com');
    cy.get('input[name="firstname"]').type('insaf2');
    cy.get('input[name="lastname"]').type('saadaoui'); 
    cy.get('input[name = "street[0]"]').type('5 rue francois mansart');
    cy.get('input[name="city"]').type('saint priest');
    cy.get('input[name="postcode"]').type('69800');
    cy.get('[name="country_id"]').select('France');
    cy.get('[name="region_id"]').select('Rhône'); 
    cy.get('input[ name = "telephone"]').type('0603030201');
   cy.get('.price').contains('$10.00').click({ multiple: true });

    cy.get('button span').contains('Next').click();
    



   
  
  });
  


 
   

  })
