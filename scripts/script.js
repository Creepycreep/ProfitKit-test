window.addEventListener('DOMContentLoaded', () => {

  let plus = document.querySelectorAll('.btn-plus'),
    min = document.querySelectorAll('.btn-min');

  plus.forEach((plus) => {
    plus.addEventListener('click', () => {
      let amount = plus.previousElementSibling,
        count = +amount.innerHTML;
      if (amount.innerHTML < 99) {
        amount.innerHTML = count + 1;
      }
    });
  });

  min.forEach((min) => {
    min.addEventListener('click', () => {
      let amount = min.nextElementSibling,
        count = +amount.innerHTML;
      if (amount.innerHTML >= 1) {
        amount.innerHTML = count - 1;
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
