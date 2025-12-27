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
const sections = document.querySelectorAll(
  '.sec1,.sec2,.sec3,.sec4,.sec5'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('sec-show');   // animate IN
      } else {
        entry.target.classList.remove('sec-show'); // reset when OUT
      }
    });
  },
  {
    threshold: 0.2
  }
);

sections.forEach(section => observer.observe(section));

