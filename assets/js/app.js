
$(document).ready(function(){
    $('.sliders').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });
    $('.multiple-items-5').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left hidden-on-mobile btn-container '><i class='btn-container__icon fas fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right hidden-on-mobile btn-container '><i class='btn-container__icon fas fa-chevron-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 739,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,

              }
            },
            
        ]
      });
    $('.multiple-items-4').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left hidden-on-mobile btn-container '><i class='btn-container__icon fas fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right hidden-on-mobile btn-container '><i class='btn-container__icon fas fa-chevron-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 739,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,

              }
            },
            
        ]
      });  
      $('.multiple-items-3').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left hidden-on-mobile btn-container '><i class='btn-container__icon fas fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right hidden-on-mobile btn-container '><i class='btn-container__icon fas fa-chevron-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 739,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,

              }
            },
            
        ]
      });
      $('.multiple-items-3-no').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left hidden-on-mobile btn-container '><i class='btn-container__icon fas fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right hidden-on-mobile btn-container '><i class='btn-container__icon fas fa-chevron-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 739,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,

              }
            },
            
        ]
      });
  });