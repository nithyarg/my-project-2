// nothing happeans we need to write the script
var swiper = new Swiper(".myswiper", {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

// logo animotion
TweenMax.from(".logo", 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".menu-links ul li",
  1,
  {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut,
  },
  0.08
);

//search sectrion
TweenMax.from(".search", 1, {
  delay: 0.5,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

   // account

TweenMax.from(".account", 1, {
  delay:0.6,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

//cart
TweenMax.from(".cart", 1, {
  delay: 0.7,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

//juice section
TweenMax.from(".juice", 1, {
  delay: 2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

// Title
TweenMax.from(".title", 1, {
  delay: 1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

// tagline
TweenMax.from(".tagline", 1, {
  delay: 1.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

//pages
TweenMax.from(".pages", 1, {
  delay: 1.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

//more section
TweenMax.from(".more", 1, {
  delay: 1.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

//description
TweenMax.from(".desc", 1, {
  delay: 1.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

//arrows
TweenMax.from(".arrows", 1, {
  delay: 2,
  opacity: 0,
  ease: Expo.easeInOut,

});




  
