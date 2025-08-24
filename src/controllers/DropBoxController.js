export default class DropBoxController {
  constructor() {
    this.btnSendFile = document.querySelector("#btn-send-file");
    this.inputFilesEl = document.querySelector("#files");
    this.snackModalEl = document.querySelector("#react-snackbar-root");

    this.initEvents();
  }

  initEvents() {
    this.btnSendFile.addEventListener("click", (e) => {
      this.inputFilesEl.click();
    });

    this.inputFilesEl.addEventListener("change", (e) => {
      this.uploadTask(e.target.files);

      this.snackModalEl.style.display = "block";
    });
  }

  uploadTask(files) {
    let promises = [];
    [...files].forEach((file) => {
      promises.push(
        new Promise((resolve, reject) => {
          let xhr = new XMLHttpRequest();

          xhr.open("POST", "/upload");

          xhr.onload = (event) => {
            try {
              resolve(JSON.parse(xhr.responseText));
            } catch (error) {
              reject(error);
            }
          };

          xhr.onerror = (event) => {
            reject(event);
          };

          let formData = new FormData();
          formData.append("input-file", file);

          xhr.send(formData);
        })
      );
    });

    return Promise.all(promises);
  }
}
