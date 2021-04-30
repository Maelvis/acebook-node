describe('Timeline', function () {
    beforeEach(async (done) => {
        await cy.task("db:drop:all");
        done();
      })

    it('can like posts', function () {
      cy.visit('/')
      cy.get('input.fname').type('Dislike')
      cy.get('input#pword').type('Dislike')
      cy.get('.registration-form').submit();
  
      cy.visit('/posts');
      cy.contains('New post').click();
  
      cy.get('#new-post-form').find('[type="text"]').type('Dislike this post!');
      cy.get('#new-post-form').submit();
      
      cy.get('#dislike-post-form').submit();
      
      
      cy.get('.likes').contains(-1);
    });
});