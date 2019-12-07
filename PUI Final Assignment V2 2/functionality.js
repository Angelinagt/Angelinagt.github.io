
//scrolling animation

// var tl = new TimelineMax({onUpdate:updatePercentage});
// const controller = new ScrollMagic.Controller();

// tl.from("#aboutimg1", 1, {x:-200, opacity: 0});

// const scene = new ScrollMagic.Scene({
//   triggerElement:"#aboutimg1",
//   triggerHook: "onCenter"
// })
//   .setTween(tl)
//     .addTo(controller);

// function updatePercentage() {
//   tl.progress();
//   console.log(tl.progress());
// }


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

//Test Donation button

// new Vue({
//   el: "#app",
//   data() {
//     return {
//       currentCardBackground: Math.floor(Math.random()* 25 + 1), // just for fun :D
//       cardName: "",
//       cardNumber: "",
//       cardMonth: "",
//       cardYear: "",
//       cardCvv: "",
//       minCardYear: new Date().getFullYear(),
//       amexCardMask: "#### ###### #####",
//       otherCardMask: "#### #### #### ####",
//       cardNumberTemp: "",
//       isCardFlipped: false,
//       focusElementStyle: null,
//       isInputFocused: false
//     };
//   },
//   mounted() {
//     this.cardNumberTemp = this.otherCardMask;
//     document.getElementById("cardNumber").focus();
//   },
//   computed: {
//     getCardType () {
//       let number = this.cardNumber;
//       let re = new RegExp("^4");
//       if (number.match(re) != null) return "visa";

//       re = new RegExp("^(34|37)");
//       if (number.match(re) != null) return "amex";

//       re = new RegExp("^5[1-5]");
//       if (number.match(re) != null) return "mastercard";

//       re = new RegExp("^6011");
//       if (number.match(re) != null) return "discover";

//       return "visa"; // default type
//     },
// 		generateCardNumberMask () {
// 			return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
//     },
//     minCardMonth () {
//       if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
//       return 1;
//     }
//   },
//   watch: {
//     cardYear () {
//       if (this.cardMonth < this.minCardMonth) {
//         this.cardMonth = "";
//       }
//     }
//   },
//   methods: {
//     flipCard (status) {
//       this.isCardFlipped = status;
//     },
//     focusInput (e) {
//       this.isInputFocused = true;
//       let targetRef = e.target.dataset.ref;
//       let target = this.$refs[targetRef];
//       this.focusElementStyle = {
//         width: `${target.offsetWidth}px`,
//         height: `${target.offsetHeight}px`,
//         transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
//       }
//     },
//     blurInput() {
//       let vm = this;
//       setTimeout(() => {
//         if (!vm.isInputFocused) {
//           vm.focusElementStyle = null;
//         }
//       }, 300);
//       vm.isInputFocused = false;
//     }
//   }
// });



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

