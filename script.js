const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

/* close menu when clicking link */
document.querySelectorAll(".menu-bar a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});
// Scroll animation for all sections (desktop + mobile)
const sections = document.querySelectorAll(
  '.sec-1, .sec2, .sec3, .sec4, .sec5, .sec6'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-section');
      } else {
        entry.target.classList.remove('show-section'); // works on scroll up
      }
    });
  },
  {
    threshold: 0.2
  }
);

sections.forEach(section => observer.observe(section));
