
//jquery watch for each time the mouse enters an element with the closs .target
$( ".target" ).mouseenter(function() {
    //$(this) select the element under mouse
    //.prev() selects the previous sibling
      $(this).prev().css("box-shadow", "0px 0px 5px #ddd");
    });
    
    //jquery watch for each time the mouse leaves an element with the closs .target
    $( ".target" ).mouseleave(function() {
    //$(this) select the element under mouse
    //.prev() selects the previous sibling
      $(this).prev().css("box-shadow", "0px 0px 5px #ddd");
    });

var glow = $('.confirm_selection');
setInterval(function(){
    glow.toggleClass('neon4');
}, 1000);