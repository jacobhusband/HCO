$form = document.querySelector("form");

$form.addEventListener("submit", handleLogin);

function handleLogin(event) {
  event.preventDefault();
  const form = event.target.elements;
  const username = form[0].value;
  const password = form[1].value;
  if (username === "blah" && password === "blah") {
  }
}
