(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dean/work/csc498/greenTCNJ-Ionic-Code/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "https://recycle.hpc.tcnj.edu/php/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LFOy":
/*!********************************************!*\
  !*** ./src/app/guards/auto-login.guard.ts ***!
  \********************************************/
/*! exports provided: AutoLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoLoginGuard", function() { return AutoLoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






let AutoLoginGuard = class AutoLoginGuard {
    constructor(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
    }
    canLoad() {
        return this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(val => val !== null), // Filter out initial Behaviour subject value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), // Otherwise the Observable doesn't complete!
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(isAuthenticated => {
            if (isAuthenticated) {
                console.log('Found previous token, automatic login');
                this.router.navigateByUrl('/home', { replaceUrl: true });
            }
            else {
                // Simply allow access to the login
                return true;
            }
        }));
    }
};
AutoLoginGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
AutoLoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AutoLoginGuard);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");







let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleBlackOpaque();
            this.splashScreen.show();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/authentication.service */ "ej43");






let AuthGuard = class AuthGuard {
    constructor(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
    }
    canLoad() {
        return this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(val => val !== null), // Filter out initial Behaviour subject value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), // Otherwise the Observable doesn't complete!
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(isAuthenticated => {
            if (isAuthenticated) {
                return true;
            }
            else {
                this.router.navigateByUrl('/start');
                return false;
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu menuId=\"main-menu\" content-id=\"main\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/home\">\n            <ion-icon name = \"home\" slot=\"start\"></ion-icon>\n            <ion-label>Home</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"whatgoeswhere\">\n            <ion-icon name = \"search-circle\" slot=\"start\"></ion-icon>\n            <ion-label>What Goes Where?</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"schedule\">\n            <ion-icon name = \"calendar\" slot=\"start\"></ion-icon>\n            <ion-label>My Schedule</ion-label>\n          </ion-item>          \n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"qr-scanner\">\n            <ion-icon name = \"scan\" slot=\"start\"></ion-icon>\n            <ion-label>Attendance Scanner</ion-label>\n          </ion-item>          \n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"news\">\n            <ion-icon name = \"newspaper\" slot=\"start\"></ion-icon>\n            <ion-label>News</ion-label>\n          </ion-item>          \n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"campusresources\">\n            <ion-icon name = \"link\" slot=\"start\"></ion-icon>\n            <ion-label>Campus Resources</ion-label>\n          </ion-item>          \n        </ion-menu-toggle>\n\n\n\n      </ion-list>\n    </ion-content>\n\n    <!-- <ion-footer-bar> -->\n      <ion-list>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"settings\">\n            <ion-icon name = \"settings\" slot=\"start\"></ion-icon>\n            <ion-label>Settings</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"reportissue\">\n            <ion-icon name = \"help-circle\" slot=\"start\"></ion-icon>\n            <ion-label>Help/Report Issues</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n      </ion-list>\n    <!-- </ion-footer-bar> -->\n\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "M2ZX");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            // NativeStorageModule.forRoot(),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeStorage"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "cu8M":
/*!***************************************!*\
  !*** ./src/app/guards/intro.guard.ts ***!
  \***************************************/
/*! exports provided: INTRO_KEY, IntroGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTRO_KEY", function() { return INTRO_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroGuard", function() { return IntroGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ "YwB3");



const INTRO_KEY = 'intro-seen';

let IntroGuard = class IntroGuard {
    constructor(router) {
        this.router = router;
    }
    canLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const hasSeenIntro = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"].get({ key: INTRO_KEY });
            if (hasSeenIntro && (hasSeenIntro.value == 'true')) {
                return true;
            }
            else {
                this.router.navigateByUrl('/intro', { replaceUrl: true });
            }
            return true;
        });
    }
};
IntroGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IntroGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IntroGuard);



/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/app */ "Ktnr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! process */ "8oxB");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_8__);





//import { Storage } from '@capacitor/storage';




let AuthenticationService = class AuthenticationService {
    constructor(modalCtrl, http, storage) {
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.storage = storage;
        // Init with null to filter out the first value in a guard!
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        _capacitor_app__WEBPACK_IMPORTED_MODULE_6__["App"].addListener('backButton', ({ canGoBack }) => {
            if (this.modalCtrl.dismiss()) { }
            else if (!canGoBack) {
                _capacitor_app__WEBPACK_IMPORTED_MODULE_6__["App"].exitApp();
            }
            else {
                window.history.back();
            }
        });
        this.loadToken();
    }
    loadToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const storedToken = yield this.storage.get('token');
            if (storedToken) {
                this.validateToken(storedToken).then(data => {
                    var result = data;
                    if (result["loginSuccess"]) {
                        console.log("TOKEN VALID");
                        this.storage.set('token', result["token"]);
                        this.updateStorage(result["userInfo"][0]);
                        this.isAuthenticated.next(true);
                    }
                    else {
                        console.log("TOKEN INVALID");
                        this.isAuthenticated.next(false);
                    }
                });
            }
            else {
                console.log("NO TOKEN");
                this.isAuthenticated.next(false);
            }
        });
    }
    validateToken(token) {
        var obj = { func: "jwt_login", token: token };
        return this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).toPromise()
            .then(data => data)
            .catch(msg => console.log('Token Validation Error: ' + msg.status + ' ' + msg.statusText));
    }
    updateStorage(userData) {
        // this is used to store user info within the app, stores userID, Name, type, and email 
        this.storage.set('userID', userData['userID']);
        this.storage.set('userName', userData['userFirstName']);
        this.storage.set('userType', userData['userType']);
        this.storage.set('userEmail', userData["userEmail"]);
        // used to set user interests within the app
        this.storage.set('userRecyclingInterest', userData["recyclingInterest"]);
        this.storage.set('userWaterInterest', userData["waterInterest"]);
        this.storage.set('userPollutionInterest', userData["pollutionInterest"]);
        this.storage.set('userEnergyInterest', userData["energyInterest"]);
    }
    login(credentials) {
        var obj = { func: "try_login", email: credentials.email, password: credentials.password };
        return this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(data => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.storage.set('token', data["token"]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => {
            this.isAuthenticated.next(true);
        }));
    }
    logout() {
        this.isAuthenticated.next(false);
        Object(process__WEBPACK_IMPORTED_MODULE_8__["removeAllListeners"])();
        return this.storage.remove('token');
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auto-login.guard */ "LFOy");
/* harmony import */ var _guards_intro_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/intro.guard */ "cu8M");






const routes = [
    {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~pages-schedule-schedule-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'whatgoeswhere',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-whatgoeswhere-whatgoeswhere-module */ "pages-whatgoeswhere-whatgoeswhere-module").then(__webpack_require__.bind(null, /*! ./pages/whatgoeswhere/whatgoeswhere.module */ "UzLM")).then(m => m.WhatgoeswherePageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'schedule',
        loadChildren: () => Promise.all(/*! import() | pages-schedule-schedule-module */[__webpack_require__.e("default~home-home-module~pages-schedule-schedule-module"), __webpack_require__.e("pages-schedule-schedule-module")]).then(__webpack_require__.bind(null, /*! ./pages/schedule/schedule.module */ "nLfy")).then(m => m.SchedulePageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'news',
        loadChildren: () => Promise.all(/*! import() | pages-news-news-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-news-news-module")]).then(__webpack_require__.bind(null, /*! ./pages/news/news.module */ "qUUn")).then(m => m.NewsPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "yPrK")).then(m => m.SettingsPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'reportissue',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-reportissue-reportissue-module */ "pages-reportissue-reportissue-module").then(__webpack_require__.bind(null, /*! ./pages/reportissue/reportissue.module */ "UOYY")).then(m => m.ReportissuePageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'campusresources',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-campusresources-campusresources-module */ "pages-campusresources-campusresources-module").then(__webpack_require__.bind(null, /*! ./pages/campusresources/campusresources.module */ "65Ah")).then(m => m.CampusresourcesPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'event-modal',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-event-modal-event-modal-module */ "pages-event-modal-event-modal-module").then(__webpack_require__.bind(null, /*! ./pages/event-modal/event-modal.module */ "YKP9")).then(m => m.EventModalPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-login-login-module */ "pages-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "F4UR")).then(m => m.LoginPageModule)
    },
    {
        path: 'registration',
        loadChildren: () => Promise.all(/*! import() | pages-registration-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-registration-registration-module")]).then(__webpack_require__.bind(null, /*! ./pages/registration/registration.module */ "z6fL")).then(m => m.RegistrationPageModule)
    },
    {
        path: 'recover-password',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-recover-password-recover-password-module */ "pages-recover-password-recover-password-module").then(__webpack_require__.bind(null, /*! ./pages/recover-password/recover-password.module */ "Ald3")).then(m => m.RecoverPasswordPageModule)
    },
    {
        path: 'start',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-start-start-module */ "pages-start-start-module").then(__webpack_require__.bind(null, /*! ./pages/start/start.module */ "ulMc")).then(m => m.StartPageModule),
        canLoad: [_guards_intro_guard__WEBPACK_IMPORTED_MODULE_5__["IntroGuard"], _guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_4__["AutoLoginGuard"]]
    },
    {
        path: 'material-specs',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-material-specs-material-specs-module */ "pages-material-specs-material-specs-module").then(__webpack_require__.bind(null, /*! ./pages/material-specs/material-specs.module */ "kL3D")).then(m => m.MaterialSpecsPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'reset-password',
        loadChildren: () => Promise.all(/*! import() | pages-reset-password-reset-password-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-reset-password-reset-password-module")]).then(__webpack_require__.bind(null, /*! ./pages/reset-password/reset-password.module */ "9nUT")).then(m => m.ResetPasswordPageModule)
    },
    {
        path: 'reset-password-email-sent',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-reset-password-email-sent-reset-password-email-sent-module */ "pages-reset-password-email-sent-reset-password-email-sent-module").then(__webpack_require__.bind(null, /*! ./pages/reset-password-email-sent/reset-password-email-sent.module */ "JAZH")).then(m => m.ResetPasswordEmailSentPageModule)
    },
    {
        path: 'intro',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-intro-intro-module */ "pages-intro-intro-module").then(__webpack_require__.bind(null, /*! ./pages/intro/intro.module */ "a+tW")).then(m => m.IntroPageModule)
    },
    {
        path: 'suggestmaterial',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-suggestmaterial-suggestmaterial-module */ "pages-suggestmaterial-suggestmaterial-module").then(__webpack_require__.bind(null, /*! ./pages/suggestmaterial/suggestmaterial.module */ "peSJ")).then(m => m.SuggestmaterialPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'qr-scanner',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-qr-scanner-qr-scanner-module */ "pages-qr-scanner-qr-scanner-module").then(__webpack_require__.bind(null, /*! ./pages/qr-scanner/qr-scanner.module */ "3Vir")).then(m => m.QrScannerPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'news-modal',
        loadChildren: () => Promise.all(/*! import() | pages-news-modal-news-modal-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-news-modal-news-modal-module")]).then(__webpack_require__.bind(null, /*! ./pages/news-modal/news-modal.module */ "uFFq")).then(m => m.NewsModalPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'my-registered-events',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-my-registered-events-my-registered-events-module */ "pages-my-registered-events-my-registered-events-module").then(__webpack_require__.bind(null, /*! ./pages/my-registered-events/my-registered-events.module */ "mHEi")).then(m => m.MyRegisteredEventsPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".validation-errors {\n  color: red;\n  margin: 10px;\n  font-size: 75%;\n}\n\n.ios ion-button {\n  text-transform: uppercase;\n}\n\n.buttonSize {\n  size: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGlvbi1lcnJvcnN7XG4gICAgY29sb3I6IHJlZDsgXG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogNzUlO1xufVxuXG4uaW9zIGlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuLmJ1dHRvblNpemUge1xuICAgIHNpemU6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "FUe0");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map