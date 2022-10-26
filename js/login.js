const client = filestack.init("Au6yH4AISTOa8ZAgolrtGz");

// const options = {
//   onFileSelected: (file) => {
//     if (file.size > 1000 * 1000) {
//       throw new Error("File too big, select something smaller than 1 MB");
//     }
//   },
//   onFileUploadFinished: (file) => {},
//   maxFiles: 5,
// };

const $form = document.querySelector("form");
const $admin = document.querySelector(".admin.panel");
const $content = document.querySelector(".content");
const $new = document.querySelector(".new.entry");

$form.addEventListener("submit", handleLogin);
$admin.addEventListener("click", handleAdminClicks);
$new.addEventListener("submit", handleNewItems);
$new.addEventListener("click", handleNewItemClicks);

async function handleImageUpload(event) {
  const imageFile = event.target.files[0];
  console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
  console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(imageFile, options);
    console.log("compressedFile instanceof Blob", compressedFile instanceof Blob); // true
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

    // await uploadToServer(compressedFile);
  } catch (error) {
    console.log(error);
  }
}

function handleNewItemClicks(event) {
  if (event.target.matches("button.img.plus")) {
    client.picker(options).open();
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
