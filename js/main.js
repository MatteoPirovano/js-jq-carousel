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


  var imageFirst = $('img.first');
  var circleFirst = $('i.first')
  if (imageFirst == true) {
    imageLast.addClass('active');
    circleLast.addClass('active');
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

  var imageLast = $('img.last');
  var circleLast = $('i.last')
  if (imageLast == true && circleLast == true) {
    imageFirst.addClass('active');
    circleFirst.addClass('active');
  } else {
    imageSelection.next().addClass('active');
    circleSelection.next().addClass('active')
  }
}
