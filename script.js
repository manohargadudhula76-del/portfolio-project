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
