webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar></ng2-slim-loading-bar>\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"assets/angular.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    Angular Resolver\n  </a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/records/false\">Records</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/records/true\">Records with Failure</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/no-resolver/false\">Records-No resolver</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/no-resolver/true\">Records-No resolver With Failure</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <!-- Alert here -->\n <div class=\"app-level-alert\">\n    <ng-alert [(message)]=\"message\" [dismissable]=\"true\" [closeType]=\"closeTypes.TIMES\"></ng-alert>\n </div>\n  <!-- /Alert here -->\n\n  <div class=\"my-3 p-3 bg-white rounded box-shadow\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theo4u_ng_alert__ = __webpack_require__("../../../../@theo4u/ng-alert/esm5/theo4u-ng-alert.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_loadingBar, _ngAlert, _router) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this._ngAlert = _ngAlert;
        this._router = _router;
        this.closeTypes = __WEBPACK_IMPORTED_MODULE_3__theo4u_ng_alert__["a" /* CloseType */];
        // subscribe to our router's event here
        this._router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertSub = this._ngAlert.getSource().subscribe(function (message) {
            _this.message = message;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._alertSub.unsubscribe();
    };
    /**
     * This is used to intercept and show Loading bar based on the current state of our
     * Router navigation
     * @param {Event} event
     */
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]) {
            this._loadingBar.start();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]) {
            this._loadingBar.complete();
        }
        // Set loading state to false in both of the below events to hide the loader in case a request fails
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationCancel */]) {
            this._loadingBar.stop();
            this._loadingBar.complete();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationError */]) {
            this._loadingBar.stop();
            this._loadingBar.complete();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */], __WEBPACK_IMPORTED_MODULE_3__theo4u_ng_alert__["d" /* NgAlertService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__records_records_component__ = __webpack_require__("../../../../../src/app/records/records.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__no_resolver_no_resolver_component__ = __webpack_require__("../../../../../src/app/no-resolver/no-resolver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theo4u_ng_alert__ = __webpack_require__("../../../../@theo4u/ng-alert/esm5/theo4u-ng-alert.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_mock_http_service__ = __webpack_require__("../../../../../src/app/services/mock-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__resolvers_record_comp_resolver__ = __webpack_require__("../../../../../src/app/resolvers/record-comp-resolver.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__records_records_component__["a" /* RecordsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__no_resolver_no_resolver_component__["a" /* NoResolverComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* APP_ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_8_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__theo4u_ng_alert__["c" /* NgAlertModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_mock_http_service__["a" /* MockHttpService */],
                __WEBPACK_IMPORTED_MODULE_11__resolvers_record_comp_resolver__["a" /* RecordCompResolver */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__records_records_component__ = __webpack_require__("../../../../../src/app/records/records.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_resolver_no_resolver_component__ = __webpack_require__("../../../../../src/app/no-resolver/no-resolver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolvers_record_comp_resolver__ = __webpack_require__("../../../../../src/app/resolvers/record-comp-resolver.ts");




var APP_ROUTES = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'records/:with-error', component: __WEBPACK_IMPORTED_MODULE_0__records_records_component__["a" /* RecordsComponent */], resolve: {
            pageData: __WEBPACK_IMPORTED_MODULE_3__resolvers_record_comp_resolver__["a" /* RecordCompResolver */]
        } },
    { path: 'no-resolver/:with-error', component: __WEBPACK_IMPORTED_MODULE_2__no_resolver_no_resolver_component__["a" /* NoResolverComponent */] },
    { path: '**', redirectTo: 'home' }
];


/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: "\n<h6 class=\"border-bottom border-gray pb-2 mb-0\">Home</h6>\n<p style=\"padding-top: 1rem\">Welcome to Angular Resolver</p>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/no-resolver/no-resolver.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"border-bottom border-gray pb-2 mb-0\">Records with out Resolver</h6>\n<div style=\"padding-top: 1rem\" *ngIf=\"!loader\">\n<p>{{dynamicTitle}}</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">id</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Created At</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of data\">\n      <th scope=\"row\">{{item.id}}</th>\n      <td>{{item.name}}</td>\n      <td>{{item.createdAt | date}}</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n\n<div style=\"padding-top: 1rem\" *ngIf=\"loader\">\n  Loading...\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/no-resolver/no-resolver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoResolverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mock_http_service__ = __webpack_require__("../../../../../src/app/services/mock-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theo4u_ng_alert__ = __webpack_require__("../../../../@theo4u/ng-alert/esm5/theo4u-ng-alert.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NoResolverComponent = /** @class */ (function () {
    function NoResolverComponent(_activatedRoute, _mockService, _ngAlert) {
        this._activatedRoute = _activatedRoute;
        this._mockService = _mockService;
        this._ngAlert = _ngAlert;
        this.data = [];
        this.loader = false;
    }
    NoResolverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        // subscripe to the param here, this is just for quick demo test
        var withError = this._activatedRoute.snapshot.params['with-error'] === 'true';
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin([
            this._mockService.dynamicTitle('resolver'),
            this._mockService.request(withError)
        ])
            .subscribe(function (results) {
            _this.dynamicTitle = results[0];
            _this.data = results[1];
            _this.loader = false;
        }, function (error) {
            _this._ngAlert.push({
                message: error.message,
                type: __WEBPACK_IMPORTED_MODULE_5__theo4u_ng_alert__["b" /* MessageType */].error
            });
            _this.loader = false;
        });
    };
    NoResolverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-no-resolver',
            template: __webpack_require__("../../../../../src/app/no-resolver/no-resolver.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_mock_http_service__["a" /* MockHttpService */], __WEBPACK_IMPORTED_MODULE_5__theo4u_ng_alert__["d" /* NgAlertService */]])
    ], NoResolverComponent);
    return NoResolverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/records/records.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"border-bottom border-gray pb-2 mb-0\">Records Using Resolver</h6>\n<div style=\"padding-top: 1rem\">\n<p>{{dynamicTitle}}</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">id</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Created At</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of data\">\n      <th scope=\"row\">{{item.id}}</th>\n      <td>{{item.name}}</td>\n      <td>{{item.createdAt | date}}</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/records/records.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecordsComponent = /** @class */ (function () {
    function RecordsComponent(_route) {
        this._route = _route;
        this.data = [];
    }
    RecordsComponent.prototype.ngOnInit = function () {
        this.data = this._route.snapshot.data.pageData.records || [];
        this.dynamicTitle = this._route.snapshot.data.pageData.dynamicTitle;
    };
    RecordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-records',
            template: __webpack_require__("../../../../../src/app/records/records.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], RecordsComponent);
    return RecordsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/resolvers/record-comp-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordCompResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mock_http_service__ = __webpack_require__("../../../../../src/app/services/mock-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theo4u_ng_alert__ = __webpack_require__("../../../../@theo4u/ng-alert/esm5/theo4u-ng-alert.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RecordCompResolver = /** @class */ (function () {
    function RecordCompResolver(_mockService, _ngAlert) {
        this._mockService = _mockService;
        this._ngAlert = _ngAlert;
    }
    RecordCompResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var withError = route.params['with-error'] === 'true';
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].forkJoin([
            this._mockService.dynamicTitle('resolver'),
            this._mockService.request(withError)
        ])
            .map(function (results) { return ({
            dynamicTitle: results[0],
            records: results[1]
        }); })
            .catch(function (error) {
            _this._ngAlert.push({
                message: error.message,
                type: __WEBPACK_IMPORTED_MODULE_2__theo4u_ng_alert__["b" /* MessageType */].error
            });
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    RecordCompResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_mock_http_service__["a" /* MockHttpService */], __WEBPACK_IMPORTED_MODULE_2__theo4u_ng_alert__["d" /* NgAlertService */]])
    ], RecordCompResolver);
    return RecordCompResolver;
}());



/***/ }),

/***/ "../../../../../src/app/services/mock-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MockHttpService = /** @class */ (function () {
    function MockHttpService() {
        this._mock = [];
        for (var i = 0; i < 20; i++) {
            this._mock.push({
                name: 'Data ' + i,
                id: i,
                createdAt: new Date().toISOString()
            });
        }
    }
    MockHttpService.prototype.dynamicTitle = function (type, delay) {
        if (delay === void 0) { delay = 3000; }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            setTimeout(function () {
                if (type === 'resolver') {
                    observer.next('Fetched Data from Resolver');
                }
                else {
                    observer.next('Fetched Title From non resolver');
                }
                observer.complete();
            }, delay);
        });
    };
    MockHttpService.prototype.request = function (failure, delay) {
        var _this = this;
        if (delay === void 0) { delay = 2000; }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            setTimeout(function () {
                if (failure) {
                    observer.error(new Error('Error making request'));
                }
                else {
                    observer.next(_this._mock);
                }
                observer.complete();
            }, delay);
        });
    };
    MockHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MockHttpService);
    return MockHttpService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map