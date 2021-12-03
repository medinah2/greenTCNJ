(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-qr-scanner-qr-scanner-module"], {
    /***/
    "/xXi":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qr-scanner/qr-scanner.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xXi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [hidden]=\"scanActive\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"ion-text-wrap\">\n        Attendance Scanner\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [style.--background]=\"scanActive ? '#00000000' : '#fff'\">\n  <class [hidden]=\"scanActive\">\n    <ion-item>\n      <p>\n        Here you can use your phone's camera to scan a GreenTCNJ QR code provided by an event organizer to let them know you attended. Make sure you give the app permissions to use your camera!\n      </p>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n          <ion-col>\n            <img alt=\"\" class=\"center\" src=\"../../assets/icon/qrscan.png\" vertical-align=\"middle\">\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-row class = \"scanner-buttons\">\n      <ion-col class=\"ion-no-padding\">\n        <ion-button expand=\"full\" (click)=\"scanBarcode()\">\n          <ion-icon name=\"scan\" slot=\"start\"></ion-icon>\n          Start Scan\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </class>\n\n  <ion-row class = \"scanner-buttons\" [hidden]=\"!scanActive\">\n    <ion-col class=\"ion-no-padding\">\n      <ion-button expand=\"full\" (click)=\"destroy()\">\n        Stop\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<div class=\"scan-box\" [hidden]=\"!scanActive\">\n</div>";
      /***/
    },

    /***/
    "3Vir":
    /*!*******************************************************!*\
      !*** ./src/app/pages/qr-scanner/qr-scanner.module.ts ***!
      \*******************************************************/

    /*! exports provided: QrScannerPageModule */

    /***/
    function Vir(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrScannerPageModule", function () {
        return QrScannerPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _qr_scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./qr-scanner-routing.module */
      "P1wM");
      /* harmony import */


      var _qr_scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./qr-scanner.page */
      "olSS");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var QrScannerPageModule = function QrScannerPageModule() {
        _classCallCheck(this, QrScannerPageModule);
      };

      QrScannerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(), _qr_scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrScannerPageRoutingModule"]],
        declarations: [_qr_scanner_page__WEBPACK_IMPORTED_MODULE_6__["QrScannerPage"]]
      })], QrScannerPageModule);
      /***/
    },

    /***/
    "7ZUV":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/index.js ***!
      \*****************************************************************************/

    /*! exports provided: SupportedFormat, BarcodeScanner */

    /***/
    function ZUV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarcodeScanner", function () {
        return BarcodeScanner;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "BWvt");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SupportedFormat", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["SupportedFormat"];
      });

      var BarcodeScanner = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('BarcodeScanner', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() | web */
          "web").then(__webpack_require__.bind(null,
          /*! ./web */
          "FeWW")).then(function (m) {
            return new m.BarcodeScannerWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "BWvt":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/definitions.js ***!
      \***********************************************************************************/

    /*! exports provided: SupportedFormat */

    /***/
    function BWvt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportedFormat", function () {
        return SupportedFormat;
      });

      var SupportedFormat;

      (function (SupportedFormat) {
        // 1D Product
        SupportedFormat["UPC_A"] = "UPC_A";
        SupportedFormat["UPC_E"] = "UPC_E";
        SupportedFormat["UPC_EAN_EXTENSION"] = "UPC_EAN_EXTENSION";
        SupportedFormat["EAN_8"] = "EAN_8";
        SupportedFormat["EAN_13"] = "EAN_13"; // 1D Industrial

        SupportedFormat["CODE_39"] = "CODE_39";
        SupportedFormat["CODE_39_MOD_43"] = "CODE_39_MOD_43";
        SupportedFormat["CODE_93"] = "CODE_93";
        SupportedFormat["CODE_128"] = "CODE_128";
        SupportedFormat["CODABAR"] = "CODABAR";
        SupportedFormat["ITF"] = "ITF";
        SupportedFormat["ITF_14"] = "ITF_14"; // 2D

        SupportedFormat["AZTEC"] = "AZTEC";
        SupportedFormat["DATA_MATRIX"] = "DATA_MATRIX";
        SupportedFormat["MAXICODE"] = "MAXICODE";
        SupportedFormat["PDF_417"] = "PDF_417";
        SupportedFormat["QR_CODE"] = "QR_CODE";
        SupportedFormat["RSS_14"] = "RSS_14";
        SupportedFormat["RSS_EXPANDED"] = "RSS_EXPANDED";
      })(SupportedFormat || (SupportedFormat = {})); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    "P1wM":
    /*!***************************************************************!*\
      !*** ./src/app/pages/qr-scanner/qr-scanner-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: QrScannerPageRoutingModule */

    /***/
    function P1wM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrScannerPageRoutingModule", function () {
        return QrScannerPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _qr_scanner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./qr-scanner.page */
      "olSS");

      var routes = [{
        path: '',
        component: _qr_scanner_page__WEBPACK_IMPORTED_MODULE_3__["QrScannerPage"]
      }];

      var QrScannerPageRoutingModule = function QrScannerPageRoutingModule() {
        _classCallCheck(this, QrScannerPageRoutingModule);
      };

      QrScannerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QrScannerPageRoutingModule);
      /***/
    },

    /***/
    "X0Xd":
    /*!*******************************************************!*\
      !*** ./src/app/pages/qr-scanner/qr-scanner.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function X0Xd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n.scanner-buttons {\n  margin: 0px;\n  position: absolute;\n  bottom: 100px;\n  width: 100vw;\n  height: 50px;\n  z-index: 11;\n}\n.scan-box {\n  border: 2 px solid #fff;\n  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);\n  content: ‘’;\n  display: block;\n  left: 50%;\n  height: 300px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3FyLXNjYW5uZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFSjtBQUNBO0VBQ0ksdUJBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJxci1zY2FubmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2FubmVyLWJ1dHRvbnMge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwMHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgei1pbmRleDogMTE7XG59XG5cbi5zY2FuLWJveCB7XG4gICAgYm9yZGVyOiAyIHB4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTAwdm1heCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgY29udGVudDog4oCY4oCZO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogMzAwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "olSS":
    /*!*****************************************************!*\
      !*** ./src/app/pages/qr-scanner/qr-scanner.page.ts ***!
      \*****************************************************/

    /*! exports provided: QrScannerPage */

    /***/
    function olSS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrScannerPage", function () {
        return QrScannerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_qr_scanner_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./qr-scanner.page.html */
      "/xXi");
      /* harmony import */


      var _qr_scanner_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./qr-scanner.page.scss */
      "X0Xd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor-community/barcode-scanner */
      "7ZUV");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1"); //import { stat } from 'fs';


      var QrScannerPage = /*#__PURE__*/function () {
        function QrScannerPage(http, storage) {
          var _this = this;

          _classCallCheck(this, QrScannerPage);

          this.http = http;
          this.storage = storage;
          this.scanActive = false;
          storage.get('userID').then(function (val) {
            _this.usrID = val;
          }); //this.scanBarcode();
        }

        _createClass(QrScannerPage, [{
          key: "prepare",
          value: function prepare() {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"].prepare();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"].stopScan();

            this.scanActive = false;
          }
        }, {
          key: "grantPerms",
          value: function grantPerms() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var status, c, _c, statusRequest;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"].checkPermission({
                        force: false
                      });

                    case 2:
                      status = _context.sent;

                      if (!status.granted) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return", true);

                    case 5:
                      if (status.denied) {
                        // the user denied permission for good
                        // redirect user to app settings if they want to grant it anyway
                        c = confirm('If you want to grant permission for using your camera, enable it in the app settings.');

                        if (c) {
                          _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"].openAppSettings();
                        }
                      }

                      if (!status.neverAsked) {
                        _context.next = 10;
                        break;
                      }

                      // user has not been requested this permission before
                      // it is advised to show the user some sort of prompt
                      // this way you will not waste your only chance to ask for the permission
                      _c = confirm('We need your permission to use your camera to be able to scan barcodes');

                      if (_c) {
                        _context.next = 10;
                        break;
                      }

                      return _context.abrupt("return", false);

                    case 10:
                      if (!(status.restricted || status.unknown)) {
                        _context.next = 12;
                        break;
                      }

                      return _context.abrupt("return", false);

                    case 12:
                      _context.next = 14;
                      return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"].checkPermission({
                        force: true
                      });

                    case 14:
                      statusRequest = _context.sent;

                      if (!statusRequest.granted) {
                        _context.next = 17;
                        break;
                      }

                      return _context.abrupt("return", true);

                    case 17:
                      return _context.abrupt("return", false);

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "scanBarcode",
          value: function scanBarcode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var result, obj, c;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.grantPerms()) {
                        _context2.next = 8;
                        break;
                      }

                      this.scanActive = true;
                      _context2.next = 4;
                      return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"].startScan({
                        targetedFormats: [_capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__["SupportedFormat"].QR_CODE]
                      });

                    case 4:
                      result = _context2.sent;

                      if (result.hasContent) {
                        obj = {
                          func: "add_participant",
                          eventID: result.content,
                          userID: this.usrID,
                          attendance: 1
                        };
                        this.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(function (data) {
                          var response = data;
                        });

                        if (confirm("Your code was read successfully! Did you want to scan again?")) {
                          this.scanBarcode();
                        } else {
                          this.scanActive = false;
                        }
                      } else {
                        console.log("Nothing read from QR Code");

                        if (confirm("Sorry, nothing was read from that code! Try again?")) {
                          this.scanBarcode();
                        } else {
                          this.scanActive = false;
                        }
                      }

                      _context2.next = 10;
                      break;

                    case 8:
                      c = confirm('If you want to grant permission for using your camera, enable it in the app settings.');

                      if (c) {
                        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"].openAppSettings();
                      }

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return QrScannerPage;
      }();

      QrScannerPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }];
      };

      QrScannerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-qr-scanner',
        template: _raw_loader_qr_scanner_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qr_scanner_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QrScannerPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-qr-scanner-qr-scanner-module-es5.js.map