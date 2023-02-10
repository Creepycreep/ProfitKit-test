window.addEventListener('DOMContentLoaded', () => {

  let btn = document.querySelectorAll('.carousel');

  btn.forEach((btn) => {
    btn.addEventListener(('click'), (e) => {
      if (e.target && e.target.classList.contains('btn-plus')) {
        let amount = e.target.previousElementSibling,
          count = +amount.innerHTML;
        if (amount.innerHTML < 99) {
          amount.innerHTML = count + 1;
        }

      }

      if (e.target && e.target.classList.contains('btn-min')) {
        let amount = e.target.nextElementSibling,
          count = +amount.innerHTML;
        if (amount.innerHTML >= 1) {
          amount.innerHTML = count - 1;
        }
      }

    });

  });



  // slider
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.button-prev'),
    nextArrow: $('.button-next'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]

  });


});
