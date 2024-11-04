var tl = gsap.timeline();

tl.from(".navbar h1", {
  scale: 2,
  duration: 2,
  y: 50,
  rotate: 360,
});

tl.from(".navbar ul li", {
  opacity: 0,
  y: -20,
  duration: 1,
  stagger: 0.5,
});

tl.from(".content-heading", {
  opacity: 0,
  duration: 2,
  delay: 0.5,
});

let typed = new Typed(".auto-type", {
  strings: [
    "A modern home design project focused on creating a stylish, functional, and personalized living space with sustainable materials and optimal layout!",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
});
