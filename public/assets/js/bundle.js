/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/DropBoxController.js":
/*!**********************************************!*\
  !*** ./src/controllers/DropBoxController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropBoxController)
/* harmony export */ });
class DropBoxController {
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
      this.modalShow();
      this.inputFilesEl.value = "";
    });
  }

  modalShow(show = true) {
    this.snackModalEl.style.display = show ? "block" : "none";
  }

  uploadTask(files) {
    let promises = [];
    [...files].forEach((file) => {
      promises.push(
        new Promise((resolve, reject) => {
          let xhr = new XMLHttpRequest();

          xhr.open("POST", "/upload");

          xhr.onload = (event) => {
            this.modalShow(false);
            try {
              resolve(JSON.parse(xhr.responseText));
            } catch (error) {
              reject(error);
            }
          };

          xhr.onerror = (event) => {
            this.modalShow(false);
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
    let timespent = Date.now() - this.startUploadTime;

    let loaded = event.loaded;
    let total = event.total;
    let porcent = parseInt((loaded / total) * 100);
    let timeleft = ((100 - porcent) * timespent) / porcent;

    this.progressBarEl.style.width = `${porcent}%`;

    this.namefileEl.innerHTML = file.name;
    this.timeLeftEl.innerHTML = this.formatTimeToHuman(timeleft);
  }

  formatTimeToHuman(duration) {
    let seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    if (hours > 0) {
      return `${hours}horas, ${minutes}minutos e ${seconds} segundos`;
    }

    if (minutes > 0) {
      return `${minutes}minutos e ${seconds} segundos`;
    }

    if (seconds > 0) {
      return `${seconds} segundos`;
    }

    return "";
  }

  getFileView() {
    return `

    `;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_DropBoxController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/DropBoxController */ "./src/controllers/DropBoxController.js");


window.app = new _controllers_DropBoxController__WEBPACK_IMPORTED_MODULE_0__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map