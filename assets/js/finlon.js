(function ($) {
  "use strict";

  // window scroll event

  $(window).on("scroll", function () {
    if ($(".main-menu").length) {
      var headerScrollPos = 43;
      var stricky = $(".main-menu");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }
  });

  $(window).on("scroll", function () {
    if ($(".page-header").length) {
      var headerScrollPos = 43;
      var stricky = $(".page-header");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed-1");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed-1");
      }
    }
  });

  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split("/").reverse()[0];

    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == FileName) {
        $(this).addClass("current");
      }
    });
    // if any li has .current elmnt add class
    selector.children("li").each(function () {
      if ($(this).find(".current").length) {
        $(this).addClass("current");
      }
    });
    // if no file name return
    if ("" == FileName) {
      selector.find("li").eq(0).addClass("current");
    }
  }

  if ($(".main-menu__list").length) {
    // dynamic current class
    let mainNavUL = $(".main-menu__list");
    dynamicCurrentMenuClass(mainNavUL);
  }

  if ($(".main-menu").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu__nav").innerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;
  }
  if ($(".sticky-header__content").length) {
    let navContent = document.querySelector(".main-menu").innerHTML;
    let mobileNavContainer = document.querySelector(".sticky-header__content");
    mobileNavContainer.innerHTML = navContent;
  }

  if ($(".mobile-nav__container .main-menu__list").length) {
    let dropdownAnchor = $(
      ".mobile-nav__container .main-menu__list .dropdown > a"
    );
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement("BUTTON");
      toggleBtn.setAttribute("aria-label", "dropdown toggler");
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("expanded");
        self.parent().toggleClass("expanded");
        self.parent().parent().children("ul").slideToggle();
      });
    });
  }

  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  if ($(".range-slider-price").length) {
    var priceRange = document.getElementById("range-slider-price");

    noUiSlider.create(priceRange, {
      start: [30, 150],
      limit: 200,
      behaviour: "drag",
      connect: true,
      range: {
        min: 10,
        max: 200,
      },
    });

    var limitFieldMin = document.getElementById("min-value-rangeslider");
    var limitFieldMax = document.getElementById("max-value-rangeslider");

    priceRange.noUiSlider.on("update", function (values, handle) {
      (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
    });
  }

  // let thmOwlCarousels = $(".thm-owl__carousel");
  // if (thmOwlCarousels.length) {
  //   thmOwlCarousels.each(function () {
  //     let elm = $(this);
  //     let options = elm.data("owl-options");
  //     let thmOwlCarousel = elm.owlCarousel(
  //       // "object" === typeof options ? options : JSON.parse(options)
  //     );
  //   });
  // }

  // let thmOwlNavCarousels = $(".thm-owl__carousel--custom-nav");
  // if (thmOwlNavCarousels.length) {
  //   thmOwlNavCarousels.each(function () {
  //     let elm = $(this);
  //     let owlNavPrev = elm.data("owl-nav-prev");
  //     let owlNavNext = elm.data("owl-nav-next");
  //     $(owlNavPrev).on("click", function (e) {
  //       elm.trigger("prev.owl.carousel");
  //       e.preventDefault();
  //     });

  //     $(owlNavNext).on("click", function (e) {
  //       elm.trigger("next.owl.carousel");
  //       e.preventDefault();
  //     });
  //   });
  // }

  // window load event

  // $(document).ready(function () {
  //   $(".pressSlider").bxSlider({
  //     pagerCustom: "#press-pager",
  //   });
  // });

  // $(window).on("load", function () {
  //   if ($(".preloader").length) {
  //     $(".preloader").fadeOut();
  //   }
  // });

  // Show the scroll-to-top button when the user scrolls down
  window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var scrollButton = document.querySelector('.scroll-to-top');
    if (scrollPosition > 200) {
      if (!scrollButton.classList.contains('show')) {
        scrollButton.style.transition = 'opacity 0.4s ease';
        scrollButton.classList.add('show');
      }
    } else {
      if (scrollButton.classList.contains('show')) {
        scrollButton.style.transition = 'opacity 0.4s ease';
        scrollButton.classList.remove('show');
      }
    }
  });
  
  document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });

  $(".bannerSlider").bxSlider({
    auto: true,
    mode: "fade",
    pager: false,
    autoControls: true,
    stopAutoOnClick: true,
  });

  $(document).ready(function () {
    $(".bx-wrapper .bx-controls-auto .bx-controls-auto-item:last-child").click(
      function () {
        $(this).hide();
        $(
          ".bx-wrapper .bx-controls-auto .bx-controls-auto-item:first-child"
        ).show();
      }
    );

    $(".bx-wrapper .bx-controls-auto .bx-controls-auto-item:first-child").click(
      function () {
        $(this).hide();
        $(
          ".bx-wrapper .bx-controls-auto .bx-controls-auto-item:last-child"
        ).show();
      }
    );
  });

  $(".Profileslider").bxSlider({
    pagerCustom: "#bx-pager",
  });

  $(".stop").click(function () {
    $(this).css("display", "none");
    $(".play").css("display", "block");
  });
  $(".play").click(function () {
    $(this).css("display", "none");
    $(".stop").css("display", "block");
  });

  var owl5 = $(".clientSlider");
  owl5.owlCarousel({
    loop: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 4,
    autoplay: 6000,
    autoplayTimeout: 2000,
    smartSpeed: 500,
    nav: true,
    dots: false,
    margin: 40,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 4,
      },
      768: {
        items: 5,
      },
      992: {
        items: 7,
      },
      1200: {
        items: 9,
      },
    },
  });

  $(".clientPlay").on("click", function () {
    owl5.trigger("play.owl.autoplay", [1000]);
  });
  $(".clientStop").on("click", function () {
    owl5.trigger("stop.owl.autoplay");
  });

  // scriptCatogay Slider js

  $(document).ready(function () {
    $(".scriptCategory").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1000, // 5 seconds
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
    });
  });

  // Top script slider

  $(document).ready(function () {
    $(".topScriptSlider").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1000, // 5 seconds
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
    });
  });

  // top-rated script writer
  $(document).ready(function () {
    $(".topScriptWritterSlider").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1000, // 5 seconds
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".sidebar a").forEach(function (element) {
      element.addEventListener("click", function (e) {
        let nextEl = element.nextElementSibling;
        let parentEl = element.parentElement;

        if (nextEl) {
          e.preventDefault();
          let mycollapse = new bootstrap.Collapse(nextEl);

          if (nextEl.classList.contains("show")) {
            mycollapse.hide();
          } else {
            mycollapse.show();
            // find other submenus with class=show
            var opened_submenu =
              parentEl.parentElement.querySelector(".collapse.show");
            // if it exists, then close all of them
            if (opened_submenu) {
              new bootstrap.Collapse(opened_submenu);
            }
          }
        }
      }); // addEventListener
    }); // forEach

    $(".sidebar .collapse").parent().addClass("has-submenu");
    $(".has-submenu").click(function () {
      $(this).toggleClass("arrow");
      $(this).siblings().removeClass("arrow");
    });
  });

  $(function () {
    $(".stickyRightMenu-5 a[href*=\\#]:not([href=\\#])").on(
      "click",
      function () {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.substr(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              //scrollTop: (target.offset().top - 0)
              scrollTop: target.offset().top - 110,
            },
            1000
          );
          return false;
        }
      }
    );
  });

  $('[data-fancybox="images"]').fancybox({
    thumbs: {
      autoStart: true,
      axis: "x",
    },
  });

  //redir
})(jQuery);


