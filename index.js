const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const style = getComputedStyle(body);

window.addEventListener(
  "scroll",
  (event) => {
    navbar.style.background =
      window.scrollY > 400
        ? style.getPropertyValue("--clr-gradient")
        : "transparent";
  },
  { passive: true }
);
