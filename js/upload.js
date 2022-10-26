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

    await uploadToServer(compressedFile);
  } catch (error) {
    console.log(error);
  }
}

async function uploadToServer(file) {
  const url = "https://www.filestackapi.com/api/store/S3?key=Au6yH4AISTOa8ZAgolrtGz";
  const req = new XMLHttpRequest();
  req.addEventListener("load", (res) => {
    console.log(res);
  });
  req.open("POST", url);
  req.setRequestHeader("Content-Type", "image/png");
  req.send();
}
