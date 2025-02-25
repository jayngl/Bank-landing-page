const toggleMenu = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");
let istoggled = false;

toggleMenu.addEventListener("click", () => {
  istoggled = !istoggled;
  if (istoggled) {
    menu.style.display = "flex";
    toggleMenu.src = "public/images/icon-close.svg";
    document.body.style.overflow = "hidden";
  } else {
    menu.style.display = "none";
    toggleMenu.src = "public/images/icon-hamburger.svg";
    document.body.style.overflow = "scroll";
  }
});
