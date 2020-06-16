$(Document).ready(function () {
  $(".slider-top-js").slick({
    arrows: true,
    slidesToShow: 1,
    slideToscroll: 1,
    speed: 800,
    nextArrow: $(".arrows-slider-top__arrow_prev"),
    prevArrow: $(".arrows-slider-top__arrow_next"),
    responsive: [
      {
        breakpoint: 960,
        settings: {
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});  


$(Document).ready(function () {
  $(".slider-popular-js").slick({
    arrows: true,
    slidesToShow: 3,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    rows: 1,
    nextArrow: $(".arrows-slider-popular__arrow_next"),
    prevArrow: $(".arrows-slider-popular__arrow_prev"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 978,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],

  });
 
});

$(Document).ready(function () {
  $(".spleasure-js").slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    adapitveHeight: true,
    rows: 1,
    nextArrow: $(".arrows-spleasure__arrow_next"),
    prevArrow: $(".arrows-spleasure__arrow_prev"),
    responsive: [
      {
        breakpoint: 819,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});




$(Document).ready(function () {
  $(".safity-js").slick({
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: 'linear',
    nextArrow: $(".arrow-saf_next"),
    prevArrow: $(".arrow-saf_prev"),
    responsive: [
      {
        breakpoint: 819,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
$(Document).ready(function () {
  $(".slider-news-js").slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: 'linear',
    nextArrow: $(".arrows-slider-news__arrow_next"),
    prevArrow: $(".arrows-slider-news__arrow_prev"),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 840, 
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});



$(Document).ready(function () {
  $(".slider-manager-js").slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    // infinite: false,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    adapitveHeight: true,
    rows: 1,
    nextArrow: $(".arrows-slider-manager__arrow_next"),
    prevArrow: $(".arrows-slider-manager__arrow_prev"),
    responsive: [
      {
        breakpoint: 819,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(Document).ready(function () {
  $(".slider-bild-js").slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: 'linear',
    nextArrow: $(".arrows-slider-bild__arrow_next"),
    prevArrow: $(".arrows-slider-bild__arrow_prev"),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
$(Document).ready(function () {
  $(".slider-near-js").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: 'linear',
    nextArrow: $(".arrows-nearhome__arrow_next"),
    prevArrow: $(".arrows-nearhome__arrow_prev"),
  });
});
$(Document).ready(function () {
  $(".slider-children-js").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: 'linear',
    nextArrow: $(".arrows-children__arrow_next"),
    prevArrow: $(".arrows-children__arrow_prev"),
  });
});
$(Document).ready(function () {
  $(".slider-parking-js").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: 'linear',
    nextArrow: $(".arrows-parking__arrow_next"),
    prevArrow: $(".arrows-parking__arrow_prev"),
  });
});
$(Document).ready(function () {
  $(".slider-tradition-js").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: 'linear',
    nextArrow: $(".arrows-tradition__arrow_next"),
    prevArrow: $(".arrows-tradition__arrow_prev"),
  
  });
});
$(Document).ready(function () {
  $(".slider-photo-js").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: 'linear',
    nextArrow: $(".arrows-slider-photo__arrow_next"),
    prevArrow: $(".arrows-slider-photo__arrow_prev"),

  });
});
