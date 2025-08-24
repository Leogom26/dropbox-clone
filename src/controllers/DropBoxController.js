export default class DropBoxController {
  constructor() {
    this.btnSendFile = document.querySelector("#btn-send-file");
    this.inputFilesEl = document.querySelector("#files");
    this.snackModalEl = document.querySelector("#react-snackbar-root");
    this.progressBarEl = this.snackModalEl.querySelector(".mc-progress-bar-fg");
    this.namefileEl = this.snackModalEl.querySelector(".filename");
    this.timeLeftEl = this.snackModalEl.querySelector(".timeleft");

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

          xhr.upload.onprogress = (event) => {
            this.uploadProgress(event, file);
          };

          let formData = new FormData();
          formData.append("input-file", file);

          this.startUploadTime = Date.now();

          xhr.send(formData);
        })
      );
    });

    return Promise.all(promises);
  }

  uploadProgress(event, file) {
    let timespent = Data.now() - this.startUploadTime;

    let loaded = event.loaded;
    let total = event.total;

    let porcent = parseInt((loaded / total) * 100);

    this.progressBarEl.style.width = `${porcent}%`;

    this.namefileEl.innerHTML = file.name;
    this.timeLeftEl.innerHTML = ((100 - porcent) * timespent) / porcent;

    console.log(timespent, timeLeftEl, porcent);
  }

  formatTimeToHuman(duration) {
    let seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  }
}
