var viewport_width = window.innerWidth;
$(window).resize(function () {
  viewport_width = window.innerWidth;
  window.location.reload();
});
if (viewport_width > 500) {
  var indexToGet = $('.slider .slick-slide').index($('#center_on_me'));

  $('.slider-nav').slick({
    slidesToShow: 3,
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    initialSlide: indexToGet,
    dots: true,
    focusOnSelect: true,
  });
} else {
  var indexToGet = $('.slider .slick-slide').index($('#center_on_me'));

  $('.slider-nav').slick({
    slidesToShow: 1.65,
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    initialSlide: indexToGet,
    dots: true,
    focusOnSelect: true,
  });
  $('.slick-slide').style.width = 300;
}
