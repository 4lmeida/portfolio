export function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  const navList = document.querySelector(".nav-list");
  const mobileMenu = document.querySelector(".mobile-menu");

  navList.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  const active = mobileMenu.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

const btnMobile = document.querySelector(".mobile-menu");

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
