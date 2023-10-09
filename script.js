//Function for adding smooth scroll with locomotive
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//Function for attaching the white circle with mouse
function circleMouseFollower() {
  window.addEventListener("mousemove", function (event) {
    const minicircle = document.querySelector("#minicircle");
    if (minicircle) {
      minicircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    }
  });
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

circleMouseFollower();
firstPageAnim();
