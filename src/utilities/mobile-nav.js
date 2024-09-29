const headerBtn = document.querySelector(".header-bar");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav-link");

let isMobileNavOpen = false;

export default function responsiveNsvBar() {
  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      // document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      // document.body.style.overflowY = "auto";
    }

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        isMobileNavOpen = false;
        mobileNav.style.display = "none";
        // document.body.style.overflowY = "auto";
      });
    });
  });
}
