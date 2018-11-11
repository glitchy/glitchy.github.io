
//jquery watch for each time the mouse enters an element with the closs .target
$( ".target" ).mouseenter(function() {
    //$(this) select the element under mouse
    //.prev() selects the previous sibling
      $(this).prev() .addClass("border");
    });
    
    //jquery watch for each time the mouse leaves an element with the closs .target
    $( ".target" ).mouseleave(function() {
    //$(this) select the element under mouse
    //.prev() selects the previous sibling
      $(this).prev().removeClass("border");
    });

var glow = $('.confirm_selection');
setInterval(function(){
    glow.toggleClass('glow');
}, 1000);