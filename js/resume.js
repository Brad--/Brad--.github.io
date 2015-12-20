// #035096 My blue!
// rgb(162, 156, 170)
$(document).ready(function() {
  $("#jquery").click(function(){
    $("#jquery").effect("shake", "slow");
  });

  var $root = $('html,body');
  $('a').on('click', function(e) {
    if($(this).attr('href').substr(0, 5) === 'https')
      return

    e.preventDefault();
    $root.animate({
      scrollTop:$('[name="' + $.attr(this, 'href').substr(1) + '"]')
        .offset().top - 50}, 500);
  });

});
