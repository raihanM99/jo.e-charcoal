$(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    navSpeed: 10,
    // center: true,
    rtl: true,
    responsive: {
      300: {
        items: 1,
        margin: 10,
        center: true,
        autoWidth: true,
      },
      768: {
        items: 2,
        margin: 10,
      },
    },
  });

  let hamburger = $("button.hamburger");
  if (hamburger.length) {
    hamburger.click(function () {
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

  $(".nav-item a").click(function () {
    const sectionId = this.dataset.id;
    const sectionEl = $(`section#${sectionId}`);
    const headerHeight = $("header")[0].offsetHeight;
    const offsetTop = sectionEl.offset().top - headerHeight;
    $(".nav-item.active").removeClass("active");
    $(this).parent().addClass("active");

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });

  $(".get-to-know").click(function () {
    const sectionEl = $("section#description");
    const headerHeight = $("header")[0].offsetHeight;
    const offsetTop = sectionEl.offset().top - headerHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });

  $(".order-button").click(function () {
    window.open("https://wa.me/6285792138348", "_blank");
  });
});
