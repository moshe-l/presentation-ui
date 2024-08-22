(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/view/view.component */ "./src/app/pages/view/view.component.ts");
/* harmony import */ var _pages_or_hahaim_or_hahaim_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/or-hahaim/or-hahaim.component */ "./src/app/pages/or-hahaim/or-hahaim.component.ts");
/* harmony import */ var _pages_expenses_expenses_setting_expenses_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/expenses/expenses-setting/expenses-setting.component */ "./src/app/pages/expenses/expenses-setting/expenses-setting.component.ts");
/* harmony import */ var _pages_expenses_expenses_view_expenses_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/expenses/expenses-view/expenses-view.component */ "./src/app/pages/expenses/expenses-view/expenses-view.component.ts");







var routes = [
    { path: 'view', component: _pages_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"] },
    { path: 'view/:isEdit', component: _pages_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"] },
    { path: 'or', component: _pages_or_hahaim_or_hahaim_component__WEBPACK_IMPORTED_MODULE_4__["OrHahaimComponent"] },
    { path: 'expenses-setting', component: _pages_expenses_expenses_setting_expenses_setting_component__WEBPACK_IMPORTED_MODULE_5__["ExpensesSettingComponent"] },
    { path: 'expenses-view', component: _pages_expenses_expenses_view_expenses_view_component__WEBPACK_IMPORTED_MODULE_6__["ExpensesViewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'presentation-ui';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _pages_view_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/view/view.component */ "./src/app/pages/view/view.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_or_hahaim_or_hahaim_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/or-hahaim/or-hahaim.component */ "./src/app/pages/or-hahaim/or-hahaim.component.ts");
/* harmony import */ var _pages_expenses_expenses_setting_expenses_setting_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/expenses/expenses-setting/expenses-setting.component */ "./src/app/pages/expenses/expenses-setting/expenses-setting.component.ts");
/* harmony import */ var _pages_expenses_expenses_view_expenses_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/expenses/expenses-view/expenses-view.component */ "./src/app/pages/expenses/expenses-view/expenses-view.component.ts");















var config = {
    apiKey: "AIzaSyDe7Glr4HAVGmZT1NMcW0DOJIrHJFyGYNY",
    authDomain: "presentation-87078.firebaseapp.com",
    databaseURL: "https://presentation-87078.firebaseio.com",
    projectId: "presentation-87078",
    storageBucket: "presentation-87078.appspot.com",
    messagingSenderId: "1023703306091",
    appId: "1:1023703306091:web:a8ced1333246bc75"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"],
                _pages_or_hahaim_or_hahaim_component__WEBPACK_IMPORTED_MODULE_12__["OrHahaimComponent"],
                _pages_expenses_expenses_setting_expenses_setting_component__WEBPACK_IMPORTED_MODULE_13__["ExpensesSettingComponent"],
                _pages_expenses_expenses_view_expenses_view_component__WEBPACK_IMPORTED_MODULE_14__["ExpensesViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(config),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"] // storage
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/expenses/expenses-setting/expenses-setting.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-setting/expenses-setting.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2VzL2V4cGVuc2VzLXNldHRpbmcvZXhwZW5zZXMtc2V0dGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/expenses/expenses-setting/expenses-setting.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-setting/expenses-setting.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <input type=\"button\" routerLink=\"/expenses-view\" value=\"תצוגה\" >\r\n    <hr>\r\n  <h1>הגדרות</h1>\r\n  <div>\r\n    <div>מכולת :</div>\r\n    <input type=\"number\" [(ngModel)]=\"setting.grocery\">\r\n  </div>\r\n  <div>\r\n      <div>בית :</div>\r\n      <input type=\"number\" [(ngModel)]=\"setting.home\">\r\n    </div>\r\n    <div>\r\n        <div>בילויים :</div>\r\n        <input type=\"number\" [(ngModel)]=\"setting.entertainment\">\r\n      </div>\r\n      <div>\r\n        <input type=\"button\" value=\"שמור\" (click)=\"save()\" >\r\n      </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/expenses/expenses-setting/expenses-setting.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-setting/expenses-setting.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExpensesSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesSettingComponent", function() { return ExpensesSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/firestore.service */ "./src/app/services/firestore.service.ts");



var ExpensesSettingComponent = /** @class */ (function () {
    function ExpensesSettingComponent(svc) {
        var _this = this;
        this.svc = svc;
        this.svc.getSettings().subscribe(function (res) {
            _this.setting = res.data();
        });
    }
    ExpensesSettingComponent.prototype.save = function () {
        this.svc.updateSettings(this.setting);
    };
    ExpensesSettingComponent.prototype.ngOnInit = function () {
    };
    ExpensesSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expenses-setting',
            template: __webpack_require__(/*! ./expenses-setting.component.html */ "./src/app/pages/expenses/expenses-setting/expenses-setting.component.html"),
            styles: [__webpack_require__(/*! ./expenses-setting.component.css */ "./src/app/pages/expenses/expenses-setting/expenses-setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
    ], ExpensesSettingComponent);
    return ExpensesSettingComponent;
}());



/***/ }),

/***/ "./src/app/pages/expenses/expenses-view/expenses-view.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-view/expenses-view.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sform{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-gap : 10px;\r\n}\r\n.add-form{\r\n    display: grid;\r\n    grid-gap : 15px;\r\n}\r\nh2{\r\n    color: cadetblue;\r\n}\r\n.top-btn{\r\n    background: #5fadb1;\r\n    color: white;\r\n    height: 40px;\r\n    font-size: 25px;\r\n    box-shadow: silver 0px 0px 7px 4px;\r\n    border-radius: 10px;\r\n    border: none;\r\n}\r\n.top-div{\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr;\r\n}\r\n.besad{\r\n    font-size: 30px;\r\n    margin: 5px;\r\n    color: #5fadb1;\r\n}\r\nselect {\r\n    height: 40px;\r\n}\r\n.input-effect{position: relative;}\r\ninput[type=\"text\"],input[type=\"number\"],input[type=\"date\"],select {font: 15px/24px \"Lato\", Arial, sans-serif; color: #333; width: 100%; box-sizing: border-box; letter-spacing: 1px;}\r\n.effect-19,\r\n.effect-20,\r\n.effect-21{border: 1px solid #ccc; padding: 7px 14px; transition: 0.4s; background: transparent;}\r\n.effect-19 ~ .focus-border:before,\r\n.effect-19 ~ .focus-border:after{content: \"\"; position: absolute; top: -1px; left: 50%; width: 0; height: 2px; background-color: #3399FF; transition: 0.4s;}\r\n.effect-19 ~ .focus-border:after{top: auto; bottom: 0;}\r\n.effect-19 ~ .focus-border i:before,\r\n.effect-19 ~ .focus-border i:after{content: \"\"; position: absolute; top: 50%; left: 0; width: 2px; height: 0; background-color: #3399FF; transition: 0.6s;}\r\n.effect-19 ~ .focus-border i:after{left: auto; right: 0;}\r\n.effect-19:focus ~ .focus-border:before,\r\n.effect-19:focus ~ .focus-border:after\r\n/* ,.has-content.effect-19 ~ .focus-border:before,\r\n.has-content.effect-19 ~ .focus-border:after */\r\n{left: 0; width: 100%; transition: 0.4s;}\r\n.effect-19:focus ~ .focus-border i:before,\r\n.effect-19:focus ~ .focus-border i:after\r\n/* ,.has-content.effect-19 ~ .focus-border i:before,\r\n.has-content.effect-19 ~ .focus-border i:after */\r\n{top: -1px; height: 100%; transition: 0.6s;}\r\n.effect-19 ~ label{position: absolute; left: -5px; width: 100%; top: 10px; color: #aaa; transition: 0.3s; z-index: -1; letter-spacing: 0.5px;}\r\n.effect-19:focus ~ label, .has-content.effect-19 ~ label{top: -18px; left: 0; font-size: 12px; color: #3399FF; transition: 0.3s;}\r\n.select-css {\r\n    display: block;\r\n    font-size: 16px;\r\n    font-family: sans-serif;\r\n    font-weight: 700;\r\n    color: #444;\r\n    line-height: 1.3;\r\n  \r\n    width: 100%;\r\n    max-width: 100%; \r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    border: 1px solid #aaa;\r\n    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);\r\n    border-radius: .5em;\r\n    /* -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n    appearance: none; */\r\n    background-color: #fff;\r\n    /* background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),\r\n      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%); */\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: right .7em top 50%, 0 0;\r\n    background-size: .65em auto, 100%;\r\n}\r\n.select-css::-ms-expand {\r\n    display: none;\r\n}\r\n.select-css:hover {\r\n    border-color: #888;\r\n}\r\n.select-css:focus {\r\n    border-color: #aaa;\r\n    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);\r\n    box-shadow: 0 0 0 3px -moz-mac-focusring;\r\n    color: #222; \r\n    outline: none;\r\n}\r\n.select-css option {\r\n    font-weight:normal;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZW5zZXMvZXhwZW5zZXMtdmlldy9leHBlbnNlcy12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUdBLGNBQWMsa0JBQWtCLENBQUM7QUFDakMsbUVBQW1FLHlDQUF5QyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLENBQUM7QUFDcEw7O1dBRVcsc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUM7QUFFaEc7aUNBQ2lDLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLENBQUM7QUFDM0osaUNBQWlDLFNBQVMsRUFBRSxTQUFTLENBQUM7QUFDdEQ7bUNBQ21DLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLENBQUM7QUFDMUosbUNBQW1DLFVBQVUsRUFBRSxRQUFRLENBQUM7QUFDeEQ7Ozs7Q0FJQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDO0FBQ3hDOzs7O0NBSUMsU0FBUyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztBQUMzQyxtQkFBbUIsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQztBQUM3SSx5REFBeUQsVUFBVSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO0FBS2hJO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7O0lBRWhCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQjs7dUJBRW1CO0lBQ25CLHNCQUFzQjtJQUN0Qjs0REFDd0Q7SUFDeEQsb0NBQW9DO0lBQ3BDLDRDQUE0QztJQUM1QyxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2VzL2V4cGVuc2VzLXZpZXcvZXhwZW5zZXMtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNmb3Jte1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLWdhcCA6IDEwcHg7XHJcbn1cclxuLmFkZC1mb3Jte1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtZ2FwIDogMTVweDtcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiBjYWRldGJsdWU7XHJcbn1cclxuLnRvcC1idG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWZhZGIxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogc2lsdmVyIDBweCAwcHggN3B4IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnRvcC1kaXZ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xyXG59XHJcbi5iZXNhZHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgY29sb3I6ICM1ZmFkYjE7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4uaW5wdXQtZWZmZWN0e3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJudW1iZXJcIl0saW5wdXRbdHlwZT1cImRhdGVcIl0sc2VsZWN0IHtmb250OiAxNXB4LzI0cHggXCJMYXRvXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyBjb2xvcjogIzMzMzsgd2lkdGg6IDEwMCU7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGxldHRlci1zcGFjaW5nOiAxcHg7fVxyXG4uZWZmZWN0LTE5LFxyXG4uZWZmZWN0LTIwLFxyXG4uZWZmZWN0LTIxe2JvcmRlcjogMXB4IHNvbGlkICNjY2M7IHBhZGRpbmc6IDdweCAxNHB4OyB0cmFuc2l0aW9uOiAwLjRzOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XHJcblxyXG4uZWZmZWN0LTE5IH4gLmZvY3VzLWJvcmRlcjpiZWZvcmUsXHJcbi5lZmZlY3QtMTkgfiAuZm9jdXMtYm9yZGVyOmFmdGVye2NvbnRlbnQ6IFwiXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtMXB4OyBsZWZ0OiA1MCU7IHdpZHRoOiAwOyBoZWlnaHQ6IDJweDsgYmFja2dyb3VuZC1jb2xvcjogIzMzOTlGRjsgdHJhbnNpdGlvbjogMC40czt9XHJcbi5lZmZlY3QtMTkgfiAuZm9jdXMtYm9yZGVyOmFmdGVye3RvcDogYXV0bzsgYm90dG9tOiAwO31cclxuLmVmZmVjdC0xOSB+IC5mb2N1cy1ib3JkZXIgaTpiZWZvcmUsXHJcbi5lZmZlY3QtMTkgfiAuZm9jdXMtYm9yZGVyIGk6YWZ0ZXJ7Y29udGVudDogXCJcIjsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDUwJTsgbGVmdDogMDsgd2lkdGg6IDJweDsgaGVpZ2h0OiAwOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OUZGOyB0cmFuc2l0aW9uOiAwLjZzO31cclxuLmVmZmVjdC0xOSB+IC5mb2N1cy1ib3JkZXIgaTphZnRlcntsZWZ0OiBhdXRvOyByaWdodDogMDt9XHJcbi5lZmZlY3QtMTk6Zm9jdXMgfiAuZm9jdXMtYm9yZGVyOmJlZm9yZSxcclxuLmVmZmVjdC0xOTpmb2N1cyB+IC5mb2N1cy1ib3JkZXI6YWZ0ZXJcclxuLyogLC5oYXMtY29udGVudC5lZmZlY3QtMTkgfiAuZm9jdXMtYm9yZGVyOmJlZm9yZSxcclxuLmhhcy1jb250ZW50LmVmZmVjdC0xOSB+IC5mb2N1cy1ib3JkZXI6YWZ0ZXIgKi9cclxue2xlZnQ6IDA7IHdpZHRoOiAxMDAlOyB0cmFuc2l0aW9uOiAwLjRzO31cclxuLmVmZmVjdC0xOTpmb2N1cyB+IC5mb2N1cy1ib3JkZXIgaTpiZWZvcmUsXHJcbi5lZmZlY3QtMTk6Zm9jdXMgfiAuZm9jdXMtYm9yZGVyIGk6YWZ0ZXJcclxuLyogLC5oYXMtY29udGVudC5lZmZlY3QtMTkgfiAuZm9jdXMtYm9yZGVyIGk6YmVmb3JlLFxyXG4uaGFzLWNvbnRlbnQuZWZmZWN0LTE5IH4gLmZvY3VzLWJvcmRlciBpOmFmdGVyICovXHJcbnt0b3A6IC0xcHg7IGhlaWdodDogMTAwJTsgdHJhbnNpdGlvbjogMC42czt9XHJcbi5lZmZlY3QtMTkgfiBsYWJlbHtwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IC01cHg7IHdpZHRoOiAxMDAlOyB0b3A6IDEwcHg7IGNvbG9yOiAjYWFhOyB0cmFuc2l0aW9uOiAwLjNzOyB6LWluZGV4OiAtMTsgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O31cclxuLmVmZmVjdC0xOTpmb2N1cyB+IGxhYmVsLCAuaGFzLWNvbnRlbnQuZWZmZWN0LTE5IH4gbGFiZWx7dG9wOiAtMThweDsgbGVmdDogMDsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzMzOTlGRjsgdHJhbnNpdGlvbjogMC4zczt9XHJcblxyXG5cclxuXHJcblxyXG4uc2VsZWN0LWNzcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyBcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAxcHggcmdiYSgwLDAsMCwuMDQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuICAgIC8qIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHdpZHRoJTNEJTIyMjkyLjQlMjIlMjBoZWlnaHQlM0QlMjIyOTIuNCUyMiUzRSUzQ3BhdGglMjBmaWxsJTNEJTIyJTIzMDA3Q0IyJTIyJTIwZCUzRCUyMk0yODclMjA2OS40YTE3LjYlMjAxNy42JTIwMCUyMDAlMjAwLTEzLTUuNEgxOC40Yy01JTIwMC05LjMlMjAxLjgtMTIuOSUyMDUuNEExNy42JTIwMTcuNiUyMDAlMjAwJTIwMCUyMDAlMjA4Mi4yYzAlMjA1JTIwMS44JTIwOS4zJTIwNS40JTIwMTIuOWwxMjglMjAxMjcuOWMzLjYlMjAzLjYlMjA3LjglMjA1LjQlMjAxMi44JTIwNS40czkuMi0xLjglMjAxMi44LTUuNEwyODclMjA5NWMzLjUtMy41JTIwNS40LTcuOCUyMDUuNC0xMi44JTIwMC01LTEuOS05LjItNS41LTEyLjh6JTIyJTJGJTNFJTNDJTJGc3ZnJTNFJyksXHJcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYgMCUsI2U1ZTVlNSAxMDAlKTsgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC43ZW0gdG9wIDUwJSwgMCAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAuNjVlbSBhdXRvLCAxMDAlO1xyXG59XHJcbi5zZWxlY3QtY3NzOjotbXMtZXhwYW5kIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNlbGVjdC1jc3M6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODg4O1xyXG59XHJcbi5zZWxlY3QtY3NzOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggM3B4IHJnYmEoNTksIDE1MywgMjUyLCAuNyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggLW1vei1tYWMtZm9jdXNyaW5nO1xyXG4gICAgY29sb3I6ICMyMjI7IFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc2VsZWN0LWNzcyBvcHRpb24ge1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/expenses/expenses-view/expenses-view.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-view/expenses-view.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"top-div\">\r\n    <div class=\"besad\">בס\"ד</div>\r\n    <input class=\"top-btn\" type=\"button\" routerLink=\"/expenses-setting\" value=\"הגדרות\">\r\n  </div>\r\n\r\n  <hr>\r\n  <h2>הוספת פריט חדש:</h2>\r\n  <form class=\"add-form\" (ngSubmit)=\"add()\">\r\n\r\n    <div class=\"input-effect\">\r\n      <input class=\"effect-19\" [class.has-content]=\"expens.desc\" name=\"desc\" [(ngModel)]=\"expens.desc\" type=\"text\"\r\n        placeholder=\"\">\r\n      <label>תיאור</label>\r\n      <span class=\"focus-border\">\r\n        <i></i>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"input-effect\">\r\n      <input class=\"effect-19\" [class.has-content]=\"expens.amount\" type=\"number\" name=\"amount\"\r\n        [(ngModel)]=\"expens.amount\" placeholder=\"\">\r\n      <label>סכום</label>\r\n      <span class=\"focus-border\">\r\n        <i></i>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"input-effect\">\r\n      <input class=\"effect-19\" type=\"date\" [class.has-content]=\"expens.date\" name=\"date\" (input)=\"expens.date=parseDate($event.target.value)\"\r\n        placeholder=\"\">\r\n      <label>תאריך</label>\r\n      <span class=\"focus-border\">\r\n        <i></i>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"input-effect\">\r\n      <select name=\"type\" [(ngModel)]=\"expens.type\">\r\n        <option hidden value=\"null\" disabled=\"true\" [selected]=\"true\">סוג </option>\r\n        <!-- <option selected=\"selected\" value=\"סוג\">סוג</option> -->\r\n        <option value=\"home\">בית</option>\r\n        <option value=\"grocery\">מכולת</option>\r\n        <option value=\"entertainment\">בילויים</option>\r\n      </select>\r\n      <!-- <label>סוג</label> -->\r\n      <span class=\"focus-border\">\r\n        <i></i>\r\n      </span>\r\n    </div>\r\n    <div class=\"input-effect\">\r\n      <select name=\"type\" [(ngModel)]=\"expens.payments\">\r\n        <option hidden value=\"null\" disabled=\"true\" [selected]=\"true\">תשלומים </option>\r\n        <!-- <option selected=\"selected\" value=\"סוג\">סוג</option> -->\r\n        <option value=\"1\">1</option>\r\n        <option value=\"2\">2</option>\r\n        <option value=\"3\">3</option>\r\n        <option value=\"4\">4</option>\r\n        <option value=\"5\">5</option>\r\n        <option value=\"6\">6</option>\r\n        <option value=\"7\">7</option>\r\n        <option value=\"8\">8</option>\r\n        <option value=\"9\">9</option>\r\n        <option value=\"10\">10</option>\r\n        <option value=\"11\">11</option>\r\n        <option value=\"12\">12</option>\r\n      </select>\r\n      <!-- <label>סוג</label> -->\r\n      <span class=\"focus-border\">\r\n        <i></i>\r\n      </span>\r\n    </div>\r\n    <!-- <div>\r\n      תיאור:\r\n      <input type=\"text\" name=\"desc\" [(ngModel)]=\"expens.desc\" placeholder=\"תיאור\">\r\n    </div> -->\r\n    <!-- <br> -->\r\n    <!-- <div>\r\n      סכום:\r\n        <input type=\"number\" name=\"amount\" [(ngModel)]=\"expens.amount\" placeholder=\"סכום\">\r\n    </div> -->\r\n    <!-- <br> -->\r\n    <!-- <div>\r\n      תאריך:\r\n        <input type=\"date\" name=\"date\" (input)=\"expens.date=parseDate($event.target.value)\"  placeholder=\"תאריך\">\r\n    </div> -->\r\n    <!-- <br> -->\r\n    <!-- <div>\r\n      סוג:\r\n      <select name=\"type\" [(ngModel)]=\"expens.type\">\r\n        <option value=\"home\">בית</option>\r\n        <option  value=\"grocery\">מכולת</option>\r\n        <option value=\"entertainment\">בילויים</option>\r\n      </select>\r\n    </div> -->\r\n    <!-- <br> -->\r\n    <input class=\"top-btn\" type=\"submit\" value=\"הוספה\">\r\n  </form>\r\n  <hr>\r\n  <h2>חיפוש חודש:</h2>\r\n  <form class=\"sform\">\r\n    <select class=\"select-css\" name=\"smonth\" [(ngModel)]=\"month\">\r\n      <option [selected]=\"i == month ? 'selected' : '' \" [value]=\"i\" *ngFor=\"let m of monthNames index as i\">{{m}}\r\n      </option>\r\n    </select>\r\n    <select class=\"select-css\" name=\"syear\" [(ngModel)]=\"year\">\r\n      <option [selected]=\"year == 2019\" value=\"2019\">2019</option>\r\n      <option [selected]=\"year == 2020\" value=\"2020\">2020</option>\r\n      <option [selected]=\"year == 2021\" value=\"2021\">2021</option>\r\n      <option [selected]=\"year == 2022\" value=\"2022\">2022</option>\r\n      <option [selected]=\"year == 2023\" value=\"2023\">2023</option>\r\n      <option [selected]=\"year == 2024\" value=\"2024\">2024</option>\r\n      <option [selected]=\"year == 2025\" value=\"2025\">2025</option>\r\n      <option [selected]=\"year == 2026\" value=\"2026\">2026</option>\r\n    </select>\r\n    <input type=\"button\" class=\"top-btn\" value=\"חיפוש\" (click)=\"getPerMonth()\">\r\n\r\n  </form>\r\n  <h3>חודש : {{currentMonthName}} - {{year}}</h3>\r\n  <hr>\r\n\r\n\r\n  <h2>יתרות וסיכומים:</h2>\r\n\r\n  <table>\r\n    <tr>\r\n    <th>\r\n      סוג\r\n    </th>\r\n    <th>\r\n      סה\"כ\r\n    </th>\r\n    <th>\r\n      יתרה\r\n    </th>\r\n  </tr>\r\n  <tr>\r\n      <td>מכולת</td>\r\n      <td>{{grocerySum}}</td>\r\n      <td>{{groceryBalance}}</td>\r\n\r\n  </tr>\r\n  <tr>\r\n      <td>בית</td>\r\n      <td>{{homeSum}}</td>\r\n      <td>{{homeBalance}}</td>\r\n  </tr>\r\n  <tr>\r\n      <td>בילויים</td>\r\n      <td>{{entertainmentSum}}</td>\r\n      <td>{{entertainmentBalance}}</td>\r\n  </tr>\r\n  <tr>\r\n      <td>סה\"כ</td>\r\n      <td>{{fullSum}}</td>\r\n      <td>{{groceryBalance + homeBalance + entertainmentBalance }}</td>\r\n  </tr>\r\n  </table>\r\n  \r\n  <hr>\r\n  <h2>פירוט:</h2>\r\n  <table>\r\n    <tr>\r\n      <th>\r\n        תאור\r\n      </th>\r\n      <th>\r\n        סכום\r\n      </th>\r\n      <th>\r\n        סוג\r\n      </th>\r\n      <th>\r\n        תאריך\r\n      </th>\r\n      <th>\r\n        מחיקה\r\n      </th>\r\n    </tr>\r\n    <tr *ngFor=\"let e of selectedMonthExpenses\">\r\n      <td>{{e.desc}}</td>\r\n      <td>{{e.amount}}</td>\r\n      <td>{{getType(e.type) }}</td>\r\n      <td>{{e.date | date : 'dd/MM/yy'}}</td>\r\n      <td (click)=\"deleteItem(e)\">X</td>\r\n    </tr>\r\n  </table>\r\n  <hr>\r\n \r\n</section>"

/***/ }),

/***/ "./src/app/pages/expenses/expenses-view/expenses-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-view/expenses-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExpensesViewComponent, expensType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesViewComponent", function() { return ExpensesViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expensType", function() { return expensType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/firestore.service */ "./src/app/services/firestore.service.ts");



var ExpensesViewComponent = /** @class */ (function () {
    function ExpensesViewComponent(svc) {
        this.svc = svc;
        this.expens = { tempId: null, amount: null, date: new Date(), desc: "", type: null, payments: 1 };
        //oldExpenses: any;
        this.monthNames = ["ינואר", "פבואר", "מרץ", "אפריל", "מאי", "יוני",
            "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
        ];
        this.getPerMonth(true);
    }
    ExpensesViewComponent.prototype.ngOnInit = function () {
    };
    ExpensesViewComponent.prototype.add = function () {
        var _this = this;
        console.log(this.expens);
        if (!this.validation()) {
            alert("מלאו את כל השדות חבר'ה");
            return;
        }
        // let originalDate = this.expens.date;
        this.svc.addItem(this.expens).then(function (res) {
            alert("הפעולה בוצעה בהצלחה!!!");
            if (_this.expens.date.getMonth() == _this.month) {
                _this.expens.tempId = res[0].id;
                _this.selectedMonthExpenses.push(_this.expens);
                _this.calcBalances();
            }
            _this.expens = { tempId: null, amount: null, date: new Date(), desc: "", type: null, payments: 1 };
        }).catch(function (err) {
            alert("שגיאה : " + err);
        });
    };
    ExpensesViewComponent.prototype.validation = function () {
        if (this.expens.amount != null && this.expens.desc != "" && this.expens.type != null && this.expens.date != null)
            return true;
        return false;
    };
    // getOldAndSetting(){
    //   var setting$ = this.svc.getSettings();
    //   var oldExpenses$ =  this.svc.getAll();
    //   combineLatest(setting$, oldExpenses$, (setting,oldExpenses) => ({setting,oldExpenses})).subscribe(pair => {
    //     this.oldExpenses = pair.oldExpenses.docs.map((i) => { return { id: i.id, ...i.data() } });
    //     this.oldExpenses.map(i => i.date = new Date(i.date.seconds * 1000));
    //     console.log(this.oldExpenses);
    //     this.setting = pair.setting.data();    
    //     this.calcBalances();
    //   })
    // }
    ExpensesViewComponent.prototype.getPerMonth = function (toBringSetting) {
        var _this = this;
        if (toBringSetting === void 0) { toBringSetting = false; }
        if (this.month == null) {
            var date = new Date();
            this.month = date.getMonth();
            this.year = date.getFullYear();
        }
        this.currentMonthName = this.monthNames[this.month];
        this.svc.getExpensesPerMonth(this.year, this.month)
            .subscribe(function (res) {
            _this.selectedMonthExpenses = res.docs.map(function (i) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: i.id }, i.data()); });
            _this.selectedMonthExpenses.map(function (i) { return i.date = new Date(i.date.seconds * 1000); });
            console.log(_this.selectedMonthExpenses);
            if (toBringSetting) {
                _this.svc.getSettings().subscribe(function (res) {
                    _this.setting = res.data();
                    _this.calcBalances();
                });
            }
            else {
                _this.calcBalances();
            }
        }, function (err) { return alert(err); });
    };
    ExpensesViewComponent.prototype.calcBalances = function () {
        this.groceryBalance = this.calcBalance('grocery');
        this.homeBalance = this.calcBalance('home');
        this.entertainmentBalance = this.calcBalance('entertainment');
        this.homeSum = this.calcSum('home');
        this.entertainmentSum = this.calcSum('entertainment');
        this.grocerySum = this.calcSum('grocery');
        this.fullSum = this.homeSum + this.entertainmentSum + this.grocerySum;
    };
    ExpensesViewComponent.prototype.calcBalance = function (type) {
        var items = this.selectedMonthExpenses.filter(function (e) { return e.type == type; });
        var sum = items.map(function (i) { return i.amount; }).reduce(function (a, b) { return a + b; }, 0);
        return this.setting[type] - sum;
    };
    ExpensesViewComponent.prototype.calcSum = function (type) {
        var items = this.selectedMonthExpenses.filter(function (i) { return i.type == type; });
        var sum = items.map(function (i) { return i.amount; }).reduce(function (a, b) { return a + b; }, 0);
        return sum;
    };
    ExpensesViewComponent.prototype.deleteItem = function (item) {
        var _this = this;
        if (!confirm('בטוח? לא לעבוד על המערכת בבקשה'))
            return;
        var id = (item.id != null ? item.id : item.tempId);
        this.svc.deleteExspensItem(id).then(function (res) {
            alert("הפריט נמחק!!!");
            _this.selectedMonthExpenses = _this.selectedMonthExpenses.filter(function (e) { return e.id != id && e.tempId != id; });
            _this.calcBalances();
        }).catch(function (err) {
            alert(err);
        });
    };
    ExpensesViewComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    ExpensesViewComponent.prototype.getType = function (type) {
        switch (type) {
            case 'home':
                return 'בית';
            case 'grocery':
                return 'מכולת';
            case 'entertainment':
                return 'בילויים';
            default:
                break;
        }
    };
    ExpensesViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expenses-view',
            template: __webpack_require__(/*! ./expenses-view.component.html */ "./src/app/pages/expenses/expenses-view/expenses-view.component.html"),
            styles: [__webpack_require__(/*! ./expenses-view.component.css */ "./src/app/pages/expenses/expenses-view/expenses-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
    ], ExpensesViewComponent);
    return ExpensesViewComponent;
}());

var expensType;
(function (expensType) {
    expensType[expensType["home"] = 0] = "home";
    expensType[expensType["grocery"] = 1] = "grocery";
    expensType[expensType["entertainment"] = 2] = "entertainment";
})(expensType || (expensType = {}));


/***/ }),

/***/ "./src/app/pages/or-hahaim/or-hahaim.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/or-hahaim/or-hahaim.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yLWhhaGFpbS9vci1oYWhhaW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/or-hahaim/or-hahaim.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/or-hahaim/or-hahaim.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n<input type=\"text\" name=\"name\" (keydown.enter)=\"send()\" [(ngModel)]=\"name\" >\r\n<input type=\"button\" value=\"send\"  (click)=\"send()\">\r\n</p> -->\r\n<section>\r\n\r\n  <h1>אור החיים</h1>\r\n\r\n\r\n<table id=\"customers\">\r\n    <tr>\r\n      <th>פרשה</th>\r\n      <th>\r\n        א\r\n        <div class=\"student-name\">אורן</div>\r\n      </th>\r\n      <th>       \r\n        ב\r\n        <div class=\"student-name\">שי</div>\r\n      </th>\r\n      <th>ג\r\n          <div class=\"student-name\">משה</div>\r\n      </th>\r\n      <th>ד\r\n          <div class=\"student-name\">אורן</div>\r\n      </th>\r\n      <th>ה\r\n          <div class=\"student-name\">שי</div>\r\n      </th>\r\n      <th>ו\r\n          <div class=\"student-name\">משה</div>\r\n      </th>\r\n      <th>ז\r\n          <div class=\"student-name\">יאיר</div>\r\n      </th>    \r\n    </tr>\r\n    <tr *ngFor=\"let p of toraList\">\r\n      <td class=\"namep\" [class.bookName]=\"isBookName(p.bookId)\" >{{p.name}}</td>\r\n      <td><input (change)=\"update(p.guid,'first', $event)\" type=\"checkbox\" [(ngModel)]=\"p.first\"></td>\r\n      <td><input (change)=\"update(p.guid,'second', $event)\" type=\"checkbox\" [(ngModel)]=\"p.second\"></td>\r\n      <td><input (change)=\"update(p.guid,'third', $event)\" type=\"checkbox\" [(ngModel)]=\"p.third\"></td>\r\n      <td><input (change)=\"update(p.guid,'fourth', $event)\" type=\"checkbox\" [(ngModel)]=\"p.fourth\"></td>\r\n      <td><input (change)=\"update(p.guid,'fifth', $event)\" type=\"checkbox\" [(ngModel)]=\"p.fifth\"></td>\r\n      <td><input (change)=\"update(p.guid,'sixth', $event)\" type=\"checkbox\" [(ngModel)]=\"p.sixth\"></td>\r\n      <td><input (change)=\"update(p.guid,'seventh', $event)\" type=\"checkbox\" [(ngModel)]=\"p.seventh\"></td>     \r\n    </tr>  \r\n  </table>\r\n\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/pages/or-hahaim/or-hahaim.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/or-hahaim/or-hahaim.component.ts ***!
  \********************************************************/
/*! exports provided: OrHahaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrHahaimComponent", function() { return OrHahaimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firestore.service */ "./src/app/services/firestore.service.ts");



var OrHahaimComponent = /** @class */ (function () {
    function OrHahaimComponent(svc) {
        var _this = this;
        this.svc = svc;
        this.id = 43;
        this.lastId = 0;
        this.svc.getTora().subscribe(function (res) {
            _this.toraList = (res.docs.map(function (doc) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ guid: doc.id }, doc.data());
            })).sort(function (a, b) { return a.id - b.id; });
            console.log(_this.toraList);
        });
    }
    OrHahaimComponent.prototype.send = function () {
        this.id++;
        this.svc.addParasha(this.name, this.id);
    };
    OrHahaimComponent.prototype.update = function (guid, name, event) {
        this.svc.updateStudy(guid, name, event.target.checked);
    };
    OrHahaimComponent.prototype.isBookName = function (id) {
        var res;
        if (id != this.lastId)
            res = true;
        else
            res = false;
        this.lastId = id;
        return res;
    };
    OrHahaimComponent.prototype.ngOnInit = function () {
    };
    OrHahaimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-or-hahaim',
            template: __webpack_require__(/*! ./or-hahaim.component.html */ "./src/app/pages/or-hahaim/or-hahaim.component.html"),
            styles: [__webpack_require__(/*! ./or-hahaim.component.css */ "./src/app/pages/or-hahaim/or-hahaim.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
    ], OrHahaimComponent);
    return OrHahaimComponent;
}());



/***/ }),

/***/ "./src/app/pages/view/view.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/view/view.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".why-us-grid{\r\n    align-items: center;\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr 1fr;\r\n    justify-items: center;\r\n    height: calc(100% - 27px);\r\n    position: fixed;\r\n    width:95%;\r\n    /* background: url(\"https://raw.githubusercontent.com/moshe-l/presentation-images/master/bg/shas.jpg\") no-repeat center center fixed */\r\n    /* background-size: cover; */\r\n}\r\n.viewAll .why-us-grid{\r\n    position:static;\r\n}\r\n.inner-wrap-caruale{\r\n    overflow-x: hidden;\r\n}\r\nsection{\r\n    text-align: center;\r\n}\r\ni{display: none}\r\n.edit i{\r\n    display: inherit;\r\n}\r\nimg{\r\n    width: 100%;\r\n}\r\n@media(min-width:800px){\r\n    img{\r\n        width: 80%;\r\n    }\r\n}\r\n.slide {   \r\n    opacity: 0;\r\n    overflow-x: hidden;\r\n}\r\n.slide.active-right{\r\n  -webkit-animation: slide-right 0.6s forwards;\r\n          animation: slide-right 0.6s forwards;\r\n}\r\n@-webkit-keyframes slide-right {\r\n    0% {\r\n        transform: translateX(-200px);\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes slide-right {\r\n    0% {\r\n        transform: translateX(-200px);\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixTQUFTO0lBQ1Qsc0lBQXNJO0lBQ3RJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQSxFQUFFLGFBQWE7QUFFZjtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSw0Q0FBb0M7VUFBcEMsb0NBQW9DO0FBQ3RDO0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtRQUM3QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixVQUFVO0lBQ2Q7QUFDSjtBQVRBO0lBQ0k7UUFDSSw2QkFBNkI7UUFDN0IsVUFBVTtJQUNkO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aHktdXMtZ3JpZHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjdweCk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDo5NSU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbW9zaGUtbC9wcmVzZW50YXRpb24taW1hZ2VzL21hc3Rlci9iZy9zaGFzLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZCAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cclxufVxyXG4udmlld0FsbCAud2h5LXVzLWdyaWR7XHJcbiAgICBwb3NpdGlvbjpzdGF0aWM7XHJcbn1cclxuLmlubmVyLXdyYXAtY2FydWFsZXtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuc2VjdGlvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaXtkaXNwbGF5OiBub25lfVxyXG5cclxuLmVkaXQgaXtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbkBtZWRpYShtaW4td2lkdGg6ODAwcHgpe1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbGlkZSB7ICAgXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5zbGlkZS5hY3RpdmUtcmlnaHR7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAwLjZzIGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMHB4KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/view/view.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/view/view.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section [class.edit]=\"isEditMode\" [class.viewAll]=\"toViewAll\">\r\n  <!-- [style]=\"sanitize('background:'+bg + 'background-size: cover;')\" -->\r\n  <h2>{{title}}</h2>\r\n  <!-- class=\"why-us-grid\" -->\r\n  <div  >\r\n    <!-- <div>\r\n      <i (click)=\"arrowRight()\" class=\"fas fa-chevron-right\"></i>\r\n    </div> -->\r\n    <div *ngIf=\"currentView\" class=\"wrap-carusale\">     \r\n      <div *ngFor=\"let w of carusaleArr; index as i\" class=\"inner-wrap-caruale\">\r\n          <!-- <div (click)=\"changeByIndex(i)\" class=\"slide active-right\" *ngIf=\"(currentView.index == i && !w.isImg) || toViewAll\">\r\n              {{w.text}}\r\n          </div> -->\r\n          <div class=\"slide active-right\" *ngIf=\"(currentView.index == i) || toViewAll\">\r\n             <img (click)=\"changeByIndex(i)\" [src]=\"w.text\" [style.max-height]=\"imgHeight\" alt=\"\">\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div>\r\n      <i (click)=\"arrowLeft()\" class=\"fas fa-chevron-left\"></i>\r\n    </div> -->\r\n  </div>\r\n</section>\r\n\r\n<!-- <section *ngIf=\"toViewAll\">\r\n  <div *ngFor=\"let w of carusaleArr; index as i\">\r\n\r\n  </div>\r\n</section> -->"

/***/ }),

/***/ "./src/app/pages/view/view.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/view/view.component.ts ***!
  \**********************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_github_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/github.service */ "./src/app/services/github.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var ViewComponent = /** @class */ (function () {
    function ViewComponent(svc, github, route, sanitizer) {
        var _this = this;
        this.svc = svc;
        this.github = github;
        this.route = route;
        this.sanitizer = sanitizer;
        this.carusaleArr = [];
        this.route.params.subscribe(function (p) {
            if (p['isEdit'] == "1")
                _this.isEditMode = true;
            else if (p['isEdit'] == "2")
                _this.toViewAll = true;
            _this.imgHeight = (window.innerHeight - 50) + "px";
            console.log(window.innerHeight);
        });
        this.github.get('img').subscribe(function (res) {
            res.forEach(function (element) {
                console.log(element.name.split('.')[0].replace(/\D/g, ''));
            });
            res.sort(function (a, b) {
                return Number.parseInt((a.name.split('.')[0]).replace(/\D/g, ''))
                    -
                        Number.parseInt((b.name.split('.')[0]).replace(/\D/g, ''));
            });
            // console.log(res)  
            for (var i = 0; i < res.length; i++) {
                _this.carusaleArr.push({ index: i, text: res[i].download_url });
            }
            _this.startListening();
        });
        this.github.get('bg').subscribe(function (res) {
            document.getElementsByTagName("body")[0].style.background =
                "linear-gradient(rgba(224, 209, 209, 0.7), rgba(218, 202, 202, 0.7)), url(" + res[0].download_url + ") no-repeat center center fixed";
        });
        this.github.getTitle().subscribe(function (res) {
            _this.title = res;
        });
    }
    ViewComponent.prototype.startListening = function () {
        var _this = this;
        this.svc.listen().subscribe(function (res) {
            _this.currentView = _this.carusaleArr.find(function (x) { return x.index == res.current; });
        });
    };
    ViewComponent.prototype.changeByIndex = function (id) {
        if (this.toViewAll)
            this.svc.change(id);
    };
    ViewComponent.prototype.arrowRight = function () {
        if (this.currentView.index == this.carusaleArr.length - 1)
            this.svc.change(0);
        else
            this.svc.change(this.currentView.index + 1);
    };
    ViewComponent.prototype.arrowLeft = function () {
        if (this.currentView.index == 0)
            this.svc.change(this.carusaleArr.length - 1);
        else
            this.svc.change(this.currentView.index - 1);
    };
    ViewComponent.prototype.sanitize = function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/pages/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/pages/view/view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"], _services_github_service__WEBPACK_IMPORTED_MODULE_4__["GithubService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/services/firestore.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var FirestoreService = /** @class */ (function () {
    function FirestoreService(db) {
        this.db = db;
    }
    // view
    FirestoreService.prototype.getCount = function () {
        return this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').get();
    };
    FirestoreService.prototype.listen = function () {
        return this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').valueChanges();
    };
    FirestoreService.prototype.change = function (newID) {
        this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').update({ current: newID });
    };
    // or hahaim
    FirestoreService.prototype.addParasha = function (name, id) {
        this.db.collection('tora').add({
            bookId: 5,
            comment: "",
            fifth: false,
            first: false,
            fourth: false,
            id: id,
            name: name,
            second: false,
            seventh: false,
            sixth: false,
            third: false
        });
    };
    FirestoreService.prototype.getTora = function () {
        return this.db.collection('tora').get();
    };
    FirestoreService.prototype.updateStudy = function (docId, filedName, value) {
        var _a;
        this.db.collection('tora').doc(docId).update((_a = {}, _a[filedName] = value, _a))
            .then(function (res) { return alert("העידכון בוצע"); })
            .catch(function (err) { return alert("אירעה שגיאה בעדכון"); });
    };
    //expenses
    FirestoreService.prototype.getSettings = function () {
        return this.db.collection('expenses-settings').doc('3VnbcOMGeFeMWTiallER').get();
    };
    FirestoreService.prototype.updateSettings = function (model) {
        this.db.collection('expenses-settings').doc('3VnbcOMGeFeMWTiallER').update(model);
    };
    FirestoreService.prototype.addItem = function (item) {
        var p = [];
        for (var index = 0; index < item.payments; index++) {
            var element = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { date: new Date(item.date) });
            element.date.setMonth(item.date.getMonth() + index);
            p.push(this.db.collection('expenses').add(element));
        }
        return Promise.all(p);
    };
    FirestoreService.prototype.getAll = function () {
        return this.db.collection('expenses').get();
    };
    FirestoreService.prototype.getExpensesPerMonth = function (year, month) {
        console.log(year + " " + month);
        var startStr = year + "-" + (Number.parseInt(month) + 1) + "-01";
        var endStr = year + "-" + (Number.parseInt(month) + 1) + "-31";
        console.log(startStr + " " + endStr);
        var start = new Date(startStr);
        var end = new Date(endStr);
        console.log(start + " " + end);
        try {
            return this.db.collection('expenses', function (ref) { return ref.where('date', '>=', start).where('date', '<=', end); }).get();
        }
        catch (error) {
            alert(error);
        }
    };
    FirestoreService.prototype.deleteExspensItem = function (id) {
        return this.db.collection('expenses').doc(id).delete();
    };
    FirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirestoreService);
    return FirestoreService;
}());



/***/ }),

/***/ "./src/app/services/github.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/github.service.ts ***!
  \********************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var GithubService = /** @class */ (function () {
    function GithubService(http) {
        this.http = http;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
    }
    GithubService.prototype.get = function (path) {
        var _this = this;
        return this.http.get("https://api.github.com/repos/moshe-l/presentation-images/contents/" + path, { headers: this.header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (res) { return _this.handleError(res); }));
    };
    GithubService.prototype.getTitle = function () {
        var _this = this;
        return this.http.get("https://raw.githubusercontent.com/moshe-l/presentation-images/master/title", { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (res) { return _this.handleError(res); }));
    };
    GithubService.prototype.handleError = function (res) {
        console.log(res);
        var error = {
            statusCode: res.status,
            error: res.message
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    GithubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Moshe\presentation-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map