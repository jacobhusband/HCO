const client = filestack.init("Au6yH4AISTOa8ZAgolrtGz");
const $form = document.querySelector("form");
const $admin = document.querySelector(".admin.panel");
const $content = document.querySelector(".content");
const $new = document.querySelector(".new.entry");

$form.addEventListener("submit", handleLogin);
$admin.addEventListener("click", handleAdminClicks);

function handleLogin(event) {
  event.preventDefault();
  const form = event.target.elements;
  const username = form[0].value;
  const password = form[1].value;
  if (username === "tyler" && password === "husband") {
    $form.classList.add("hidden");
    $admin.classList.remove("hidden");
    client.picker().open();
  }
}

function handleAdminClicks(event) {
  if (event.target.matches("[data-link]")) {
    Array.from($content.children).forEach((child) => {
      child.classList.add("hidden");
    });
  }
  if (event.target.matches('[data-link="sofas"]')) {
    $admin.dataset.view = "sofas";
    $content.querySelector(".sofas").classList.remove("hidden");
    return;
  }
  if (event.target.matches('[data-link="mattresses"]')) {
    $admin.dataset.view = "mattresses";
    $content.querySelector(".mattresses").classList.remove("hidden");
    return;
  }
  if (event.target.matches('[data-link="tables"]')) {
    $admin.dataset.view = "tables";
    $content.querySelector(".tables").classList.remove("hidden");
    return;
  }
  if (event.target.matches(".plus.center") || event.target.matches(".add.item")) {
    $admin.classList.add("hidden");
    $new.classList.remove("hidden");
    return;
  }
}
