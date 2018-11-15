// Flash Message upon clicking button! Thank you Treehouse for helping with the code!
$('#flashMessage').hide();
$('#target').on('click', function () {
  $('#flashMessage').slideDown(500).delay(2000).slideUp(500);
  event.preventDefault();
})

