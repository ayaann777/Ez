// S-Class Website

// Image change functionality for color buttons
function changeImage(imageSrc, button) {
  const mainImage = document.getElementById('main-image');
  const allButtons = document.querySelectorAll('.color-btn');
  
  // Remove active class from all buttons
  allButtons.forEach(btn => btn.classList.remove('active'));
  
  // Add active class to clicked button
  button.classList.add('active');
  
  // Change image with fade effect
  mainImage.style.opacity = '0';
  
  // Change image immediately without delay
  mainImage.src = imageSrc;
  mainImage.style.opacity = '1';
}

// Set the first button as active by default
window.addEventListener('load', function() {
  const firstButton = document.querySelector('.color-btn');
  if (firstButton) {
    firstButton.classList.add('active');
  }
});
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo("#mercedes-text",
    { opacity: 0.1 }, // starting state
    {
      opacity: 2,     // ending state
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#mercedes-text",
        start: "top 85%", // starts animation when 80% of section is in view
        toggleActions: "play none none reverse"
      }
    }
  );
  let count = 0;
  const loader = document.getElementById('loader');
  const counter = document.getElementById('loader-count');
  const interval = setInterval(() => {
    if (count <= 100) {
      counter.textContent = `${count}%`;
      count++;
    } else {
      clearInterval(interval);
      loader.classList.add("opacity-0");
      loader.classList.remove("opacity-100");
      setTimeout(() => {
        loader.style.display = "none";
        document.body.classList.add("opacity-100");
        const nav = document.getElementById("mainnav");
        gsap.set(nav, { height: "100vh", overflow: "hidden" });
        setTimeout(() => {
          gsap.to(nav, { height: "auto", duration: 1, ease: "power2.inOut", onComplete: () => { nav.style.overflow = ""; document.body.style.overflow = ""; } });
        }, 200);
        gsap.from(".text-gray-400, .text-gray-600, a[href='#']", { y: -20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" });
        gsap.from(".menu li", { y: -30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" });
        gsap.from(".font-bold.text-white", { y: -20, opacity: 0, duration: 0.8, ease: "power2.out" });
      }, 20);
    }
  }, 30);



