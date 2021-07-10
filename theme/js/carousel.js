var viewport_width = window.innerWidth;
$(window).resize(function () {
  viewport_width = window.innerWidth;
});
if (viewport_width > 780) {
  var indexToGet = $('.slider .slick-slide').index($('#center_on_me'));

  $('.slider-nav').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3.68,
    speed: 1000,
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    initialSlide: indexToGet,
    dots: true,
    focusOnSelect: true,
  });
} else if (viewport_width > 500) {
  var indexToGet = $('.slider .slick-slide').index($('#center_on_me'));

  $('.slider-nav').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    speed: 1000,
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
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1.65,
    speed: 1000,
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    initialSlide: indexToGet,
    dots: true,
    focusOnSelect: true,
  });
  $('.slick-slide').style.width = 300;
}
