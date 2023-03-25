var swiper = new Swiper(".logo_slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  loopedSlides: 4,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    
    500: {
      slidesPerView: 3, 
    },
    1024: {
      slidesPerView: 4, // for large screens
    },
  },
});

var swiper = new Swiper(".programs-slider", {
  loop: true,
  spaceBetween: 50,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});


$(document).ready(function() {
    $('.nav-menu li a').click(function() {
      $('.nav-menu li a').removeClass('active');
      $(this).addClass('active');
    });
  });



  $(document).ready(function() {
    $("#openNav").click(function() {
      $("#myDiv").addClass("active");
    });
  });

  $(document).ready(function() {
    $("#closeNav").click(function() {
      $("#myDiv").removeClass("active");
    });
  });