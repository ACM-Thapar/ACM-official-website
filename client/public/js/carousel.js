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
