
//scrolling animation

var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("#aboutimg1", 1, {x:-200, opacity: 0});

const scene = new ScrollMagic.Scene({
  triggerElement:"#aboutimg1",
  triggerHook: "onCenter"
})
  .setTween(tl)
    .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}


//type animation

function updateText() {
  var options = {
    strings: ["A LIFE", "A LIFE", "A COMMUNITY", "THE WORLD"],
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 2000,
    showCursor: false,
    loop: true
    }
    var typed = new Typed(".p2", options);
  
}

$('.hero-down').mousedown(function() {
  TweenMax.fromTo('.btn-react', 0.25, {
    opacity: 0,
    scale: 0
  }, {
    opacity: 0.25,
    scale: 1,
    onComplete: function() {
      TweenMax.to('.btn-react', 0.25, {
        opacity: 0,
        scale: 0
      });
    }
  });
});


//Navigation

$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});

// smooth scroll to div

//TESTIMONAL INFO

// jQuery(document).ready(function($) {
// 	//create the slider
// 	$('.cd-testimonials-wrapper').flexslider({
// 		selector: ".cd-testimonials > li",
// 		animation: "slide",
// 		controlNav: true,
// 		slideshow: false,
// 		smoothHeight: true,
// 		start: function() {
// 			$('.cd-testimonials').children('li').css({
// 				'opacity': 1,
// 				'position': 'relative'
// 			});
// 		}
// 	});
// });


//adding modal to button selection
//
// var modalBtn = document.querySelector('.button1');
// var modalBg = document.querySelector('.modal-bg');
// var modalClose = document.querySelector('.modal-close');

// modalBtn.addEventListener('click',function(){
//   modalBg.classList.add('bg-active')
// });

// modalClose.addEventListener('click',function(){
//   modalBg.classList.remove('bg-active')
// }
// )

