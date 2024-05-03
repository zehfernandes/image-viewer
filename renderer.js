const { ipcRenderer } = require("electron");

console.log("renderer.js");

ipcRenderer.on("open-image", (event, imagePath) => {
  if (imagePath) {
    console.log(imagePath);
    document.getElementById("image").src = imagePath;
  }
});
