$(function() {
  $(".owl-carousel").owlCarousel({
    items: 2,
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    navSpeed: 10,
    // center: true,
    rtl: true,
  });

  let hamburger = $("button.hamburger");
  if (hamburger.length) {
    hamburger.click(function() {
      const nav = $(this).parent().find("nav ul");

      if (this.classList.contains("is-active")) {
        nav.addClass("is-active");
      } else {
        nav.removeClass("is-active");
      }
    });
  }

  AOS.init();

  if (window.innerWidth <= 767) {
    $("section#description article div.image").removeAttr("data-aos-anchor-placement");
  }
})