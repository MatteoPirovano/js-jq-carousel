$(document).ready(
  function() {

    $('.prev').click(
      function() {

      }
    )
    $('.next').click(
      function() {
        scrollRight();
      }
    )

  }
);
function scrollLeft () {}
function scrollRight () {
  var imageSelection = $('img.active ');
  imageSelection.removeClass('active');
  imageSelection.next().addClass('active');
}
