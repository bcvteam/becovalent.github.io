
$(function() {
  $('#unmute').change(function() {

    $("video").prop('muted', !$(this).prop('checked') );
  });

  $('#play').change(function() {

    $("video")[0].requestFullscreen();
  });





});

$(function () {
  $( "#unmute" ).click(function() {




  });
});
