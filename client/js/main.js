$body = document.querySelector("body");
$navBar = $body.querySelector(".nav-bar");
$homepage = $body.querySelector("[data-view='homepage']");
$contact = $body.querySelector("[data-view='contact']");
$about = $body.querySelector("[data-view='about']");
$faq = $body.querySelector("[data-view='faq']");
$inventory = $body.querySelector("[data-view='inventory']");
$reviews = $body.querySelector("[data-view='reviews']");
$hamburgerModal = $body.querySelector(".hamburger-menu-container");
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
    hideModal();
  }
  if (event.target.parentElement.matches("nav")) {
    if (event.target.dataset.link === "homepage") {
      revealPage("home");
    } else if (event.target.dataset.link === "about") {
      revealPage("about");
    } else if (event.target.dataset.link === "contact") {
      revealPage("contact");
    } else if (event.target.dataset.link === "faq") {
      revealPage("faq");
    } else if (event.target.dataset.link === "inventory") {
      revealPage("inventory");
    } else if (event.target.dataset.link === "reviews") {
      revealPage("reviews");
    }
  }
}

function revealPage(dataView) {
  hidePages();
  if (dataView === "home") {
    $homepage.classList.remove("hidden");
  } else if (dataView === "about") {
    $about.classList.remove("hidden");
  } else if (dataView === "contact") {
    $contact.classList.remove("hidden");
  } else if (dataView === "faq") {
    $faq.classList.remove("hidden");
  } else if (dataView === "inventory") {
    $inventory.classList.remove("hidden");
  } else if (dataView === "reviews") {
    $reviews.classList.remove("hidden");
  }
  hideModal();
}

function hidePages() {
  for (var i = 0; i < $body.children.length; i++) {
    if ($body.children[i].dataset.view) {
      $body.children[i].classList.add("hidden");
    }
  }
}

function hideModal() {
  $hamburgerMenu.style.transform = `translateX(0)`;
  setTimeout(() => {
    $hamburgerModal.classList.add("hidden");
  }, 250);
}

function handleNavFormSubmits(event) {
  event.preventDefault();
  $navForm.reset();
}
