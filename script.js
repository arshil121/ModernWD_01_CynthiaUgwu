//Function for adding smooth scroll with locomotive
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// Function for attaching the white circle with mouse
let timeout;
const minicircle = document.querySelector("#minicircle");

// Function for attaching the white circle with mouse
function circleMouseFollower(xscale, yscale) {
  if (minicircle) {
    minicircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(${xscale}, ${yscale})`;
  }
}

// Function for making the circle skew while moving the mouse
function skewMaker() {
  clearTimeout(timeout);

  // Define default scale value
  let xscale = 1;
  let yscale = 1;
  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", (event) => {
    xscale = clamp(0.8, 1.2, event.clientX - xprev);
    yscale = clamp(0.8, 1.2, event.clientY - yprev);

    xprev = event.clientX;
    yprev = event.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(() => {
      if (minicircle) {
        minicircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1, 1)`;
      }
    }, 100);
  });
}

// Define the clamp function if it's not already defined
function clamp(min, max, value) {
  return Math.min(Math.max(value, min), max);
}



//Function to add animation to nav and h5-h1
function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut",
  })
    .to(".boundingelem", {
      y: 0,
      ease: "expo.inOut",
      duration: 1.5,
      delay: -1,
      stagger: 0.2,
    })
    .from("#lpFooter", {
      y: -10,
      opacity: 0,
      delay: -1,
      ease: "expo.inOut",
      duration: 1.5,
    });
}

// Use hardware-accelerated properties for smoother animations
gsap.set(".boundingelem", { transformOrigin: "center center" });

firstPageAnim();
skewMaker();
circleMouseFollower();

