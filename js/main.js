$navBar = document.querySelector(".nav-bar");
$hamburgerModal = document.querySelector(".hamburger-menu-container");
$hamburgerMenu = $hamburgerModal.firstElementChild;
$navForm = $navBar.querySelector("form");
$searchIcon = $navBar.querySelector(".search-icon");
$searchInput = $navBar.querySelector("input");
$searchX = $navBar.querySelector(".search-x");

$navBar.addEventListener("click", handleNavBarClicks);
$hamburgerModal.addEventListener("click", handleHamburgerModalClicks);
$navForm.addEventListener("submit", handleNavFormSubmits);
$searchInput.addEventListener("blur", hideSearchInput);

function handleNavBarClicks(event) {
  if (event.target.matches(".hamburger-icon")) {
    $hamburgerModal.classList.remove("hidden");
    setTimeout(() => {
      $hamburgerMenu.style.transform = `translateX(12rem)`;
    }, 10);
  }
  if (event.target.matches(".search-icon")) {
    $searchIcon.style.transform = `translateX(-12.5rem)`;
    setTimeout(() => {
      $searchInput.classList.remove("hidden");
      $searchX.classList.remove("hidden");
      $searchInput.focus();
    }, 400);
  }
  if (event.target.matches(".search-x")) {
    hideSearchInput();
  }
}

function hideSearchInput() {
  $searchX.classList.add("hidden");
  $searchIcon.style.transform = `translateX(0)`;
  setTimeout(() => {
    $searchInput.classList.add("hidden");
  }, 10);
}

function handleHamburgerModalClicks(event) {
  if (event.target.matches(".hamburger-exit") || event.target.matches(".hamburger-menu-container")) {
    $hamburgerMenu.style.transform = `translateX(0)`;
    setTimeout(() => {
      $hamburgerModal.classList.add("hidden");
    }, 250);
  }
}

function handleNavFormSubmits(event) {
  event.preventDefault();
  $navForm.reset();
}
