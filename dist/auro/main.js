(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"src-app-admin-admin-module"
	],
	"src/app/researcher/researcher.module": [
		"./src/app/researcher/researcher.module.ts",
		"src-app-researcher-researcher-module"
	],
	"src/app/user/user.module": [
		"./src/app/user/user.module.ts",
		"src-app-user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: appRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoute", function() { return appRoute; });
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
// Auth Guard Service

//components


var appRoute = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'app',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        children: [
            {
                path: 'admin',
                loadChildren: 'src/app/admin/admin.module#AdminModule'
            },
            {
                path: 'reviewer',
                loadChildren: 'src/app/user/user.module#UserModule'
            },
            {
                path: 'researcher',
                loadChildren: 'src/app/researcher/researcher.module#ResearcherModule'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n          \n     "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Router } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'auro';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _services_research_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/research.service */ "./src/app/services/research.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//routes





//service


//extra



//auth

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["appRoute"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_18__["DataTablesModule"]
            ],
            providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_14__["LoginService"], _services_research_service__WEBPACK_IMPORTED_MODULE_15__["ResearchdataService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }*/
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('token') !== null) {
            console.log("getting true..");
            return true;
        }
        else {
            console.log("canactive is blocking you sorry");
            this.router.navigate(['']);
            return false;
        }
    };
    AuthGuard.prototype.logout = function () {
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        this.router.navigate(['/login']);
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n\tbackground-color: #ccc;\n    padding: 11px 0;\n    box-shadow: -1px 0 6px 0px rgba(0,0,0,0.6);\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n  \t<div class=\"row\">\n  \t\t<div class=\"col-md-3 pull-left\"><a href=\"\" >About </a>&nbsp;| &nbsp;<a href=\"\">Privacy</a></div>\n\t    <div class=\"col-md-5 text-center\">Instance Assistance:1800-180-1503</div>\n\t    <div class=\"col-md-4 pull-right text-right\">For Aurbindos pharma Internal use only</div>\n  \t</div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');\n\nbody {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #333;\n  background-color: #fff;\n  font-family: 'Roboto Condensed', sans-serif;\n}\n\n.navbar{\n\theight: 100px;\n\tbackground-color: #f2f2f2 !important;\n\tborder-radius: 4px;\n\tborder: none;\n\t/*margin: 10px 10px;*/\n}\n\n.navbar-header{\n\tposition: relative;\n\tline-height: 50px;\n}\n\n.navbar-header span{\n\tcolor: #212529;\n\tfont-size: 26px;\n\tmargin-left: 20px;\n}\n\n.navbar-header img{\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 8px;\n\twidth: 120px;\n}\n\n._toggle{\n\tborder: .15rem solid rgb(70, 67, 67);\n\tbackground: transparent;\n\tborder-left: 0;\n\tborder-right: 0;\n\tcursor: pointer;\n\theight: 1.2rem;\n\tposition: relative;\n\twidth: 1.6rem;\n\toutline-style: none;\n\tleft: 10px;\n\ttop: -5px;\n\tz-index: 1;\n}\n\n._toggle::after {\n    background: #fff;\n    content: \"\";\n    height: .18rem;\n    left: 0;\n    margin-top: -.075rem;\n    position: absolute;\n    top: 50%;\n\twidth: 100%;\n\tbackground-color: rgb(70, 67, 67);\n}\n\n.search-block{\n\twidth:33.33%;\n}\n\n.search-block .navbar-form{\n\tdisplay: block;\n\twidth: 100%;\n}\n\n.search-block .navbar-form div input {\n\twidth: 100%;\n\tpadding: 12px 15px;\n\tborder-radius: 25px;\n\tborder:none;\n\tbox-shadow: none;\n}\n\n.media-object{\n\twidth: 55px;\n\theight: 55px;\n\tborder-radius: 50%;\n\tvertical-align: middle;\n}\n\n.noti-icon{\n\tbackground-color: red;\n\tcolor: #fff;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tpadding: 1px 5px;\n\tfont-size: 12px;\n}\n\n.media-right{\n\tposition: relative;\n}\n\n.media-body{\n\tline-height: 1.1;\n}\n\n.media-heading{\n\tfont-weight: bold;\n}\n\n.media-right span{\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 35px;\n}\n\n/* Sidebar-nav */\n\n.ng-sidebar {\n    background: red;\n}\n\n#sidebar {\n    min-width: 100px;\n\tmax-width: 100px;\n\tbackground: #000000a6/*#000111*//*#54B4AB*/;/*#3B5899;*/\n    color: #000;\n    transition: all 0.3s;\n    height: 100%;\n    border: 0;\n    padding-top:14px; \n}\n\n#sidebar ul{\n\tpadding: 0;\n\ttext-align: center;\n}\n\n#sidebar ul li{\n\tlist-style: none;\n}\n\n#sidebar ul li a {\n\tdisplay: block;\n\t\n\tcolor:  #fff;\n\tfont-size: 25px;\n\n}\n\n#sidebar ul li small{\n\tcolor: #fff;\n\tfont-size: 16px;\n}\n\n#sidebar ul li a:hover {\n    color: #7386D5;\n\t/*background: rgb(248, 246, 246);*/\n\toutline-style: none;\n}\n\n#sidebar ul li a:focus {\n    color: #fff;\n\toutline-style: none;\n}\n\n.navbar-right .media .media-heading, .navbar-right .media small {\n  text-transform: capitalize;\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/app\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/app/d2\"   routerLinkActive=\"active\">Link1</a>\n      </li>\n       <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/app/d1\"   routerLinkActive=\"active\">Link2</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n    <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"Logout()\"   routerLinkActive=\"active\" routerLinkActive=\"active\">Logout</a>\n      </li>\n\n    </ul>\n  </div>\n</nav> -->\n\n<ng-sidebar-container style=\"position: fixed;\">\n    <!-- A sidebar -->\n  <!-- <ng-sidebar [(opened)]=\"_opened\" mode=\"over\" closeOnClickOutside=false> -->\n  <ng-sidebar [(opened)]=\"_opened\" mode=\"over\" closeOnClickOutside=false>\n     <nav id=\"sidebar\" >\n       <!--  <a class=\"navbar-brand text-center\" href=\"#\"><img src=\"assets/logo.png\" width=\"230px\" height=\"50px\" class=\"logo\" alt=\"brand logo\"></a> -->\n        <ul>\n           \n          \n\n             <li *ngIf=\"rolevalues=='Admin'\">\n                <!-- <a routerLink=\"/app/d1\">Researcher</a> -->\n               <a routerLink=\"/app/admin/home\" routerLinkActive=\"active\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a> \n                <small>Home</small>\n            </li>\n\n             <li *ngIf=\"rolevalues=='Admin'\">\n                <!-- <a routerLink=\"/app/d1\">Researcher</a> -->\n               <a routerLink=\"/app/admin/create\" routerLinkActive=\"active\"><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i></a> \n                <small>Create user</small>\n            </li>\n            <li *ngIf=\"rolevalues=='Admin'\">\n                <!-- <a routerLink=\"/app/d1\">Researcher</a> -->\n               <a routerLink=\"/app/admin/usertable\" routerLinkActive=\"active\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i></a> \n                <small>Manage user</small>\n            </li>\n           \n           \n            <li>\n                <a routerLink=\"/app/admin/datacreation\"><i class=\"fa fa-table\" aria-hidden=\"true\"></i></a>\n                <small>Manage Data</small>\n            </li>\n             <li>\n                <a routerLink=\"/app/admin/setting\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i></a>\n                <small>Setting</small>\n            </li>\n             <li>\n                <a  ><i (click)=\"logout()\" class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></a>\n                <small>Logout</small>\n            </li>\n        </ul>\n        </nav>\n  \n  </ng-sidebar>\n\n    <!-- Page content -->\n    <div ng-sidebar-content>\n      \n      <nav class=\"navbar navbar-dark bg-dark\">\n         \n          <div class=\"navbar-header\">\n              <button (click)=\"_toggleSidebar()\" class=\"_toggle\"></button>\n            <img src=\"assets/logo.png\" alt=\"brand logo\">\n          </div>\n          <div class=\"search-block\">\n            <form class=\"navbar-form\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" name=\"search\" id=\"search\" placeholder=\"Search\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n            </div>\n           </form>\n          </div>\n        \n           <div class=\"nav navbar-nav navbar-right\">\n              <div class=\"media\">\n              <div class=\"media-body text-right mt-3 mr-2 p-0\">\n                <p class=\"media-heading mb-0 p-0\">{{name}}</p>\n                <small class=\"mb-0 p-0\">{{rolevalues}}</small>\n              </div>\n            <div class=\"media-right\">\n              <img src=\"assets/img_avatar.png\" class=\"media-object\" >\n              <span class=\"noti-icon\">2</span>\n            </div>\n            </div>\n            </div> \n          </nav> \n\n          <router-outlet></router-outlet>\n          <div class=\"footer\">\n            <app-footer></app-footer>\n          </div> \n    </div>\n\n  </ng-sidebar-container>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authGuard) {
        this.authGuard = authGuard;
        this.role = localStorage.getItem('role');
        this.name = localStorage.getItem('name');
        this._opened = false;
    }
    NavbarComponent.prototype._toggleSidebar = function () {
        this._opened = !this._opened;
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.rolevalues = this.rolevalue();
        console.log("value is here", this.rolevalues);
    };
    NavbarComponent.prototype.logout = function () {
        this.authGuard.logout();
    };
    NavbarComponent.prototype.rolevalue = function () {
        if (this.role == '1') {
            return 'Researcher';
        }
        if (this.role == '2') {
            return 'Reviewer';
        }
        if (this.role == '3') {
            return 'Admin';
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.modal-backdrop {\nposition: initial !important;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;\nz-index: 1040;\nbackground-color: #fff;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login login-bg\">\n\n<div class=\"container login-form mt-5\">\n    <div class=\"row justify-content-md-center form-border\">\n        <div class=\"col-md-5 col-md-auto\" style=\"background: rgba(83, 180, 168, 0.1);border-radius: 25px;padding: 25px 20px;\" >\n\n\n\n            <form  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"login-logo text-center mb-3\"> <img src=\"assets/logo-1.png\" alt=\"brand logo\"></div>\n                <h4 class=\"text-center mb-3\">LITERATURE MONITORING</h4> \n                <div class=\"form-group\">\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control col-md-10 offset-md-1\" placeholder=\"User Name\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n                </div>\n                <div class=\"form-LITERATURE MONITORINGgroup\">\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control col-md-10 offset-md-1\" placeholder=\"Enter Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n                </div>\n                <div class=\"form-LITERATURE MONITORINGgroup mt-3\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-block form-control col-md-3 offset-md-1\" >Log In</button>\n                </div>\n                 <div class=\" form-LITERATURE MONITORINGgroup mt-3 d-none\">\n                    \n\n                </div>         \n            </form>\n        </div>\n        \n\n    </div>\n   \n</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _services_research_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/research.service */ "./src/app/services/research.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, loginService, researchdataService, toastr, spinner) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.researchdataService = researchdataService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.submitted = true;
        event.preventDefault();
        console.log("-------", this.f.username.value);
        this.loginService.login(this.f.username.value, this.f.password.value)
            .subscribe(function (res) {
            _this.spinner.hide();
            console.log("--res-------------", res);
            if (res.save == true) {
                console.log("getting true");
                localStorage.setItem('name', res.name);
                localStorage.setItem('role', res.role);
                localStorage.setItem('token', res.token);
                switch (localStorage.getItem('role')) {
                    case '3':
                        _this.successmessageadmin();
                        _this.router.navigate(['/app/admin']);
                        break;
                    case '2':
                        _this.successmessagereviewer();
                        _this.router.navigate(['/app/user']);
                        break;
                    case '1':
                        _this.successmessageresearcher();
                        _this.router.navigate(['/app/researcher']);
                        break;
                    default:
                        break;
                }
            }
            else {
                _this.errormessage();
            }
        });
        if (this.f.username.value)
            if (this.loginForm.invalid) {
                return;
            }
    };
    LoginComponent.prototype.errormessage = function () {
        this.toastr.error('please provide correct username and password', 'Error');
    };
    LoginComponent.prototype.successmessageadmin = function () {
        this.toastr.success('welcome admin', 'Sucess');
    };
    LoginComponent.prototype.successmessagereviewer = function () {
        this.toastr.success('welcome reviewer', 'Sucess');
    };
    LoginComponent.prototype.successmessageresearcher = function () {
        this.toastr.success('welcome researcher', 'Sucess');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _services_research_service__WEBPACK_IMPORTED_MODULE_5__["ResearchdataService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(_http, httpClient) {
        this._http = _http;
        this.httpClient = httpClient;
    }
    LoginService.prototype.login = function (email, password) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var data = [{ username: email, password: password }];
        console.log("mail " + JSON.stringify(data));
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/login', JSON.stringify(data), { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/research.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/research.service.ts ***!
  \**********************************************/
/*! exports provided: ResearchdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchdataService", function() { return ResearchdataService; });
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResearchdataService = /** @class */ (function () {
    function ResearchdataService(_http, httpClient) {
        this._http = _http;
        this.httpClient = httpClient;
    }
    ResearchdataService.prototype.sumbitreview = function (datas) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        var data = datas;
        console.log('mail----service ' + JSON.stringify(data));
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('/api/reviewarticle', JSON.stringify(data), {
            headers: headers,
            withCredentials: true
        })
            .subscribe(function (res) { return res.json; });
    };
    ResearchdataService.prototype.sumbitasdraft = function (datas) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        var data = datas;
        console.log('mail----service ' + JSON.stringify(data));
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('/api/savearasDraftticle', JSON.stringify(data), {
            headers: headers,
            withCredentials: true
        })
            .subscribe(function (res) { return res.json; });
    };
    /* getreseachdata(): Observable<any>{
       console.log("will get the data")
      return this.httpClient.get('/api/getsrchresult').map(res =>res.json);
      
   }*/
    ResearchdataService.prototype.getsearchArt = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.get('/api/getsrchresult', { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    /* getsearchArt(): Observable<any> {
       const headers = new Headers();
       headers.append('Content-Type', 'application/json');
   
       return Observable.interval(3000).pipe(flatMap(() => {
           return this._http.get('/api/getsrchresult' ,{headers : headers, withCredentials: true})
         .map(res => res.json());
           }));
   
       // return this._http.get('/api/getsrchresult' ,{headers : headers, withCredentials: true})
       //   .map(res => res.json());
     }*/
    ResearchdataService.prototype.checkListData = function (obj) {
        return this.httpClient.post('/api/savedraft', obj);
    };
    /*removearticle(id){
      console.log("---",id);
      return this.httpClient.post('/api/deleteart',id);
    }*/
    ResearchdataService.prototype.removearticle = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        var data = { id: id };
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('/api/deleteart', data, {
            headers: headers,
            withCredentials: true
        })
            .subscribe(function (res) { return console.log(res); });
    };
    ResearchdataService.prototype.sumbitdraft = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        var data = data;
        console.log('sumbitdraft----service ' + JSON.stringify(data));
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('/api/savedraft', JSON.stringify(data), {
            headers: headers,
            withCredentials: true
        })
            .subscribe(function (res) { return res.json; });
    };
    ResearchdataService.prototype.sumbitdraftbyre = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        var data = data;
        console.log('sumbitdraft----service by researcher' + JSON.stringify(data));
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('/api/savedraftres', JSON.stringify(data), {
            headers: headers,
            withCredentials: true
        })
            .subscribe(function (res) { return res.json; });
    };
    ResearchdataService.prototype.sumbitdtriage = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        var data = data;
        console.log('sumbitdraft----service ' + JSON.stringify(data));
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('/api/savedtriage', JSON.stringify(data), {
            headers: headers,
            withCredentials: true
        })
            .subscribe(function (res) { return res.json; });
    };
    ResearchdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ResearchdataService);
    return ResearchdataService;
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sbees1/Ronak/heroku/auro-care/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map