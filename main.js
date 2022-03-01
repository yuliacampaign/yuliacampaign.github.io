(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jashg\OneDrive - University of Cincinnati\A College\Semester V\smithermanmartinez\src\main.ts */"zUnb");


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NavBarComponent {
    constructor() {
        this.isCollapsed = false;
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 21, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "sticky-top"], ["routerLink", "/", 1, "navbar-brand", "logo"], ["src", "../../assets/logo/SecondarySlogan_Opt2.png", "height", "100", "width", "100"], ["type", "button", "aria-controls", "navbarToggler", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["role", "button", 1, ""], ["aria-hidden", "true", 1, "fa", "fa-bars", 2, "color", "#bb0f55"], ["id", "navbarToggler", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "ml-5"], ["routerLink", "/meet", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/platform", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/campus-support", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-item", "ml-5", "mr-5"], ["type", "button", 1, "btn", "btn-primary", "text-light", "btn-sm", "vote-now"], ["href", "https://campuslink.uc.edu/submitter/election/step/1?SubmissionId=44120187", "target", "_blank", "routerLinkActive", "active", 1, "nav-link", 2, "color", "white"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_3_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Meet Isaac and Yulia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Campus Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Go Vote!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    background-color: #F2f2f0;\r\n    font-family: 'Compact Light';\r\n    border-bottom:5px solid #2072AA;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{\r\n    color:#2072AA;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%] {\r\n    color: #2072AA;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n    line-height: 5px;\r\n\r\n    color: #26517C;\r\n    font-weight: 800;\r\n}\r\n\r\n#subext[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    color: #26517C;\r\n\r\n}\r\n\r\n#subtext[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n\r\n    color: #26517C;\r\n    -webkit-text-fill-color:white;\r\n\r\n}\r\n\r\n#subtext[_ngcontent-%COMP%]:hover{\r\n    color: #26517C;\r\n    -webkit-text-fill-color:#26517C;\r\n}\r\n\r\n.maintext[_ngcontent-%COMP%]{\r\n    color: #26517C;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    src: url('Site_logo_fill.png');\r\n}\r\n\r\nnav-item[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n    color: F2f2f0 !important;\r\n\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active:focus, .btn.active[_ngcontent-%COMP%]:focus {\r\n   color: F2f2f0;\r\n   background-color: #26517C;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:active, .btn-primary[_ngcontent-%COMP%]:visited, .btn-primart[_ngcontent-%COMP%]:focus {\r\n    background-color: #26517C;\r\n    color: F2f2f0 !important;\r\n    border: F2f2f0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQTtJQUNJLGdCQUFnQjs7SUFFaEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjOztBQUVsQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7QUFDbkM7O0FBR0E7SUFDSSxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksOEJBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksd0JBQXdCOztBQUU1Qjs7QUFFQTtHQUNHLGFBQWE7R0FDYix5QkFBeUI7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEIiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJmMmYwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21wYWN0IExpZ2h0JztcclxuICAgIGJvcmRlci1ib3R0b206NXB4IHNvbGlkICMyMDcyQUE7XHJcbn1cclxuXHJcbi5uYXZiYXIgYXtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgY29sb3I6IzIwNzJBQTtcclxufVxyXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW06aG92ZXIgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjMjA3MkFBO1xyXG59XHJcblxyXG5cclxuLm5hdmJhci1icmFuZHtcclxuICAgIGxpbmUtaGVpZ2h0OiA1cHg7XHJcblxyXG4gICAgY29sb3I6ICMyNjUxN0M7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5cclxuI3N1YmV4dHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogIzI2NTE3QztcclxuXHJcbn1cclxuXHJcbiNzdWJ0ZXh0IHNwYW57XHJcblxyXG4gICAgY29sb3I6ICMyNjUxN0M7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjp3aGl0ZTtcclxuXHJcbn1cclxuXHJcbiNzdWJ0ZXh0OmhvdmVye1xyXG4gICAgY29sb3I6ICMyNjUxN0M7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjojMjY1MTdDO1xyXG59XHJcblxyXG5cclxuLm1haW50ZXh0e1xyXG4gICAgY29sb3I6ICMyNjUxN0M7XHJcbn1cclxuXHJcblxyXG4ubG9nbzpob3ZlciBpbWd7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ28vU2l0ZV9sb2dvX2ZpbGwucG5nJyk7XHJcbn1cclxuXHJcbm5hdi1pdGVtIC5idG57XHJcbiAgICBjb2xvcjogRjJmMmYwICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uYnRuOmZvY3VzLCAuYnRuOmFjdGl2ZTpmb2N1cywgLmJ0bi5hY3RpdmU6Zm9jdXMge1xyXG4gICBjb2xvcjogRjJmMmYwO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1MTdDO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnksIC5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5OnZpc2l0ZWQsIC5idG4tcHJpbWFydDpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1MTdDO1xyXG4gICAgY29sb3I6IEYyZjJmMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBGMmYyZjA7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "72M+":
/*!*********************************************************************!*\
  !*** ./src/app/platform/platform-icons/platform-icons.component.ts ***!
  \*********************************************************************/
/*! exports provided: PlatformIconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformIconsComponent", function() { return PlatformIconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PlatformIconsComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The college experience only happens once and we intend to make the most of it for all Bearcats!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformIconsComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Putting energy behind words through initiatives that will break down barriers between the student body and campus resources all while increasing transperancy and accessibility regarding Student Government endeavours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformIconsComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "We believe that small, healthy habits make the biggest of differences. We aim to have each Bearcat know they are supported and able to make an impact for generations to come.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformIconsComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "As spirit and excitement return to our campus we envision our One Team united from school day to game day.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformIconsComponent_div_21_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Want to see something never done before on campus? Submit your ideas for Gable + Allgood to improve UC and your idea might just be chosen to be our final platform point!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformIconsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Commitments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlatformIconsComponent_div_21_p_4_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.description);
} }
class PlatformIconsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlatformIconsComponent.ɵfac = function PlatformIconsComponent_Factory(t) { return new (t || PlatformIconsComponent)(); };
PlatformIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlatformIconsComponent, selectors: [["platform-icons"]], inputs: { description: "description", lastPlat: "lastPlat" }, decls: 22, vars: 5, consts: [[1, "platform-icons", "mt-2"], [1, "box1"], ["src", "../../assets/Platform/ucinfra.png", "height", "200px", "width", "200px", "alt", ""], [4, "ngIf"], ["src", "../../assets/Platform/ei.png", "height", "200px", "width", "200px", "alt", ""], ["src", "../../assets/Platform/comm-eng.png", "height", "200px", "width", "200px", "alt", ""], ["src", "../../assets/Platform/sg-reforms.png", "height", "200px", "width", "200px", "alt", ""], ["class", "box1 ", 4, "ngIf"], ["src", "../../assets/Platform/commitments.png", "height", "200px", "width", "200px", "alt", ""]], template: function PlatformIconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "UC Infrastructure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlatformIconsComponent_p_5_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Equity and Inclusion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlatformIconsComponent_p_10_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Comm Engagement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PlatformIconsComponent_p_15_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SG Reforms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PlatformIconsComponent_p_20_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PlatformIconsComponent_div_21_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastPlat);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".platform-icons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    \r\n    flex-wrap: wrap;\r\n    min-height: 100%;\r\n}\r\n\r\n.box1[_ngcontent-%COMP%]{\r\n    flex-basis: 20%;\r\n    text-align: center;   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRmb3JtLWljb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCOztJQUU3QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJwbGF0Zm9ybS1pY29ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXRmb3JtLWljb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYm94MXtcclxuICAgIGZsZXgtYmFzaXM6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformIconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'platform-icons',
                templateUrl: './platform-icons.component.html',
                styleUrls: ['./platform-icons.component.css']
            }]
    }], function () { return []; }, { description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastPlat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7rov":
/*!********************************************************!*\
  !*** ./src/app/submit-ideas/submit-ideas.component.ts ***!
  \********************************************************/
/*! exports provided: SubmitIdeasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitIdeasComponent", function() { return SubmitIdeasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SubmitIdeasComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubmitIdeasComponent.ɵfac = function SubmitIdeasComponent_Factory(t) { return new (t || SubmitIdeasComponent)(); };
SubmitIdeasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmitIdeasComponent, selectors: [["app-submit-ideas"]], decls: 5, vars: 0, consts: [[1, "p-2", "text-center"], [1, "googleform"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLSerarF_ugq0HG24x6fKagxDNzJ4sFumgX1OtjbXGi8py2PXMQ/viewform?embedded=true", "width", "100%", "height", "1416px", "frameborder", "0", "marginheight", "0", "marginwidth", "0"]], template: function SubmitIdeasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "H2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Make Your Voice Heard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h2[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    \r\n}\r\n\r\n.googleform[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC1pZGVhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3VibWl0LWlkZWFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBcclxufVxyXG5cclxuLmdvb2dsZWZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmitIdeasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-submit-ideas',
                templateUrl: './submit-ideas.component.html',
                styleUrls: ['./submit-ideas.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _platform_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/platform-icons/platform-icons.component */ "72M+");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 9, vars: 2, consts: [["src", "../../assets/Candidates/banner-min.jpeg", 1, "img-fluid"], [1, "mt-3"], [1, "p-2", 2, "text-align", "center"], ["id", "line-strip"], [3, "description", "lastPlat"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "H3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Heyo Bolder Bearcats! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Our names are Isaac Smitherman and Yulia Martinez, and we are so excited to be running to be your next Undergraduate Student Government President and Vice President at the University of Cincinnati. We have a vision for a bolder UC and we hope that you can embark on this journey with us in becoming Bolder Bearcats! Check out our platform and follow us on all on our social medias so that you can stay updated on how were going to change our university for the better.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "H1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "What We Stand For");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "platform-icons", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", false)("lastPlat", true);
    } }, directives: [_platform_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_1__["PlatformIconsComponent"]], styles: ["p[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 16pt;\r\n    line-height: 1.2;\r\n}\r\n\r\np[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #bb0f55;\r\n}\r\n\r\nH3[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n}\r\n\r\nH1[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 600;\r\n}\r\n\r\n.intro-vid[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n#line-strip[_ngcontent-%COMP%]{\r\n    height: 0px;\r\n    width: 100%;\r\n    border-bottom: 2px solid #bb0f55;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7O0FBRUg7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdDQUFnQztBQUNwQyIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQe1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufSAqL1xyXG5cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5wIHNwYW57XHJcbiAgICBjb2xvcjogI2JiMGY1NTtcclxufVxyXG5IM3tcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB0O1xyXG59XHJcblxyXG5IMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaW50cm8tdmlke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNsaW5lLXN0cmlwe1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYmIwZjU1O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "B15d":
/*!**********************************************!*\
  !*** ./src/app/platform/platform.service.ts ***!
  \**********************************************/
/*! exports provided: PlatformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformService", function() { return PlatformService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class PlatformService {
    // getPlatforms():Observable<IPlatform[]>{
    //     let subject = new Subject<IPlatform[]>();
    //     setTimeout(()=> {subject.next(PLATFORMS); subject.complete(); },
    //     100)
    //     return subject;
    // }
    getCampusExperience() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(CAMPUSEXP); subject.complete(); }, 100);
        return subject;
    }
    getAction() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(ACTION); subject.complete(); }, 100);
        return subject;
    }
    getSustainability() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(SUSTAINABILITY); subject.complete(); }, 100);
        return subject;
    }
    getVarsity() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(VARSITY); subject.complete(); }, 100);
        return subject;
    }
    getYourCampus() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(YOURCAMPUS); subject.complete(); }, 100);
        return subject;
    }
}
PlatformService.ɵfac = function PlatformService_Factory(t) { return new (t || PlatformService)(); };
PlatformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlatformService, factory: PlatformService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
const CAMPUSEXP = [
    {
        name: "Sustainability ",
        info: `i. Solar Panel Charging Stations
        Collaborating with student engineering organizations, 1819 Hub,
        and P+D+C, we plan to prototype Solar Panel Charging stations
        that can be placed in Sigma Sigma Commons to charge devices,
        power wifi boosters, and allow students to work outside with ease.
        Using 75W solar panels, lithium batteries, and the ingenuity of UC
        students, we can create charging stations that will power phones,
        laptops, and wifi boosters.
        `,
        impact: `ii. Gas Free UC
        As we continue to address issues related to climate change and
        transition to a more sustainable future, it is essential that UC
        creates a plan to transition away from the use of fossil fuels on
        campus. By purchasing electrical landscaping equipment,
        induction stoves, and investing in sustainable heating systems in
        newly constructed buildings, UC can take another step in being a
        leader in the green future.`,
        plan: '',
        color: "cherry"
    },
    {
        name: "Transportation ",
        info: ` i. UC Rides
      We plan to re-engage Cincinnati METRO and develop a plan to
      provide free rides for all UC students. Every UC student deserves
      access to reliable and affordable transportation that will help
      reduce traffic in Clifton, provide connections to the greater
      Cincinnati area, as well as save students time, money, and stress
      while attending the University of Cincinnati.
      `,
        impact: `ii. Better Bus Stops
      In tandem with providing UC students free METRO rides, it is
      essential that UC students have access to better bus stops. We
      plan to work with METRO to expand routes to service short-vine,
      ensure that all bus stops within a mile radius of UC have a bench,
      and remove anti-homeless infrastructure from every bus stop in
      the Clifton community.
      `,
        plan: '',
        color: "cherry"
    },
    {
        name: "Accessibility ",
        info: `i. Wheelchair Stations
        In collaboration with the Office of Accessibility, we plan to
        implement electric wheelchair stations accessible to any student
        with a disability or injury to use while traveling to and from classes.
        Taking away stress from students about how they will traverse
        across our campus while experiencing chronic illnesses and
        damages will be an essential step to ensuring thatour campus is
        accessible for all.
        `,
        impact: `ii. Improved Walking Paths
        Due to several locations that we have identified in the Clifton
        community, such as the intersection of Warner and Wheeler, we
        plan to collaborate with city officials to increase signage and
        crosswalks throughout the Clifton community. Additionally, we plan
        to work with the UC community to identify areas in the surrounding
        neighborhood where lighting can be improved for safer walks
        home.
        `,
        plan: `iii. Tampon Task Force
        Before COVID, the University committed to putting tampon
        stations in every women's and gender neutral bathroom on
        campus. We plan to work with the University to re-implement this
        commitment as well as expand the initiatives to cover all
        bathrooms on campus. UC students who menstruate deserve
        easy access to quality menstruation products while on-campus.

        iv. Revamp Lactation Rooms
        Working with the Women's center and the Office of Equity and
        Inclusion we plan to clarify who is responsible for managing our
        lactation rooms on campus as well as looking into ways that we
        can revamp and modernize the rooms themselves. Currently, like
        most rooms on campus, UCPD has to be called to gain access to
        a lactation room. This system is not equitable or accessible, but
        through the power of technology and innovation we will take the
        next steps to ensure that all student parents, care-givers, and
        pregnant individuals feel welcome and supported on our campus.

        v. Collaborating with Bearcats Pantry (BCP) Resource Center
        We plan to collaborate with P+D+C to establish an on-campus
        location for the BCP Resource Center in TUC. We plan to work
        with P+D+C to redesign the upper floor of Stratford building 14 to
        have the capability to permanently house the BCP Resource
        Center. We plan to utilize Student Government resources to help
        expand on the BCP Thanksgiving meal program for students who
        are experiencing food insecurity or are not able to travel home
        during the holidays.
        `,
        color: "cherry"
    }
];
const ACTION = [
    {
        name: "Funding Cost Centers ",
        info: `i. Every year the Student Advisory Committee on the University
              Budget (SACUB) gives recommendations to the University about
              allocating the $28 million general fee. Each year our
              identity-based centers request
              additional funds to support the programming coming out of
              their office, but with limited funding resources, these
              requests often go unfulfilled. We will work with Athletics
              to develop a plan to begin re-allocating small portions of
              their $5.5 million general fee allotment as they increase revenue
              with media contracts, ticket sales, and merchandising profits to fulfill
              requests from other cost centers on campus.

              ii. What could this fund?
                1. For EPS
                    a. The return of Emerging Ethnic Leaders
                    b. API Programming
                    c. Latinx Programming
                2. For AACRC
                    a. More support for Brother 2 brother
                    b. More support for Sisters Impacting Sisters
                    c. Expand Transitions
                    d. Expand Tyheimba
                    e. Expand Kuamka
                3. For LGBTQ+ Center
                    a. Fund professional development for staff members
        `,
        impact: '',
        plan: '',
        color: "yellowish"
    },
    {
        name: "DE&I Townhall",
        info: `i. To increase transparency and awareness for DE&I initiatives
              occurring out our University, we plan to invite faculty, staff,
              and upper level UC administration to participate in semesterly
              town halls to address concerns related to hiring and retaining
              staff as well as resources for students across UC’s campuses.
        `,
        impact: '',
        plan: '',
        color: "yellowish"
    },
    {
        name: "UC Historian Position",
        info: `i. To move forward as a University it is essential that we
              understand our past. As detailed in the McMicken report, we
              plan to work with the Provost and President’s office to
              establish an official UC Historian position that will
              document the very beginnings of our University and all
              the incidents leading to our current state,
              good, bad, and ugly.
        `,
        impact: '',
        plan: '',
        color: "yellowish"
    },
    {
        name: "Non-Student Visa Advisor ",
        info: `i. Currently about 300 of our 4500 International
              students hold Non-Student visas that complicate processes
              such as filing taxes and applying for work authorization forms.
              We plan to work with International Student Services to create
              an official title for one of their current advisors that would
              designate them as the expert on Non-Student visas. This would
              give students a streamlined process to receive assistance,
              as well as ensure International Student Services are able to
              reach students who need them the most.
        `,
        impact: '',
        plan: '',
        color: "yellowish"
    },
    {
        name: "Non-Student Visa Advisor ",
        info: `i. Currently about 300 of our 4500 International
            students hold Non-Student visas that complicate processes
            such as filing taxes and applying for work authorization forms.
            We plan to work with International Student Services to create
            an official title for one of their current advisors that would
            designate them as the expert on Non-Student visas. This would
            give students a streamlined process to receive assistance,
            as well as ensure International Student Services are able to
            reach students who need them the most.
      `,
        impact: '',
        plan: '',
        color: "yellowish"
    },
    {
        name: "UC Vogues ",
        info: `i. We plan to collaborate with the AACRC and LGBTQ+
          Center to create programming that specifically highlights
          queer POC culture. Everyone loves drag queens,
          so who wouldn’t love a ball?!
    `,
        impact: '',
        plan: '',
        color: "yellowish"
    }
];
const SUSTAINABILITY = [
    {
        name: "Nippert Watch Party ",
        info: `i. To continue to support our student athletes as well as engage
              with the Cincinnati community, we plan to host an annual Nippert Watch Party
              during one of the UC Football away games. We will invite local
              businesses to serve and sell food, collaborate with the band and athletics
              to have music and giveaways, and give students a fun and amazing
              opportunity to cheer on the bearcats!
    `,
        impact: '',
        plan: '',
        color: "darkmaroon"
    },
    {
        name: "Return of Ruckus Rewards ",
        info: `i. We plan to work with Athletics and UC IT
              to bring back Ruckus Rewards in order to create an
              incentive system that will increase engagement for
              our teams that don’t receive their deserved level
              of attention such as
              Women’s sports and Esports.

    `,
        impact: '',
        plan: '',
        color: "darkmaroon"
    },
    {
        name: "Book Fair ",
        info: `i. To continue to engage with the Cincinnati community,
            we want to connect with local bookstores in the area to
            start an annual book fair that will allow students to support
            and learn about local businesses, encourage students to read,
            and provide a fun event for students to destress and explore all
            of their unique interests. `,
        impact: '',
        plan: '',
        color: "darkmaroon"
    }
];
const VARSITY = [
    {
        name: "Revamp Outreach Week",
        info: `i. In collaboration with SAB and UFB, we plan to
            revamp Outreach Week and send Student Government
            members to directly engage with student organizations
            on campus. During this week, SG members will meet with
            several student organizations to explain funding processes,
            and various resources that the Student Government network can
            provide. This will create direct links from every student organization
            to Student Government and encourage collaboration and connectivity across campus. `,
        impact: '',
        plan: '',
        color: "isthischerry"
    },
    {
        name: "Student Trustee Voting Rights ",
        info: `i. For too long, our Student Trustee has gone without
      the ability to cast a vote on essential issues that directly
      impact the student body. This not only diminishes the Student Trustees
      ability to engage with other Board of Trustee members, but also diminishes
      the voice of the Student Body as a whole. We plan to work directly with the
      Governor's Office and State Legislature to ensure that the UC student voice
      can be heard in a clear and concise manner, not lost in
      meeting minutes on UC’s website.
      `,
        impact: '',
        plan: '',
        color: "isthischerry"
    },
    {
        name: "Advocating with SACUB ",
        info: `i. Every year, the Student Advisory Committee on the
      University Budget provides recommendations to the University
      about how to allocate our $28 million dollar general fee.
      We believe it is essential that Student Government becomes
      more engaged in this process and assists SACUB in advocating
      for the implementation of its recommendations each year.
      d. Student Safety Board Reform
      i. Since the murder of Sam DuBose and the reform of Univeristy of
      Cincinnati Police Department, the Student Safety Board has not had a clear vision for their mission and purpose within Student Government. We plan to open dialogue about where SSB can engage with students and they can collaborate with offices like International Student Services, the Office of Accessibility, etc. to spread awareness about issues and
      advocate for the safety of all students on campus.

      `,
        impact: '',
        plan: '',
        color: "isthischerry"
    },
    {
        name: "Student Safety Board Reform",
        info: `i. Since the murder of Sam DuBose and the
            reform of Univeristy of Cincinnati Police Department,
            the Student Safety Board has not had a clear vision for their
            mission and purpose within Student Government. We plan to open
            dialogue about where SSB can engage with students and they can
            collaborate with offices like International Student Services,
            the Office of Accessibility, etc. to spread awareness about
            issues and advocate for the safety of all students on campus.
      `,
        impact: '',
        plan: '',
        color: "isthischerry"
    },
    {
        name: "SG Legislative Agenda ",
        info: `i. Working in tandem with our Governmental Relations
      committee, we plan to establish an SG Legislative Agenda
      on our official website that will track important local, state,
      and federal bills as well as give students tangible advocacy
      tools to engage with their Representatives and get
      involved with the civic process.

      `,
        impact: '',
        plan: '',
        color: "isthischerry"
    }
];
const YOURCAMPUS = [
    {
        name: "Sustainability ",
        info: `i. We want every student on campus to know that we are dedicated to sustainable advocacy and will continue that dedication if elected into
        these positions. Our dedication can be seen in our campaign t-shirts that were screen printed with the help of SFI (Sustainable Fashion Initiatives), our commitment to providing food options for UC students with dietary restrictions at all of our events, and our support of local business in all of our social media giveaways.
        `,
        impact: ``,
        plan: ``,
        color: "yellowish"
    },
    {
        name: "Collaboration and Connectivity ",
        info: `i. As you read through our platform, we want you to
      notice how many different organizations, offices, and
      community partners we plan to collaborate with in our initiatives.
      We believe that it is essential for Student Government to become
      more integrated into the social ecosystem of our campus, clifton,
      and cincinnati communities. We plan to be bolder advocates for
      everyone who is impacted by our University and that can only
       happen if we are connected to those people on a deeper level.

      `,
        impact: ``,
        plan: ``,
        color: "yellowish"
    },
    {
        name: "Renaming McMicken ",
        info: `i. We believe that Renaming McMicken is a crucial issue
    to the progress of our University as a whole. While we do not
    believe that we have all the answers for how this issue should
    be solved, we plan to ensure that this conversation stays at the
    forefront by bringing together a committee of campus partners
    such as the AACRC, EPS, students, faculty, staff, University Alumni,
    and organizations that have already begun advocacy on this issues.
    Working with these groups, we will identify a new name for the
    McMicken building as well as steps that the University can take
    to address all incidents of racial inequality in its past, present, and future.

    `,
        impact: ``,
        plan: ``,
        color: "yellowish"
    },
    {
        name: "YMCA Building",
        info: `i. AAs the University continues to work on
  stabilizing the YMCA building on Calhoun street,
  we plan to continuously engage P+D+C on its progress
  and plans for the future of the building. Although we
  support visions such as the Herbert + Liebman initiative
  to establish a Center for Civic Excellence, we also plan to
  engage the student body about how the
  space can be utilized for future Bearcats.

  `,
        impact: ``,
        plan: ``,
        color: "yellowish"
    },
    {
        name: "Cincinnati Public School Recruitment ",
        info: `i. We are committed to working with the
  Admissions office to strategize on improvements to our
  current CPS recruitment tactics. Schools like Hughes high
  school are not even in the top 10 of recruitment from CPS
  schools, and it is essential that UC is reaching every
  high school student in Cincinnati if we are to continue
  progressing as a University. Student Government has the
  resources to support current recruitment efforts and should
  also be engaging students about the importance of this issue
  and how they can get involved in reaching and retaining future CPS
  graduates.


  `,
        impact: ``,
        plan: ``,
        color: "yellowish"
    },
    {
        name: "Graduation Assistance ",
        info: `i. Every year, there are several students who
  are not able to graduate because of outstanding payments
  to the University. We plan to work with the UC Foundation
  and other UC administrators to ensure that every student in
  their senior year is able to graduate, and that there are systems
  in place to clear payments so that seniors can take the next steps
  in their Bearcat journey.
  `,
        impact: ``,
        plan: ``,
        color: "yellowish"
    }
];


/***/ }),

/***/ "Ku9T":
/*!**********************************************************!*\
  !*** ./src/app/campus-support/campus-support.service.ts ***!
  \**********************************************************/
/*! exports provided: SupportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportService", function() { return SupportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SupportService {
    getSupports() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(SUPPORT); subject.complete(); }, 100);
        return subject;
    }
    getNextSupport(id) {
        let x = SUPPORT.find(cs => cs.id == id);
        if (!x)
            return this.getNextSupport((id + 1));
        return x;
    }
    getPrevSupport(id) {
        let x = SUPPORT.find(cs => cs.id == id);
        if (!x)
            return this.getNextSupport((id - 1));
        return x;
    }
}
SupportService.ɵfac = function SupportService_Factory(t) { return new (t || SupportService)(); };
SupportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SupportService, factory: SupportService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
const SUPPORT = [
    {
        id: 1,
        address: "../../assets/testimonials/1.png"
    },
    {
        id: 2,
        address: "../../assets/testimonials/2.png"
    },
    {
        id: 3,
        address: "../../assets/testimonials/3.png"
    },
    {
        id: 4,
        address: "../../assets/testimonials/4.png"
    },
    {
        id: 5,
        address: "../../assets/testimonials/5.png"
    },
    {
        id: 6,
        address: "../../assets/testimonials/6.png"
    },
    {
        id: 7,
        address: "../../assets/testimonials/7.png"
    },
    {
        id: 8,
        address: "../../assets/testimonials/8.png"
    },
    {
        id: 9,
        address: "../../assets/testimonials/9.png"
    },
    {
        id: 10,
        address: "../../assets/testimonials/10.png"
    },
    {
        id: 11,
        address: "../../assets/testimonials/11.png"
    },
    {
        id: 12,
        address: "../../assets/testimonials/12.png"
    },
    {
        id: 13,
        address: "../../assets/testimonials/13.png"
    },
    {
        id: 14,
        address: "../../assets/testimonials/14.png"
    },
    // {
    //       id:15,
    //       address: "../../assets/testimonials/15.png"
    //   },
    {
        id: 16,
        address: "../../assets/testimonials/16.png"
    },
    {
        id: 17,
        address: "../../assets/testimonials/17.png"
    },
    // {
    //       id:18,
    //       address: "../../assets/testimonials/18.png"
    //   },
    {
        id: 19,
        address: "../../assets/testimonials/19.png"
    },
    // {
    //     id:20,
    //     address: "../../assets/testimonials/20.png"
    // },
    {
        id: 21,
        address: "../../assets/testimonials/21.png"
    },
    {
        id: 22,
        address: "../../assets/testimonials/22.png"
    },
    {
        id: 23,
        address: "../../assets/testimonials/23.png"
    },
    {
        id: 24,
        address: "../../assets/testimonials/24.png"
    },
    {
        id: 25,
        address: "../../assets/testimonials/25.png"
    },
    {
        id: 26,
        address: "../../assets/testimonials/26.png"
    },
    {
        id: 27,
        address: "../../assets/testimonials/27.png"
    },
    {
        id: 28,
        address: "../../assets/testimonials/28.png"
    },
    {
        id: 29,
        address: "../../assets/testimonials/29.png"
    },
    {
        id: 30,
        address: "../../assets/testimonials/30.png"
    },
    {
        id: 31,
        address: "../../assets/testimonials/31.png"
    },
    {
        id: 32,
        address: "../../assets/testimonials/32.png"
    },
    {
        id: 33,
        address: "../../assets/testimonials/33.png"
    },
    {
        id: 34,
        address: "../../assets/testimonials/34.png"
    },
    {
        id: 35,
        address: "../../assets/testimonials/35.png"
    },
    {
        id: 36,
        address: "../../assets/testimonials/36.png"
    },
    {
        id: 37,
        address: "../../assets/testimonials/37.png"
    },
    {
        id: 39,
        address: "../../assets/testimonials/39.png"
    },
    {
        id: 40,
        address: "../../assets/testimonials/40.png"
    },
    {
        id: 41,
        address: "../../assets/testimonials/41.png"
    },
    {
        id: 42,
        address: "../../assets/testimonials/42.png"
    },
    {
        id: 43,
        address: "../../assets/testimonials/43.png"
    },
    {
        id: 44,
        address: "../../assets/testimonials/44.png"
    },
    {
        id: 45,
        address: "../../assets/testimonials/45.png"
    },
    {
        id: 46,
        address: "../../assets/testimonials/46.png"
    },
    {
        id: 47,
        address: "../../assets/testimonials/47.png"
    },
    {
        id: 48,
        address: "../../assets/testimonials/48.png"
    },
    {
        id: 49,
        address: "../../assets/testimonials/49.png"
    },
    {
        id: 50,
        address: "../../assets/testimonials/50.png"
    },
    {
        id: 51,
        address: "../../assets/testimonials/51.png"
    },
    {
        id: 52,
        address: "../../assets/testimonials/52.png"
    },
    {
        id: 53,
        address: "../../assets/testimonials/53.png"
    },
    {
        id: 54,
        address: "../../assets/testimonials/54.png"
    },
    {
        id: 55,
        address: "../../assets/testimonials/55.png"
    },
    {
        id: 56,
        address: "../../assets/testimonials/56.png"
    },
    {
        id: 57,
        address: "../../assets/testimonials/57.png"
    },
    {
        id: 58,
        address: "../../assets/testimonials/58.png"
    },
    {
        id: 59,
        address: "../../assets/testimonials/59.png"
    },
    {
        id: 60,
        address: "../../assets/testimonials/60.png"
    },
    {
        id: 61,
        address: "../../assets/testimonials/61.png"
    },
    {
        id: 62,
        address: "../../assets/testimonials/62.png"
    },
    {
        id: 63,
        address: "../../assets/testimonials/63.png"
    },
    {
        id: 64,
        address: "../../assets/testimonials/64.png"
    },
    {
        id: 65,
        address: "../../assets/testimonials/65.png"
    },
    {
        id: 66,
        address: "../../assets/testimonials/66.png"
    },
    {
        id: 67,
        address: "../../assets/testimonials/67.png"
    },
    {
        id: 68,
        address: "../../assets/testimonials/68.png"
    },
    {
        id: 69,
        address: "../../assets/testimonials/69.png"
    },
    {
        id: 70,
        address: "../../assets/testimonials/70.png"
    },
    {
        id: 72,
        address: "../../assets/testimonials/72.png"
    },
    {
        id: 73,
        address: "../../assets/testimonials/73.png"
    }
];


/***/ }),

/***/ "PhBf":
/*!************************************************************!*\
  !*** ./src/app/campus-support/campus-support.component.ts ***!
  \************************************************************/
/*! exports provided: CampusSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusSupportComponent", function() { return CampusSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _campus_support_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campus-support.service */ "Ku9T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CampusSupportComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampusSupportComponent_div_5_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const support_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openImage(support_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const support_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", support_r2.address, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CampusSupportComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampusSupportComponent_div_7_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.closeImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.modalImg.address, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CampusSupportComponent {
    constructor(supportService) {
        this.supportService = supportService;
        this.modalImg = { id: 0, address: "" };
        this.imgOpen = false;
    }
    ngOnInit() {
        this.supports = this.supportService.getSupports();
    }
    openImage(src) {
        console.log(src);
        this.modalImg = { id: 0, address: "" };
        this.modalImg.id = src.id;
        this.modalImg.address = src.address;
        this.imgOpen = true;
    }
    closeImage() {
        this.imgOpen = false;
    }
    slideNext() {
        this.modalImg = this.supportService.getNextSupport((this.modalImg.id) + 1);
    }
    slidePrev() {
        this.modalImg = this.supportService.getPrevSupport((this.modalImg.id) - 1);
    }
}
CampusSupportComponent.ɵfac = function CampusSupportComponent_Factory(t) { return new (t || CampusSupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_campus_support_service__WEBPACK_IMPORTED_MODULE_1__["SupportService"])); };
CampusSupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CampusSupportComponent, selectors: [["app-campus-support"]], decls: 8, vars: 4, consts: [[1, "mt-2"], [1, "campus-support"], ["class", "box1 p-2", 4, "ngFor", "ngForOf"], ["id", "myModal", "class", "modal", 4, "ngIf"], [1, "box1", "p-2"], ["alt", "", 2, "cursor", "pointer", 3, "src", "click"], ["id", "myModal", 1, "modal"], [1, "close", 3, "click"], ["id", "img01", 1, "modal-content", 3, "src"]], template: function CampusSupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CAMPUS SUPPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Check out why these campus leaders are suppoting us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CampusSupportComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CampusSupportComponent_div_7_Template, 4, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.supports));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".campus-support[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    flex-wrap:wrap;\r\n}\r\n\r\n.box1[_ngcontent-%COMP%]{\r\n    flex-basis: 30%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-width: 300px;\r\n    box-shadow: 5px 5px 3px grey;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 6px 6px 4px grey;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 11pt;\r\n    text-align: center;\r\n}\r\n\r\nH2[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n    text-align: center;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: block; \r\n    position: fixed; \r\n    z-index: 1; \r\n    padding-top: 200px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.9); \r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: block;\r\n    width: 80%;\r\n    max-width: 650px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%], #caption[_ngcontent-%COMP%] {\r\n    animation-name: zoom;\r\n    animation-duration: 0.6s;\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 135px;\r\n    right: 35px;\r\n    color: #f1f1f1;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    transition: 0.3s;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: #bbb;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbXB1cy1zdXBwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxjQUFjLEVBQUUsc0JBQXNCO0lBQ3RDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDNUQ7O0FBRUEsMEJBQTBCOztBQUMxQjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQSxrRUFBa0U7O0FBQ2xFOzs7Ozs7O0dBT0c7O0FBRUgsc0NBQXNDOztBQUN0QztJQUNJLG9CQUFvQjtJQUNwQix3QkFBd0I7QUFDNUI7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFHQTs7SUFFSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRyIsImZpbGUiOiJjYW1wdXMtc3VwcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbXB1cy1zdXBwb3J0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbn1cclxuXHJcbi5ib3gxe1xyXG4gICAgZmxleC1iYXNpczogMzAlO1xyXG59XHJcblxyXG5cclxuaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IGdyZXk7XHJcbn1cclxuXHJcbmltZzpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggNHB4IGdyZXk7XHJcbn1cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5IMntcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKEltYWdlKSAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xyXG59XHJcblxyXG4vKiBDYXB0aW9uIG9mIE1vZGFsIEltYWdlIChJbWFnZSBUZXh0KSAtIFNhbWUgV2lkdGggYXMgdGhlIEltYWdlICovXHJcbi8qICNjYXB0aW9uIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG59ICovXHJcblxyXG4vKiBBZGQgQW5pbWF0aW9uIC0gWm9vbSBpbiB0aGUgTW9kYWwgKi9cclxuLm1vZGFsLWNvbnRlbnQsICNjYXB0aW9uIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzNXB4O1xyXG4gICAgcmlnaHQ6IDM1cHg7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiAubmV4dEFycm93e1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5cclxuLnByZXZBcnJvd3tcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59ICovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampusSupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-campus-support',
                templateUrl: './campus-support.component.html',
                styleUrls: ['./campus-support.component.css']
            }]
    }], function () { return [{ type: _campus_support_service__WEBPACK_IMPORTED_MODULE_1__["SupportService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-animations */ "s+wa");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");






class AppComponent {
    constructor() {
        this.title = 'gableallgood';
    }
    prepareRouterOutlet(outlet) {
        return outlet;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 1, consts: [["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=Oswald:wght@300;600&display=swap", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["role", "main", 1, "container"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRouterOutlet(_r0));
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */"], data: { animation: [
            _route_animations__WEBPACK_IMPORTED_MODULE_1__["fader"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                animations: [
                    _route_animations__WEBPACK_IMPORTED_MODULE_1__["fader"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _meet_meet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meet/meet.component */ "dEjQ");
/* harmony import */ var _platform_platform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./platform/platform.component */ "lDaF");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./campus-support/campus-support.component */ "PhBf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _platform_collapsible_well_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./platform/collapsible-well.component */ "oqwT");
/* harmony import */ var _platform_platform_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./platform/platform.service */ "B15d");
/* harmony import */ var _platform_platform_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./platform/platform-list.component */ "rPbr");
/* harmony import */ var _team_teams_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./team/teams.service */ "ngQW");
/* harmony import */ var _campus_support_campus_support_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./campus-support/campus-support.service */ "Ku9T");
/* harmony import */ var _platform_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./platform/platform-icons/platform-icons.component */ "72M+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _submit_ideas_submit_ideas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./submit-ideas/submit-ideas.component */ "7rov");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _platform_platform_service__WEBPACK_IMPORTED_MODULE_13__["PlatformService"],
        _team_teams_service__WEBPACK_IMPORTED_MODULE_15__["TeamsService"],
        _campus_support_campus_support_service__WEBPACK_IMPORTED_MODULE_16__["SupportService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
        _meet_meet_component__WEBPACK_IMPORTED_MODULE_7__["MeetComponent"],
        _platform_platform_component__WEBPACK_IMPORTED_MODULE_8__["PlatformComponent"],
        _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
        _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_10__["CampusSupportComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _platform_collapsible_well_component__WEBPACK_IMPORTED_MODULE_12__["CollapsibleWellComponent"],
        _platform_platform_list_component__WEBPACK_IMPORTED_MODULE_14__["PlatformListComponent"],
        _platform_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_17__["PlatformIconsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
        _submit_ideas_submit_ideas_component__WEBPACK_IMPORTED_MODULE_19__["SubmitIdeasComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                    _meet_meet_component__WEBPACK_IMPORTED_MODULE_7__["MeetComponent"],
                    _platform_platform_component__WEBPACK_IMPORTED_MODULE_8__["PlatformComponent"],
                    _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
                    _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_10__["CampusSupportComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _platform_collapsible_well_component__WEBPACK_IMPORTED_MODULE_12__["CollapsibleWellComponent"],
                    _platform_platform_list_component__WEBPACK_IMPORTED_MODULE_14__["PlatformListComponent"],
                    _platform_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_17__["PlatformIconsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                    _submit_ideas_submit_ideas_component__WEBPACK_IMPORTED_MODULE_19__["SubmitIdeasComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
                ],
                providers: [
                    _platform_platform_service__WEBPACK_IMPORTED_MODULE_13__["PlatformService"],
                    _team_teams_service__WEBPACK_IMPORTED_MODULE_15__["TeamsService"],
                    _campus_support_campus_support_service__WEBPACK_IMPORTED_MODULE_16__["SupportService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dEjQ":
/*!****************************************!*\
  !*** ./src/app/meet/meet.component.ts ***!
  \****************************************/
/*! exports provided: MeetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetComponent", function() { return MeetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MeetComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeetComponent.ɵfac = function MeetComponent_Factory(t) { return new (t || MeetComponent)(); };
MeetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetComponent, selectors: [["app-meet"]], decls: 32, vars: 0, consts: [[1, "p-2"], [1, "intro", "p-2"], [1, "intro-1", "p-2"], ["src", "../../assets/Candidates/isaac.jpg", "width", "100%", 1, "pic-shot"], ["src", "../../assets/Candidates/AGPC.png", "width", "100%", "alt", ""], [1, "intro-1"], [1, "intro-2", "intro-2-img", "p-2"], ["src", "../../assets/Candidates/yulia.jpg", "width", "100%", 1, "pic-shot"], ["src", "../../assets/Candidates/TAVPC.png", "width", "100%", "alt", ""], [1, "intro-2", "intro-2-write", "p-2"]], template: function MeetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Meet the Candidates!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Student Government has been such a big part of my life and has given me so much experience in being a student leader from serving as the Director of City Relations my sophomore year, to my term as Treasurer of USG during the start of the pandemic, and in my current roles as Co-Chair of the Governmental Relations Committee and a Senator-At-Large. I\u2019ve been able to work with so many amazing people to better the student experience, and I am more than ready to take on this new challenge and utilize everything that I have learned to bring more resources and opportunities for every student to be a #BolderBearcat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " This campaign is all about reconsidering what\u2019s possible on our campus and pushing past our own experiences to create a UC that is more inclusive, more connected, and most importantly more bold! (Yes, I know that\u2019s not grammatically correct leave me alone!) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " You can learn more about our campaign by following us on Instagram @votesmithermanmartinez and using our linktree to access the rest of our content! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " I remember my first Student Government meeting my 2nd year where I was a Legislative Aid for the Campus Life Committee. From there I grew to be a Senator for the College of Engineering and Applied Science Tribunal, and now my current position as a Senator-At-Large. Working alongside some amazing leaders has truly made me look at myself in a whole new light. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\nI know I am ready to take this position in stride and create a UC where there are resources and opportunities for every student to be a #BolderBearcat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\nOur campaign is really about looking at what we originally thought was possible, and then taking it further to create a Bolder UC.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\nLearn more about our campaign by following us on instagram @votesmithermanmartinez and use the linktree to see what we have so far!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\nWe have a long way to go on the Bolder Bearcats campaign trail so make sure to keep up to see what we have to offer!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media(min-width:768px){\r\n    .intro[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        padding-top: 60px;\r\n}\r\n}\r\n\r\n\r\n\r\n.intro-2-img[_ngcontent-%COMP%]{\r\n    order: 2;\r\n}\r\n\r\n\r\n\r\n.intro-2-write[_ngcontent-%COMP%]{\r\n    order: 1;\r\n}\r\n\r\n\r\n\r\n.intro-1[_ngcontent-%COMP%]{\r\n    flex-basis: 50%;\r\n}\r\n\r\n\r\n\r\n.intro-2[_ngcontent-%COMP%]{\r\n    flex-basis: 50%;\r\n}\r\n\r\n\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 13pt;\r\n}\r\n\r\n\r\n\r\nH3[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 600;\r\n    color: #26517C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGVBQWU7UUFDZixpQkFBaUI7QUFDekI7QUFDQTs7OztBQUlBO0lBQ0ksUUFBUTtBQUNaOzs7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7Ozs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7Ozs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7Ozs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7OztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOzs7O0FBSUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoibWVldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAuaW50cm97XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxufVxyXG5cclxuXHJcblxyXG4uaW50cm8tMi1pbWd7XHJcbiAgICBvcmRlcjogMjtcclxufVxyXG5cclxuLmludHJvLTItd3JpdGV7XHJcbiAgICBvcmRlcjogMTtcclxufVxyXG5cclxuLmludHJvLTF7XHJcbiAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbn1cclxuLmludHJvLTJ7XHJcbiAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxufVxyXG5cclxuSDN7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhwdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5oMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMyNjUxN0M7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meet',
                templateUrl: './meet.component.html',
                styleUrls: ['./meet.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 0, consts: [[1, "container"], [1, "row", "justify-content-md-center"], [1, "social-media", "ml-5"], ["href", "https://www.facebook.com/profile.php?id=100077598290323", "target", "_blank", "rel", "noopener noreferrer"], ["height", "50px", "width", "50px", "src", "../../assets/Social Media/iconfinder_Rounded_Facebook_svg_5282541.png", "alt", ""], [1, "social-media"], ["href", "https://www.instagram.com/votesmithermanmartinez/", "target", "_blank", "rel", "noopener noreferrer"], ["height", "50px", "width", "50px", "src", "../../assets/Social Media/iconfinder_Rounded_Instagram_svg_5282544.png", "alt", ""], ["href", "https://twitter.com/SmitherMartinez", "target", "_blank", "rel", "noopener noreferrer"], ["height", "50px", "width", "50px", "src", "../../assets/Social Media/iconfinder_Rounded_Twitter5_svg_5282551.png", "alt", ""], ["href", " https://linktr.ee/SmitherMartinez", "target", "_blank", "rel", "noopener noreferrer"], ["height", "50px", "width", "50px", "src", "../../assets/Social Media/185087_link_icon.png", "alt", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]{\r\n    background-color: #26517C;\r\n    margin-top: 10px;\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    margin-top: 1.1rem;\r\n    margin-bottom: 1.1rem;\r\n    margin-right: 1.1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NTE3QztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbmltZ3tcclxuICAgIG1hcmdpbi10b3A6IDEuMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lDaF":
/*!************************************************!*\
  !*** ./src/app/platform/platform.component.ts ***!
  \************************************************/
/*! exports provided: PlatformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformComponent", function() { return PlatformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform.service */ "B15d");
/* harmony import */ var _platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform-icons/platform-icons.component */ "72M+");
/* harmony import */ var _platform_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./platform-list.component */ "rPbr");





class PlatformComponent {
    constructor(platformService) {
        this.platformService = platformService;
        this.Platform = "Platform";
        this.showContentToggle = false;
    }
    ngOnInit() {
        this.campusExp = this.platformService.getCampusExperience();
        this.action = this.platformService.getAction();
        this.sustainability = this.platformService.getSustainability();
        this.varsity = this.platformService.getVarsity();
        this.yourcampus = this.platformService.getYourCampus();
    }
    onHeaderClick() {
        this.showContentToggle = !this.showContentToggle;
    }
}
PlatformComponent.ɵfac = function PlatformComponent_Factory(t) { return new (t || PlatformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"])); };
PlatformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlatformComponent, selectors: [["app-platform"]], decls: 16, vars: 12, consts: [[3, "description", "lastPlat"], [1, "text-center", "p-3"], [3, "platforms", "specialCase"]], template: function PlatformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "platform-icons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "H2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "UC Infrastructure Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "platform-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "H2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Equity and Inclusion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "platform-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "H2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Community Engagement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "platform-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "H2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Student Government Reforms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "platform-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "H2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Commitments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "platform-list", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", false)("lastPlat", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("platforms", ctx.campusExp)("specialCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("platforms", ctx.action)("specialCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("platforms", ctx.sustainability)("specialCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("platforms", ctx.varsity)("specialCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("platforms", ctx.yourcampus)("specialCase", true);
    } }, directives: [_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_2__["PlatformIconsComponent"], _platform_list_component__WEBPACK_IMPORTED_MODULE_3__["PlatformListComponent"]], styles: [".platform-icons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.box1[_ngcontent-%COMP%]{\r\n    flex-basis: 20%;\r\n    \r\n    border-width: 2px;\r\n    text-align: center;\r\n}\r\n\r\nH2[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRmb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmO2dDQUM0QjtJQUM1QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwbGF0Zm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXRmb3JtLWljb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJveDF7XHJcbiAgICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjb3Juc2lsaztcclxuICAgIGJvcmRlcjogMnB4IGNyaW1zb24gc29saWQ7ICovXHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbkgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-platform',
                templateUrl: './platform.component.html',
                styleUrls: ['./platform.component.css']
            }]
    }], function () { return [{ type: _platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"] }]; }, null); })();


/***/ }),

/***/ "mGeP":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teams.service */ "ngQW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0, a1, a2, a3) { return { "lcherry": a0, "yellow": a1, "dcherry": a2, "cherry": a3 }; };
function TeamComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TeamComponent_div_5_Template_img_mouseenter_2_listener() { const member_r1 = ctx.$implicit; return member_r1.address = member_r1.address.Hover; })("mouseleave", function TeamComponent_div_5_Template_img_mouseleave_2_listener() { const member_r1 = ctx.$implicit; return member_r1.address = member_r1.addressHoverOut; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", member_r1.address || member_r1.addressHover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c0, i_r2 % 4 === 0, i_r2 % 4 === 1, i_r2 % 4 === 2, i_r2 % 4 === 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.name);
} }
class TeamComponent {
    constructor(teamsService) {
        this.teamsService = teamsService;
    }
    ngOnInit() {
        this.members = this.teamsService.getMembers();
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 7, vars: 3, consts: [[1, "mt-2", "p-2"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "main-cont"], ["alt", "", 1, "img-fluid", "main-img", 3, "src", "ngClass", "mouseenter", "mouseleave"], [1, "text-center"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Meet the team behind ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "#IsaacYulia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamComponent_div_5_Template, 5, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.members));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["p[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 11pt;\r\n}\r\n\r\nH2[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n    text-align: center;\r\n}\r\n\r\nH2[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\r\n    color: #26517C\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    box-shadow: 5px 5px 3px grey;\r\n}\r\n\r\n.yellow[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-width: 15px;\r\n    border-image: url('border_bb0f55.png') 30 round;\r\n}\r\n\r\n.lcherry[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-width: 15px;\r\n    border-image: url('border_ffd151.png') 30 round;\r\n}\r\n\r\n.dcherry[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-width: 15px;\r\n    border-image: url('border_591937.png') 30 round;\r\n}\r\n\r\n.cherry[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-width: 15px;\r\n    border-image: url('border_8e2857.png') 30 round;\r\n}\r\n\r\n\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBSWxCLCtDQUEwRTtBQUM5RTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFJbEIsK0NBQTBFO0FBQzlFOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUlsQiwrQ0FBMEU7QUFDOUU7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBSWxCLCtDQUEwRTtBQUM5RTs7QUFFQTs7O0tBR0s7O0FBS0w7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InRlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxufVxyXG5cclxuSDJ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhwdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuSDIgPnNwYW57XHJcbiAgICBjb2xvcjogIzI2NTE3Q1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IGdyZXk7XHJcbn1cclxuXHJcbi55ZWxsb3d7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xyXG4gICAgLW1vei1ib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZWFtLXBpY3R1cmVzL2JvcmRlcl9iYjBmNTUucG5nXCIpIDMwIHJvdW5kO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZWFtLXBpY3R1cmVzL2JvcmRlcl9iYjBmNTUucG5nXCIpIDMwIHJvdW5kO1xyXG4gICAgLW8tYm9yZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVhbS1waWN0dXJlcy9ib3JkZXJfYmIwZjU1LnBuZ1wiKSAzMCByb3VuZDtcclxuICAgIGJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyX2JiMGY1NS5wbmdcIikgMzAgcm91bmQ7XHJcbn1cclxuXHJcbi5sY2hlcnJ5e1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMTVweDtcclxuICAgIC1tb3otYm9yZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVhbS1waWN0dXJlcy9ib3JkZXJfZmZkMTUxLnBuZ1wiKSAzMCByb3VuZDtcclxuICAgIC13ZWJraXQtYm9yZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVhbS1waWN0dXJlcy9ib3JkZXJfZmZkMTUxLnBuZ1wiKSAzMCByb3VuZDtcclxuICAgIC1vLWJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyX2ZmZDE1MS5wbmdcIikgMzAgcm91bmQ7XHJcbiAgICBib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZWFtLXBpY3R1cmVzL2JvcmRlcl9mZmQxNTEucG5nXCIpIDMwIHJvdW5kO1xyXG59XHJcblxyXG4uZGNoZXJyeXtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XHJcbiAgICAtbW96LWJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyXzU5MTkzNy5wbmdcIikgMzAgcm91bmQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyXzU5MTkzNy5wbmdcIikgMzAgcm91bmQ7XHJcbiAgICAtby1ib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZWFtLXBpY3R1cmVzL2JvcmRlcl81OTE5MzcucG5nXCIpIDMwIHJvdW5kO1xyXG4gICAgYm9yZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVhbS1waWN0dXJlcy9ib3JkZXJfNTkxOTM3LnBuZ1wiKSAzMCByb3VuZDtcclxufVxyXG5cclxuLmNoZXJyeXtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XHJcbiAgICAtbW96LWJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyXzhlMjg1Ny5wbmdcIikgMzAgcm91bmQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyXzhlMjg1Ny5wbmdcIikgMzAgcm91bmQ7XHJcbiAgICAtby1ib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZWFtLXBpY3R1cmVzL2JvcmRlcl84ZTI4NTcucG5nXCIpIDMwIHJvdW5kO1xyXG4gICAgYm9yZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVhbS1waWN0dXJlcy9ib3JkZXJfOGUyODU3LnBuZ1wiKSAzMCByb3VuZDtcclxufVxyXG5cclxuLyogaW1ne1xyXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVhbS1waWN0dXJlcy9ib3JkZXJfYmIwZjU1LnBuZ1wiKSAzMCByb3VuZDtcclxufSAgICovXHJcblxyXG5cclxuXHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.css']
            }]
    }], function () { return [{ type: _teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"] }]; }, null); })();


/***/ }),

/***/ "ngQW":
/*!***************************************!*\
  !*** ./src/app/team/teams.service.ts ***!
  \***************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class TeamsService {
    constructor() { }
    getMembers() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(TEAMS); subject.complete(); }, 100);
        return subject;
        console.log();
    }
}
TeamsService.ɵfac = function TeamsService_Factory(t) { return new (t || TeamsService)(); };
TeamsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamsService, factory: TeamsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
const TEAMS = [
    {
        name: "Josh Squirrell",
        address: "../../assets/team-pictures/Josh_Squirrell1.jpg",
        addressHover: "../../assets/team-pictures/Josh_Squirrell2.jpg",
        addressHoverOut: "../../assets/team-pictures/Josh_Squirrell1.jpg"
    },
    {
        name: "Faalik Zahra",
        address: "../../assets/team-pictures/Faalik_Zahra1.jpg",
        addressHover: "../../assets/team-pictures/Faalik_Zahra2.jpg",
        addressHoverOut: "../../assets/team-pictures/Faalik_Zahra1.jpg"
    },
    {
        name: "Alex van Haaren",
        address: "../../assets/team-pictures/Alex_Van1.jpg",
        addressHover: "../../assets/team-pictures/Alex_Van2.jpg",
        addressHoverOut: "../../assets/team-pictures/Alex_Van1.jpg"
    },
    {
        name: "Lance Entsuah",
        address: "../../assets/team-pictures/Lance_Entsuah1.jpg",
        addressHover: "../../assets/team-pictures/Lance_Entsuah2.jpg",
        addressHoverOut: "../../assets/team-pictures/Lance_Entsuah1.jpg"
    },
    {
        name: "Inna Risma",
        address: "../../assets/team-pictures/Inna_Risma1.jpg",
        addressHover: "../../assets/team-pictures/Inna_Risma2.jpg",
        addressHoverOut: "../../assets/team-pictures/Inna_Risma1.jpg"
    },
    {
        name: "Kiley Gawronski",
        address: "../../assets/team-pictures/Kiley_ Gawronski1.jpg",
        addressHover: "../../assets/team-pictures/Kiley_ Gawronski2.jpg",
        addressHoverOut: "../../assets/team-pictures/Kiley_ Gawronski1.jpg"
    },
    {
        name: "Vidushi Shrivastava",
        address: "../../assets/team-pictures/Vidushi1.jpg",
        addressHover: "../../assets/team-pictures/Vidushi2.jpg",
        addressHoverOut: "../../assets/team-pictures/Vidushi1.jpg"
    },
    {
        name: "Jash Gada",
        address: "../../assets/team-pictures/Jash_Gada1.jpg",
        addressHover: "../../assets/team-pictures/Jash_Gada2.jpg",
        addressHoverOut: "../../assets/team-pictures/Jash_Gada1.jpg"
    },
    {
        name: "Olivia Kentner",
        address: "../../assets/team-pictures/Via_Kentner.jpg",
        addressHover: "../../assets/team-pictures/Via_Kentner2.jpg",
        addressHoverOut: "../../assets/team-pictures/Via_Kentner.jpg"
    },
    {
        name: "Mahathi Venkatesh",
        address: "../../assets/team-pictures/Mahathi1.jpg",
        addressHover: "../../assets/team-pictures/Mahathi2.jpg",
        addressHoverOut: "../../assets/team-pictures/Mahathi1.jpg"
    },
    {
        name: "Brian Bartolovich",
        address: "../../assets/team-pictures/Brian_Bartolovich1.jpg",
        addressHover: "../../assets/team-pictures/Brian_Bartolovich2.jpg",
        addressHoverOut: "../../assets/team-pictures/Brian_Bartolovich1.jpg"
    },
    {
        name: "Romond Duval",
        address: "../../assets/team-pictures/Romond1.jpg",
        addressHover: "../../assets/team-pictures/Romond2.jpg",
        addressHoverOut: "../../assets/team-pictures/Romond1.jpg"
    },
    {
        name: "Olivia Eilerman",
        address: "../../assets/team-pictures/Olivia_Eilerman1-min.jpg",
        addressHover: "../../assets/team-pictures/Olivia_Eilerman2-min.jpg",
        addressHoverOut: "../../assets/team-pictures/Olivia_Eilerman1-min.jpg"
    },
    {
        name: "Brad Weidner",
        address: "../../assets/team-pictures/Brad_Weidner1.jpg",
        addressHover: "../../assets/team-pictures/Brad_Weidner2.jpg",
        addressHoverOut: "../../assets/team-pictures/Brad_Weidner1.jpg"
    },
    {
        name: "Quincy Allfree",
        address: "../../assets/team-pictures/Quincy_Allfree1-min.jpg",
        addressHover: "../../assets/team-pictures/Quincy_Allfree2-min.jpg",
        addressHoverOut: "../../assets/team-pictures/Quincy_Allfree1-min.jpg"
    },
    {
        name: "Shannon Williams",
        address: "../../assets/team-pictures/Shannon_Williams1.jpg",
        addressHover: "../../assets/team-pictures/Shannon_Williams2.jpg",
        addressHoverOut: "../../assets/team-pictures/Shannon_Williams1.jpg"
    },
    {
        name: "Brady Allen",
        address: "../../assets/team-pictures/Brady_Allen1.jpg",
        addressHover: "../../assets/team-pictures/Brady_Allen2.jpg",
        addressHoverOut: "../../assets/team-pictures/Brady_Allen1.jpg"
    },
    {
        name: "Shivani Selvam",
        address: "../../assets/team-pictures/Shivani1.jpg",
        addressHover: "../../assets/team-pictures/Shivani2.jpg",
        addressHoverOut: "../../assets/team-pictures/Shivani1.jpg"
    },
    {
        name: "Yash Srivastava",
        address: "../../assets/team-pictures/Yash1.jpg",
        addressHover: "../../assets/team-pictures/Yash2.jpg",
        addressHoverOut: "../../assets/team-pictures/Yash1.jpg"
    },
    {
        name: "Fatima Khan",
        address: "../../assets/team-pictures/Fatima1.jpg",
        addressHover: "../../assets/team-pictures/Fatima2.jpg",
        addressHoverOut: "../../assets/team-pictures/Fatima1.jpg"
    },
    {
        name: "Claire Leupp",
        address: "../../assets/team-pictures/Claire_leupp1.jpg",
        addressHover: "../../assets/team-pictures/Claire_Leupp2.jpg",
        addressHoverOut: "../../assets/team-pictures/Claire_leupp1.jpg"
    },
    {
        name: "Cassidy Lakes",
        address: "../../assets/team-pictures/Cassidy_Lakes1-min.jpg",
        addressHover: "../../assets/team-pictures/Cassidy_Lakes2-min.jpg",
        addressHoverOut: "../../assets/team-pictures/Cassidy_Lakes1-min.jpg"
    },
    {
        name: "Chris Stepak",
        address: "../../assets/team-pictures/Chris_Stepak1.jpg",
        addressHover: "../../assets/team-pictures/Chris_Stepak2.jpg",
        addressHoverOut: "../../assets/team-pictures/Chris_Stepak1.jpg"
    },
    {
        name: "Tessa Ervin",
        address: "../../assets/team-pictures/Tessa_Ervin1.jpg",
        addressHover: "../../assets/team-pictures/Tessa_Ervin2.jpg",
        addressHoverOut: "../../assets/team-pictures/Tessa_Ervin1.jpg"
    },
    {
        name: "Max Hogan",
        address: "../../assets/team-pictures/Max_Hogan1.jpg",
        addressHover: "../../assets/team-pictures/Max_Hogan2.jpg",
        addressHoverOut: "../../assets/team-pictures/Max_Hogan1.jpg"
    },
    {
        name: "Sarah Sloan",
        address: "../../assets/team-pictures/Sarah_Sloan1.jpg",
        addressHover: "../../assets/team-pictures/Sarah_Sloan2.jpg",
        addressHoverOut: "../../assets/team-pictures/Sarah_Sloan1.jpg"
    },
    {
        name: "Simhya Karthikeyan",
        address: "../../assets/team-pictures/Simhya1.jpg",
        addressHover: "../../assets/team-pictures/Simhya2.jpg",
        addressHoverOut: "../../assets/team-pictures/Simhya1.jpg"
    },
    {
        name: "Taylor Richardson",
        address: "../../assets/team-pictures/Taylor_Richardson1.jpg",
        addressHover: "../../assets/team-pictures/Taylor_Richardson2.jpg",
        addressHoverOut: "../../assets/team-pictures/Taylor_Richardson1.jpg"
    },
];


/***/ }),

/***/ "oqwT":
/*!********************************************************!*\
  !*** ./src/app/platform/collapsible-well.component.ts ***!
  \********************************************************/
/*! exports provided: CollapsibleWellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return CollapsibleWellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CollapsibleWellComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "visible"]);
} }
const _c0 = ["*"];
class CollapsibleWellComponent {
    constructor() {
        this.visible = false;
    }
    ngOnInit() {
    }
    toggleContent() {
        this.visible = !this.visible;
    }
    getBackgroundColor() {
        return this.backgroundColor;
    }
}
CollapsibleWellComponent.ɵfac = function CollapsibleWellComponent_Factory(t) { return new (t || CollapsibleWellComponent)(); };
CollapsibleWellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollapsibleWellComponent, selectors: [["collapsible-well"]], inputs: { title: "title", backgroundColor: "backgroundColor" }, ngContentSelectors: _c0, decls: 4, vars: 4, consts: [[1, "well", "pointable", 3, "click"], [1, "well-title", "p-2", 3, "ngClass"], [4, "ngIf"]], template: function CollapsibleWellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollapsibleWellComponent_Template_div_click_0_listener() { return ctx.toggleContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CollapsibleWellComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.visible ? "-" : "+", " ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["p[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 11pt;\r\n}\r\n\r\nH3[_ngcontent-%COMP%]{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 600;\r\n    color: white;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n\r\n}\r\n\r\n.cherry[_ngcontent-%COMP%]{\r\n    background-color: #2072AA;\r\n}\r\n\r\n.yellowish[_ngcontent-%COMP%]{\r\n    background-color: #26517C;\r\n}\r\n\r\n.darkmaroon[_ngcontent-%COMP%]{\r\n    background-color: #2072AA;\r\n}\r\n\r\n.isthischerry[_ngcontent-%COMP%]{\r\n    background-color: #F2AE03;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNpYmxlLXdlbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBaUI7WUFBakIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJjb2xsYXBzaWJsZS13ZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDExcHQ7XHJcbn1cclxuXHJcbkgze1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5jaGVycnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA3MkFBO1xyXG59XHJcblxyXG4ueWVsbG93aXNoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NTE3QztcclxufVxyXG5cclxuLmRhcmttYXJvb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA3MkFBO1xyXG59XHJcblxyXG4uaXN0aGlzY2hlcnJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyQUUwMztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollapsibleWellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'collapsible-well',
                templateUrl: './collapsible-well.component.html',
                styleUrls: ['./collapsible-well.component.css']
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "rPbr":
/*!*****************************************************!*\
  !*** ./src/app/platform/platform-list.component.ts ***!
  \*****************************************************/
/*! exports provided: PlatformListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformListComponent", function() { return PlatformListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _collapsible_well_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapsible-well.component */ "oqwT");




function PlatformListComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "What is this?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformListComponent_div_0_h4_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Who does this impact?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformListComponent_div_0_h4_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "What is our plan?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "collapsible-well", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlatformListComponent_div_0_h4_3_Template, 2, 0, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlatformListComponent_div_0_h4_6_Template, 2, 0, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlatformListComponent_div_0_h4_9_Template, 2, 0, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", platform_r1.name)("backgroundColor", platform_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.specialCase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](platform_r1.info);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.specialCase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](platform_r1.impact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.specialCase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](platform_r1.plan);
} }
class PlatformListComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PlatformListComponent.ɵfac = function PlatformListComponent_Factory(t) { return new (t || PlatformListComponent)(); };
PlatformListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlatformListComponent, selectors: [["platform-list"]], inputs: { platforms: "platforms", specialCase: "specialCase" }, decls: 2, vars: 3, consts: [[4, "ngFor", "ngForOf"], [3, "title", "backgroundColor"], ["class", "mt-1", 4, "ngIf"], [2, "white-space", "pre-line"], [1, "mt-1"]], template: function PlatformListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlatformListComponent_div_0_Template, 12, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.platforms));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _collapsible_well_component__WEBPACK_IMPORTED_MODULE_2__["CollapsibleWellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'platform-list',
                templateUrl: './platform-list.component.html'
            }]
    }], function () { return []; }, { platforms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], specialCase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "s+wa":
/*!*************************************!*\
  !*** ./src/app/route-animations.ts ***!
  \*************************************/
/*! exports provided: fader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter,:leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ], { optional: true }),
    ])
]);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campus-support/campus-support.component */ "PhBf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _meet_meet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meet/meet.component */ "dEjQ");
/* harmony import */ var _platform_platform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./platform/platform.component */ "lDaF");
/* harmony import */ var _submit_ideas_submit_ideas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit-ideas/submit-ideas.component */ "7rov");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team/team.component */ "mGeP");










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'meet', component: _meet_meet_component__WEBPACK_IMPORTED_MODULE_4__["MeetComponent"] },
    { path: 'campus-support', component: _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_2__["CampusSupportComponent"] },
    { path: 'platform', component: _platform_platform_component__WEBPACK_IMPORTED_MODULE_5__["PlatformComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"] },
    { path: 'ideas', component: _submit_ideas_submit_ideas_component__WEBPACK_IMPORTED_MODULE_6__["SubmitIdeasComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main.js.map