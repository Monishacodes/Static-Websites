$(window).load(function() {
    $(".menu-btn").click(function () {
        $(this).toggleClass('active');
        $('#main-navigation ul').slideToggle();
        return false;
    });
});

$(window).scroll(function(){
console.log($(window).scrollTop());
if($(window).scrollTop() > 100){
            
  $(".collapse").addClass("scroll_active");
      }
   
        else {
     $(".collapse").removeClass("scroll_active");
    
        }
  
    });

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

