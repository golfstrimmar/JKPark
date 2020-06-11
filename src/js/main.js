

// -------------burger----------------------

$(Document).ready(function () {
  $(".icon-menu").click(function (event) {
    $(".sidebar__burger").toggleClass("active-sidebar-burger"),
      $(".left-sidebar__body").toggleClass("active-sidebar"),
      $(".header__burger").toggleClass("header-burger-active"),
      $("body").toggleClass("lock");
  });
});


$(Document).ready(function () {
  $(".icon-side").click(function (event) {
    $(this).toggleClass("side-menu-icon-active"),
      $('.side-menu').toggleClass("side-menu-active"),

      $("body").toggleClass("lock");
  });
});







function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

ibg();

//  alert('hhhhh');







