$navBar = document.querySelector(".nav-bar");
$hamburgerModal = document.querySelector(".hamburger-menu-container");
$hamburgerMenu = $hamburgerModal.firstElementChild;

$navBar.addEventListener("click", handleNavBarClicks);
$hamburgerMenu.addEventListener("click", handleHamburgerMenuClicks);

function handleNavBarClicks(event) {
  if (event.target.matches(".hamburger-icon")) {
    $hamburgerModal.classList.remove("hidden");
    setTimeout(() => {
      $hamburgerMenu.style.transform = `translateX(12rem)`;
    }, 10);
  }
  if (event.target.matches(".search-icon")) {
  }
}

function handleHamburgerMenuClicks(event) {
  if (event.target.matches(".hamburger-exit")) {
    $hamburgerMenu.style.transform = `translateX(0)`;
    setTimeout(() => {
      $hamburgerModal.classList.add("hidden");
    }, 250);
  }
}
