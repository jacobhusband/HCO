$form = document.querySelector("form");
$admin = document.querySelector(".admin.panel");

$form.addEventListener("submit", handleLogin);

function handleLogin(event) {
  event.preventDefault();
  const form = event.target.elements;
  const username = form[0].value;
  const password = form[1].value;
  if (username === "tyler" && password === "husband") {
    $form.classList.add("hidden");
    $admin.classList.remove("hidden");
  }
}
