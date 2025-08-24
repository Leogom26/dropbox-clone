export default class DropBoxController {
  constructor() {
    this.btnSendFile = document.querySelector("#btn-send-file");
    this.inputFilesEl = document.querySelector("#files");
    this.initEvents();
  }

  initEvents() {
    this.btnSendFile.addEventListener("click", (e) => {});
    this.inputFilesEl.click();
  }
}
