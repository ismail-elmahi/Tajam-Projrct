// Scrollspy fluide
      $(function () {
        $('header a').on('click', function(e) {
          e.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(this.hash).offset().top 
          }, 1000, function(){
            window.location.hash = hash;
          });
        });
      });


$(function () {
     $("#work-gallery").magnificPopup({
         delegate: 'a',
         type: 'image',
         gallery: {
             enabled: true,
         }
     });
 });


