// smooth scrolling 暂时用不到


// Hide navbar when scrolling to certain position

// var nav = document.querySelector('#navbar');
// var headroom = new Headroom(nav, {
//   "offset": 200,
//   "tolerance": 5,
//   "classes": {
//     "unpinned": "navbar--unpinned"
//   }
// });
// headroom.init();

// another solution i guess (yes it works but a bit wired)
window.addEventListener('scroll',function(){
  if(window.scrollY > 150){
    document.querySelector('#navbar').style.opacity = 0; 
  } else {
    document.querySelector('#navbar').style.opacity = 1; 
  }
  }
); 


jQuery('.image-slider').slick({
  slidesToShow: 1.7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,

});


// Section:explore, slider for image and text

$(document).ready(function(){
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
});
