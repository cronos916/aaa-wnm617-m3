$(document).ready(function(){
  $( "#alert" ).click(function() {
    $( this ).slideUp( "slow", function() {
      // Animation complete.
    });
  });
});
