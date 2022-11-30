const $form = document.querySelector("form");
const $admin = document.querySelector(".admin.panel");
const $sofas = $admin.querySelector(".sofas");
const $mattresses = $admin.querySelector(".mattresses");
const $tables = $admin.querySelector(".tables");
const $content = document.querySelector(".content");
const $new = document.querySelector(".new.entry");

$form.addEventListener("submit", handleLogin);
$admin.addEventListener("click", handleAdminClicks);
$new.addEventListener("submit", handleNewItems);
$new.addEventListener("click", handleNewItemClicks);

function handleNewItemClicks(event) {
  if (event.target.matches("button.img.plus")) {
    fetch(window.location.origin + "/filestack");
  }
  if (event.target.matches("button.cancel")) {
    $new.reset();
    $new.classList.add("hidden");
    $admin.classList.remove("hidden");
  }
}

function handleNewItems(event) {
  event.preventDefault();
  event.target.reset();
}

function handleLogin(event) {
  event.preventDefault();
  const form = event.target.elements;
  const username = form[0].value;
  const password = form[1].value;
  if (username === "tyler" && password === "husband") {
    $form.classList.add("hidden");
    $admin.classList.remove("hidden");
    grabData();
  }
}

function grabData() {
  fetch(window.location.origin + "/api/products")
    .then((res) => res.json())
    .then((data) => {
      for (const obj of data) {
        if (obj.category === "sofa") {
          $sofas.appendChild(createDataTableElement(obj.name, obj.id));
        } else if (obj.category === "mattress") {
          $mattresses.appendChild(createDataTableElement(obj.name, obj.id));
        } else if (obj.category === "table") {
          $tables.appendChild(createDataTableElement(obj.name, obj.id));
        }
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

function createDataTableElement(title, id) {
  return createElement("div", { class: "item row shadow", id: id }, [
    createElement("p", { class: "title col-three-fourth", text: title }),
    createElement("p", { class: "date col-fourth text-align-right", text: "10/20/22" }),
    createElement("button", { class: "item delete col-eighth", text: "X" }),
  ]);
}

function createElement(tag, attr, children) {
  const kids = children === undefined ? [] : children;
  const el = document.createElement(tag);
  for (const key in attr) {
    if (key === "class") {
      el.className = attr[key];
    } else if (key === "text") {
      el.textContent = attr[key];
    } else if (key === "id") {
      el.dataset.id = attr[key];
    } else {
      el.setAttribute(key, attr[key]);
    }
  }
  for (const kid of kids) {
    el.appendChild(kid);
  }
  return el;
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
