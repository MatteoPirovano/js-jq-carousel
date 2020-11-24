$(document).ready(
  function() {

    $('.prev').click(
      function() {
        scrollLeft();
      }
    )
    $('.next').click(
      function() {
        scrollRight();
      }
    )

  }
);
// Scorriento verso sinistra-----------------------------------
function scrollLeft () {
  var imageSelection = $('img.active ');
  imageSelection.removeClass('active');
  var circleSelection = $('i.active')
  circleSelection.removeClass('active')

  if (imageSelection.hasClass('first') == true) {
    $('img.last').addClass('active');
    $('i.last').addClass('active');
  } else {
    imageSelection.prev().addClass('active');
    circleSelection.prev().addClass('active')
  }
}

// Scorriento verso destra-----------------------------------
function scrollRight () {
  var imageSelection = $('img.active ');
  imageSelection.removeClass('active');
  var circleSelection = $('i.active')
  circleSelection.removeClass('active')

  if (imageSelection.hasClass('last') == true) {
    $('img.first').addClass('active');
    $('i.first').addClass('active');
  } else {
    imageSelection.next().addClass('active');
    circleSelection.next().addClass('active')
  }
}
