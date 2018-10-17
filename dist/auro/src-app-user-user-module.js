(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-user-user-module"],{

/***/ "./src/app/user/user-routing.ts":
/*!**************************************!*\
  !*** ./src/app/user/user-routing.ts ***!
  \**************************************/
/*! exports provided: userRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoute", function() { return userRoute; });
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");

var userRoute = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"]
    }
];


/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1,h2,h3,h4,h5,h6{\n   margin: 0;\n }\n.card{\n padding: 20px;\n color: white;\n border-radius: 1px;\n width: 100%;\n}\n.card-1{\nbackground-color: darkblue;\n}\n.card-2{\n background-color: darkcyan;\n}\n.card-3{\n  background-color: grey;\n}\n.card-title{\n font-weight: 500;\n font-size: 36px;\n}\n.card-text{\n font-size: 24px;\n height: 100px;\n}\n.card-text-sub{\n\n font-size: 18px;\n font-weight: normal;\n}\n.arrow{\n position: relative;\n}\n.angle-icon{\n position: absolute;\n right: -10px;\n top: 80px;\n font-size: 50px;\n border-radius: 100%;\n background-color: lightgray;\npadding: 10px 35px;\n}\n.col-pd > .col-md-4{\n /*padding-right: 4px;\n padding-left: 4px;*/\n}\n/* article css start */\n*{\n box-sizing: border-box;\n}\n.title-gray{\n\n font-weight: normal;\n}\n.scroll-area{\n border: 2px solid #f2f2f2;\n padding: 10px;\n}\n/*.scrollspy{\n max-height: 350px;\n overflow-y:scroll;\n}*/\n.article > span {\n  display: block;\n}\n.article > span {\n padding: 15px 15px 25px;\n margin: 10px;\n\n}\n.article:hover > span{\n border-radius: 10px;\n border: none;\n background-color: #ccc;\n cursor: pointer;\n}\n.article-title{\n color: dodgerblue;\n font-weight: bold;\n font-size: 19px;\n width: 100%;\n position: relative;\n}\n.article-text{\n font-size: 18px;\n color: black;\n width: 95%;\n position: relative;\n}\n.article-text div{\n position: absolute;\n font-size: 14px;\n right: -65px;\n bottom: -10px;\n}\n.article-text .d-none button{\n margin: 3px;\n font-size: 10px;\n border-radius: 5px;\n outline-style: none;\n box-shadow: none;\n cursor: pointer;\n}\n.icon-circle{\n text-align: center;\n background-color:#f2f2f2;\n border-radius: 100%;\n padding: 5px 15px;\n position: relative;\n top: -45px;\n left: -50px;\n}\n.icon-circle_a{\ncolor:white;\nbackground-color:#3771dd;\nfont-size: 14px;\nposition: absolute;\ntop: 0;\nright: -55px;\nborder-radius: 100%;\nwidth: 34px;\nheight: 34px;\ntext-align: center;\nvertical-align: middle;\ndisplay: inline-block;\npadding: 0;\n}\n.icon-circle_a i {\n  vertical-align: middle;\n  display: inline-block;\n  padding: 0;\n  line-height: 34px;\n}\n.article-icon {\n background: #f2f2f2;\n padding: 10px 15px;\n border-radius: 10px;\n position: relative;\n left: -45px;\n}\n.article-icon > a{\n padding-left: 15px;\n}\n.article:hover .icon-circle_a{\n color: black ;\n background-color: #ccc;\n\n}\n.article:hover .d-none {\n display: inline-block !important;\n}\n.modal-content{\n width: 811px;\n   margin-left: -141px;\n}\n/* pop up css */\n.modal-backdrop {\nposition: initial !important;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;\nz-index: 1040;\nbackground-color: #000 !important;\n}\n.switch {\n  position: relative;\n  display: block;\n  vertical-align: top;\n  width: 100px;\n  height: 30px;\n  padding: 3px;\n  margin: 0 10px 10px 0;\n  background: linear-gradient(to bottom, #eeeeee, #FFFFFF 25px);\n  background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px);\n  border-radius: 18px;\n  box-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n}\n/*.switch-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}*/\n.switch-label {\n  position: relative;\n  display: block;\n  height: inherit;\n  font-size: 10px;\n  text-transform: uppercase;\n  background: #eceeef;\n  border-radius: inherit;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15);\n}\n.switch-label:before, .switch-label:after {\n  position: absolute;\n  top: 50%;\n  margin-top: -.5em;\n  line-height: 1;\n  transition: inherit;\n}\n.switch-label:before {\n  content: attr(data-off);\n  right: 11px;\n  color: #aaaaaa;\n  text-shadow: 0 1px rgba(255, 255, 255, 0.5);\n}\n.switch-label:after {\n  content: attr(data-on);\n  left: 11px;\n  color: #FFFFFF;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.2);\n  opacity: 0;\n}\n.switch-input:checked ~ .switch-label {\n  background: blue;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 0 3px rgba(0, 0, 0, 0.2);\n}\n.switch-input:checked ~ .switch-label:before {\n  opacity: 0;\n}\n.switch-input:checked ~ .switch-label:after {\n  opacity: 1;\n}\n.switch-handle {\n  position: absolute;\n  top: 2px;\n  left: 4px;\n  width: 25px;\n  height: 25px;\n  background: linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0);\n  background-image: -webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0);\n  border-radius: 100%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n.switch-handle:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -6px 0 0 -6px;\n  width: 12px;\n  height: 12px;\n  background: linear-gradient(to bottom, #eeeeee, #FFFFFF);\n  background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);\n  border-radius: 6px;\n  box-shadow: inset 0 1px rgba(0, 0, 0, 0.02);\n}\n.switch-input:checked ~ .switch-handle {\n  left: 52px;\n  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n/* Transition\n========================== */\n.switch-label, .switch-handle {\n  transition: All 0.3s ease;\n  -webkit-transition: All 0.3s ease;\n  -moz-transition: All 0.3s ease;\n  -o-transition: All 0.3s ease;\n}\n.alertmodal {\n    display: none;\n    /* Hidden by default */\n    position: fixed;\n    /* Stay in place */\n    z-index: 1;\n    /* Sit on top */\n    padding-top: 100px;\n    /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%;\n    /* Full width */\n    height: 100%;\n    /* Full height */\n    overflow: auto;\n    /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0);\n    /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4);\n    /* Black w/ opacity */\n}\n.modal {\n  overflow-y: scroll;\n\n}\n.modal:after {\n  content: \"\";\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.7);\n}\n.modal-content {\n  position: relative;\n  z-index: 2;\n}\n.pt-2 {\n  position: absolute;\n  bottom: -35px !important;\n  right: 0;\n}\n.container.mt-2 .row.pull-right {\n  display: none;\n}\n.modal-dialog {\n  z-index: 9;\n}\n.clearfix {\n  position: relative;\n}\n.pos-block {\n  position: absolute;\n  left: auto;\n  right: 3px;\n  top: -4px;\n  display: inline-block;\n  width: 34px;\n  height: 34px;\n  border-radius: 100%;\n  text-align: center;\n}\nh5.mt-2.mb-2 {\n  width: calc(100% - 40px);\n}\n.card-1 {\n  position: relative;\n}\n.card-1:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 12px solid transparent;\n  border-right: 12px solid transparent;\n  border-top: 16px solid darkblue;\n  position: absolute;\n  bottom: -17px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.pos-block i {\n  vertical-align: middle;\n}\n.toggle-group {\n    position: absolute;\n    width: 200%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    transition: left 0.35s;\n    -webkit-transition: left 0.35s;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n}\n.toggle-on {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 50%;\n    margin: 0;\n    border: 0;\n    border-radius: 0;\n}\n.toggle-off {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    right: 0;\n    margin: 0;\n    border: 0;\n    border-radius: 0;\n}\n.toggle-off.btn {\n    padding-left: 24px;\n}\n.toggle-handle {\n    position: relative;\n    margin: 0 auto;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    height: 100%;\n    width: 0px;\n    border-width: 0 1px;\n}\n.toggle-handle {\n    border-radius: 20px;\n}\n.switch input + .toggle-group {\n    left: -100%;\n}\n.toggle-on.btn {\n    padding-right: 24px;\n}\n.toggle-off.btn {\n    padding-left: 24px;\n}\n.switch {\n  width: 86px;\n  height: 32px;\n  position: relative;\n  overflow: hidden;\n  border: 1px solid transparent;\n  background-image: none;\n  background-color: transparent;\n  padding: 0;\n}\n.switch input {\n  position: absolute;\n  left: -99999px;\n  top: -9999px;\n}\n/*#basemodal form.tab-content #base-profile > .row:nth-child(3),\n#triagemodal form.tab-content #base-profile > .row:nth-child(3) {\n  display: none;\n}*/\n.label-small {\n  display: inline-block;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  background: transparent;\n  box-shadow: none;\n  margin: 0 3px;\n}"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\nbdColor=\"rgba(51,51,51,0.8)\"\n  size=\"default\"\n  color=\"#fff\"\n  type=\"ball-clip-rotate\">\n <p style=\"font-size: 20px; color: white\">Loading...</p>\n  \n</ngx-spinner>\n<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"row col-pd\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"card card-1\">\n                        <div class=\"card-body\">\n                            <h2 class=\"card-title\">{{reviewdataValue}}</h2>\n                            <h4 class=\"card-text\">For Review</h4>\n                            <div class=\"card-text-sub\">\n                                    Weekly\n                                </div>\n                            <div class=\"row card-bottom\">\n                                <div class=\"col-md-8\">08 - 13 OCT</div>\n                                <div class=\"col-md-4\">PubMed</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n    </div>\n</div> \n<div class=\"container mt-4\">\n    <div class=\"clearfix pt-2 pb-2\">\n     \n    </div>\n    <div class=\"\">\n        <div class=\"scroll-area\">\n            <div class=\"scrollspy-removed\" >\n                <article class=\"article\" *ngFor=\"let x of data; let i= index\" >\n                   <span *ngIf=\"x.deleted!=='yes'\"> \n                    <div class=\"article-title\" >\n                        <p class=\"mb-0\">{{x.result_title}}</p>\n                      \n                    </div>\n                    <div class=\"article-text\">\n                            <p>{{x.result_abstract.length>350?x.result_abstract.substring(0,339).concat(\"...\"):x.result_abstract}}</p>\n                                <div class=\"pull-right d-none pt-2\">\n                                  <!-- data-target=\"#myModal\"  -->\n                                  <small  *ngIf=\"x.status=='saved as drafted'\"   class=\"label-small open-modals\">Saved as Draft</small>\n                                  <small  *ngIf=\"x.status !=='submit for review' && x.status !=='saved as drafted' \" (click)=\"deleteRecord(x.id)\" class=\"label-small\">Sumitted for triage</small>\n                                  <button type=\"button\" class=\"btn btn-primary btn-sm open-modals\"  data-target=\"#basemodal\" (click)=\"singleDaata(x)\" >Full View</button>\n\n                                  \n                                </div>                             \n                            \n                        </div>\n                      </span>\n\n                </article>\n                  \n            </div>\n            \n        </div>\n    </div>\n</div>\n<div class=\"container mt-2\">\n    <div class=\"row pull-right\">\n        <div class =\"article-icon\" >\n            <a href=\"#\"><i class=\"fa fa-download\"  style=\"color: black;\"></i></a>\n            <a href=\"#\" ><i class=\"fa fa-file-word-o\" aria-hidden=\"true\" style=\"color: blue\"></i></a>\n            <a href=\"#\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\" style=\"color:red\"></i></a>\n            <a href=\"#\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></a>\n        </div>\n    </div>\n\n</div>\n\n\n\n\n<!-- my modal -->\n<div class=\"modal\" id=\"basemodal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n      \n        <!-- Modal Header -->\n        <div class=\"modal-header  bg-white\">\n           <h5 class=\"modal-title\"><b>{{modaltitle}} </b>\n  </h5>\n          <button type=\"button\" class=\"close\" (click)=\"closemodal()\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n    <strong>Author Information:</strong> {{authordata}}<br><br>\n          <strong class=\"text-primary\" style=\"font-size:18px;\">Abstract</strong>\n          <p>{{abstractdata}}</p>\n        <br>\n  \n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" href=\"#base-profile\" role=\"tab\" data-toggle=\"tab\">CheckList</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#base-buzz\" role=\"tab\" data-toggle=\"tab\">Comments</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#base-arti-req\" role=\"tab\" data-toggle=\"tab\">Full Article Request</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#base-tran\" role=\"tab\" data-toggle=\"tab\">Translation Request</a>\n          </li>\n        </ul>\n        <form [formGroup]=\"draftForm\" class=\"tab-content\" style=\"padding:30px;border: 1px solid #e8ecef;\">\n        \n          <div role=\"tabpanel\" class=\"tab-pane active\" id=\"base-profile\" aria-labelledby=\"base-profile\">\n  \n            <div class=\"row\">\n              <div class=\"col-md-3\">\n            <label> Does Drugs Belongs to Aurobindo</label>\n              </div>\n              <div class=\"col-md-4\">\n\n            <label class=\"\">\n                <input type=\"checkbox\" formControlName=\"belongstatus\"  [(ngModel)]=\"draftartData['belongstatus']\" [checked]=\"belongstatus\" (change)=\"belongs = !belongs\" class=\"switch-input\">\n               \n              </label>\n              \n            </div>\n               </div>\n               <div class=\"row\">\n                  <div class=\"col-md-3\">\n                <label> Country of authorization</label>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"contryauth\" [(ngModel)]=\"draftartData['contryauth']\" name=\"contryauth\" id=\"contryauth\" >\n                        </div>\n                </div>\n                   </div>\n\n\n <div class=\"row\">\n                  <div class=\"col-md-3\">\n                <label> id</label>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"id\" [(ngModel)]=\"draftartData['id']\" name=\"id\" id=\"id\" >\n                        </div>\n                </div>\n                   </div>\n\n\n\n                   <label class=\"text-primary\">Product</label>\n                   <div class=\"row\">\n                          <div class=\"col-md-3\">\n                        <label class=\"pl\"> Product Name</label>\n                          </div>\n                          <div class=\"col-md-4\">\n                              <div class=\"form-group\">\n                                  <input type=\"date\" class=\"form-control\" formControlName=\"Product_Approval_Date\" [(ngModel)]=\"draftartData['Product_Approval_Date']\" name=\"Product_Approval_Date\" id=\"Product_Approval_Date\">\n                                </div>\n                        </div>\n                           </div>\n                    \n                   <div class=\"row\">\n                      <div class=\"col-md-3\">\n                    <label class=\"pl\"> Launch Date</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                          <div class=\"form-group\">\n                              <input type=\"date\" class=\"form-control\" formControlName=\"Publication_Date\" [(ngModel)]=\"draftartData['Publication_Date']\" name=\"Publication_Date\" id=\"Publication_Date\">\n                            </div>\n                    </div>\n                       </div>\n                       <div class=\"row\">\n                          <div class=\"col-md-3\">\n                        <label class=\"pl\"> Approval Date</label>\n                          </div>\n                          <div class=\"col-md-4\">\n                              <div class=\"form-group\">\n                                  <input type=\"date\" class=\"form-control\" formControlName=\"Product_Approval_Date\" [(ngModel)]=\"draftartData['Product_Approval_Date']\" name=\"Product_Approval_Date\" id=\"Product_Approval_Date\">\n                                </div>\n                        </div>\n                           </div>\n                           <div class=\"row\">\n                              <div class=\"col-md-3\">\n                            <label class=\"pl\"> Withdrawn Date</label>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <div class=\"form-group\">\n                                      <input type=\"date\" class=\"form-control\" formControlName=\"Product_Withdrawn_Date\" [(ngModel)]=\"draftartData['Product_Withdrawn_Date']\" name=\"Product_Withdrawn_Date\" id=\"Product_Withdrawn_Date\">\n                                    </div>\n                            </div>\n                               </div>\n                             \n                                           <label class=\"text-primary\">Author Comments</label>\n                                           <div class=\"row\">\n                                              <div class=\"col-md-12\">\n                                                  <div class=\"form-group\">\n                                                      <textarea class=\"form-control\" rows=\"5\" formControlName=\"Author_Comments\" [(ngModel)]=\"draftartData['Author_Comments']\" name=\"Author_Comments\" id=\"Author_Comments\"></textarea>\n                                                    </div>\n                                            </div>\n                                               </div>\n                                               \n                                                   <div class=\"modal-footer\">\n                                                   \n                                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"articleondraft(draftartData)\">Save as Draft</button>\n                                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Clear</button>\n                                            \n                                                  </div>\n                                      </div>\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"base-buzz\" aria-labelledby=\"base-buzz\">\n              <input type=\"checkbox\" id=\"1\" name=\"rememberMe\"  >\n              <label for=\"1\" class=\"checkbox\"></label>  Interventional study<br><br>\n  \n              <input type=\"checkbox\" id=\"2\" name=\"rememberMe\"  >\n              <label for=\"2\" class=\"checkbox\"></label>  Non-Valid Case report with unidentifiable patient/unidentifiable report<br><br>\n  \n              <input type=\"checkbox\" id=\"3\" name=\"rememberMe\"  >\n              <label for=\"3\" class=\"checkbox\"></label> Valid Case report found for data basing<br><br>\n  \n              <input type=\"checkbox\" id=\"4\" name=\"rememberMe\"  >\n              <label for=\"4\" class=\"checkbox\"></label> Toxicology / in vitro study<br><br>\n  \n              <input type=\"checkbox\" id=\"5\" name=\"rememberMe\"  >\n              <label for=\"5\" class=\"checkbox\"></label> Animal Study<br><br>\n  \n              <input type=\"checkbox\" id=\"6\" name=\"rememberMe\"  >\n              <label for=\"6\" class=\"checkbox\"></label> Suspected substance or medicinal product missing<br><br>\n  \n              <input type=\"checkbox\" id=\"7\" name=\"rememberMe\"  >\n              <label for=\"7\" class=\"checkbox\"></label> Suspected adverse reaction missing<br><br>\n  \n              <input type=\"checkbox\" id=\"8\" name=\"rememberMe\"  >\n              <label for=\"8\" class=\"checkbox\"></label> Termination of pregnancy – no ADR information<br><br>\n  \n              <input type=\"checkbox\" id=\"9\" name=\"rememberMe\"  >\n              <label for=\"9\" class=\"checkbox\"></label>   Pregnancy – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"10\" name=\"rememberMe\"  >\n              <label for=\"10\" class=\"checkbox\"></label> Paediatric  Or Elderly – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"11\" name=\"rememberMe\"  >\n              <label for=\"11\" class=\"checkbox\"></label> Overdose, Abuse , Off-label use , Misuse , Medication error , Occupational  \n              exposure – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"12\" name=\"rememberMe\"  >\n              <label for=\"12\" class=\"checkbox\"></label> Quality defect, Falsified medicines – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"13\" name=\"rememberMe\"  >\n              <label for=\"13\" class=\"checkbox\"></label>  Company holds a marketing authorisation but has never commercialised the      \n              medicinal product<br><br>\n  \n              <input type=\"checkbox\" id=\"14\" name=\"rememberMe\"  >\n              <label for=\"14\" class=\"checkbox\"></label>  Potential PV case<br><br>\n  \n              <input type=\"checkbox\" id=\"15\" name=\"rememberMe\"  >\n              <label for=\"15\" class=\"checkbox\"></label>  Safety data found for aggregate reports<br><br>\n  \n              <input type=\"checkbox\" id=\"16\" name=\"rememberMe\"  >\n              <label for=\"16\" class=\"checkbox\"></label>  Safety data not found for Aurobindo products<br><br>\n  \n              <input type=\"checkbox\" id=\"17\" name=\"rememberMe\"  >\n              <label for=\"17\" class=\"checkbox\"></label>  Suspect drug not belongs to Aurobindo products<br><br>\n  \n              <input type=\"checkbox\" id=\"18\" name=\"rememberMe\"  >\n              <label for=\"18\" class=\"checkbox\"></label>  Drug used for treatment<br><br>\n  \n              <input type=\"checkbox\" id=\"19\" name=\"rememberMe\"  >\n              <label for=\"19\" class=\"checkbox\"></label>  Brand drug mentioned<br><br>\n  \n              <input type=\"checkbox\" id=\"20\" name=\"rememberMe\"  >\n              <label for=\"20\" class=\"checkbox\"></label>  No MA (Marketing Authorization) in the country of ADE occurrence<br><br>\n  \n              <input type=\"checkbox\" id=\"21\" name=\"rememberMe\"  >\n              <label for=\"21\" class=\"checkbox\"></label>  No MA (Marketing Authorization) at the time of Publication<br><br>\n  \n              <input type=\"checkbox\" id=\"22\" name=\"rememberMe\"  >\n              <label for=\"22\" class=\"checkbox\"></label>  No MA (Marketing Authorization) for formulation of suspect drug<br><br>\n  \n              <input type=\"checkbox\" id=\"23\" name=\"rememberMe\"  >\n              <label for=\"23\" class=\"checkbox\"></label>  Therapy and/or event end dates prior to the grant of the approval in the country  of ADE occurrence<br><br>\n  \n              <input type=\"checkbox\" id=\"24\" name=\"rememberMe\"  >\n              <label for=\"24\" class=\"checkbox\"></label>  Publication study<br><br>\n  \n              <input type=\"checkbox\" id=\"25\" name=\"rememberMe\">\n              <label for=\"25\" class=\"checkbox\"></label>  No search found<br><br>\n  \n              <input type=\"checkbox\" id=\"26\" name=\"rememberMe\"  >\n              <label for=\"26\" class=\"checkbox\"></label> Publication study not containing information of importance<br><br>\n              <input type=\"checkbox\" id=\"27\" name=\"rememberMe\"  >\n              \n              <label for=\"27\" class=\"checkbox\"></label> Safety communication<br><br>\n              <div class=\"modal-footer\">\n\n\n               <button type=\"button\" class=\"btn btn-primary\" (click)=\"articleontriage(draftartData)\" data-dismiss=\"modal\">Submit for Triage</button>\n               <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"articleondraft(draftartData)\">Save as Draft</button>\n               <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Clear</button>\n       \n             </div>\n          </div>\n          <div role=\"tabpanel\" class=\"tab-pane text-center\" id=\"base-arti-req\">\n          \t<strong>Work in Progress </strong>\n          </div>\n          <div role=\"tabpanel\" class=\"tab-pane text-center\" id=\"base-tran\">\n          \t<strong>Work in Progress </strong>\n          </div>\n        \n       </form>\n        </div>      \n      </div>\n    </div>\n  </div>\n\n<!-- end -->\n\n<div class=\"modal\" id=\"triagemodals\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n      \n        <!-- Modal Header -->\n        <div class=\"modal-header  bg-white\">\n           <h5 class=\"modal-title\"><b>{{modaltitle}} </b>\n  </h5>\n          <button type=\"button\" class=\"close\" (click)=\"closemodal()\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n    <strong>Author Information:</strong> {{authordata}}<br><br>\n          <strong class=\"text-primary\" style=\"font-size:18px;\">Abstract</strong>\n          <p>{{abstractdata}}</p>\n        <br>\n  \n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" href=\"#base-profile\" role=\"tab\" data-toggle=\"tab\">CheckList</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#base-buzz\" role=\"tab\" data-toggle=\"tab\">Comments</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#base-arti-req\" role=\"tab\" data-toggle=\"tab\">Full Article Request</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#base-tran\" role=\"tab\" data-toggle=\"tab\">Translation Request</a>\n          </li>\n        </ul>\n        <form [formGroup]=\"draftForm\"   class=\"tab-content\" style=\"padding:30px;border: 1px solid #e8ecef;\">\n        \n          <div role=\"tabpanel\" class=\"tab-pane active\" id=\"base-profile\">\n  \n            <div class=\"row\">\n              <div class=\"col-md-3\">\n            <label> Does Drugs Belongs to Aurobindo</label>\n              </div>\n              <div class=\"col-md-4\">\n\n            <label class=\"\">\n                <input type=\"checkbox\" formControlName=\"belongstatus\" [(ngModel)]=\"belongstatus\" [checked]=\"belongstatus\" (change)=\"belongs = !belongs\" class=\"switch-input\">\n                \n              </label>\n              \n            </div>\n               </div>\n               <div class=\"row\">\n                  <div class=\"col-md-3\">\n                <label> County of authorization</label>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"contryauth\" [(ngModel)]=\"draftartData['contryauth']\" name=\"contryauth\" id=\"contryauth\" readonly>\n                        </div>\n                </div>\n                   </div>\n\n\n               <div class=\"row\">\n                  <div class=\"col-md-3\">\n                <label> id</label>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"id\" [(ngModel)]=\"draftartData['id']\" name=\"id\" id=\"id\" >\n                        </div>\n                </div>\n                   </div>\n\n\n\n                   <label class=\"text-primary\">Product</label>\n                   <div class=\"row\">\n                          <div class=\"col-md-3\">\n                        <label class=\"pl\"> Product Name</label>\n                          </div>\n                          <div class=\"col-md-4\">\n                              <div class=\"form-group\">\n                                  <input type=\"date\" class=\"form-control\" formControlName=\"Product_Approval_Date\" [(ngModel)]=\"draftartData['Product_Approval_Date']\" name=\"Product_Approval_Date\" id=\"Product_Approval_Date\">\n                                </div>\n                        </div>\n                           </div>\n                    \n                   <div class=\"row\">\n                      <div class=\"col-md-3\">\n                    <label class=\"pl\"> Launch Date</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                          <div class=\"form-group\">\n                              <input type=\"date\" class=\"form-control\" formControlName=\"Publication_Date\" [(ngModel)]=\"draftartData['Publication_Date']\" name=\"Publication_Date\" id=\"Publication_Date\">\n                            </div>\n                    </div>\n                       </div>\n                       <div class=\"row\">\n                          <div class=\"col-md-3\">\n                        <label class=\"pl\"> Approval Date</label>\n                          </div>\n                          <div class=\"col-md-4\">\n                              <div class=\"form-group\">\n                                  <input type=\"date\" class=\"form-control\" formControlName=\"Product_Approval_Date\" [(ngModel)]=\"draftartData['Product_Approval_Date']\" name=\"Product_Approval_Date\" id=\"Product_Approval_Date\">\n                                </div>\n                        </div>\n                           </div>\n                           <div class=\"row\">\n                              <div class=\"col-md-3\">\n                            <label class=\"pl\"> Withdrawn Date</label>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <div class=\"form-group\">\n                                      <input type=\"date\" class=\"form-control\" formControlName=\"Product_Withdrawn_Date\" [(ngModel)]=\"draftartData['Product_Withdrawn_Date']\" name=\"Product_Withdrawn_Date\" id=\"Product_Withdrawn_Date\">\n                                    </div>\n                            </div>\n                               </div>\n                              \n                                       \n                                           <label class=\"text-primary\">Author Comments</label>\n                                           <div class=\"row\">\n                                              <div class=\"col-md-12\">\n                                                  <div class=\"form-group\">\n                                                      <textarea class=\"form-control\" rows=\"5\" formControlName=\"Author_Comments\" [(ngModel)]=\"draftartData['Author_Comments']\" name=\"Author_Comments\" id=\"Author_Comments\" readonly></textarea>\n                                                    </div>\n                                            </div>\n                                               </div>\n                                               \n                                                   <div class=\"modal-footer\">\n                                                    <!-- <button type=\"button\" class=\"btn btn-primary\" href=\"#base-buzz\" (click)=\"('base-buzz')\" >Next</button> -->\n                                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"articleondraft(draftartData)\">Save as Draft</button>\n                                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Clear</button>\n                                            \n                                                  </div>\n                                      </div>\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"base-buzz\">\n              <input type=\"checkbox\" id=\"1\" name=\"rememberMe\"  >\n              <label for=\"1\" class=\"checkbox\"></label>  Interventional study<br><br>\n  \n              <input type=\"checkbox\" id=\"2\" name=\"rememberMe\"  >\n              <label for=\"2\" class=\"checkbox\"></label>  Non-Valid Case report with unidentifiable patient/unidentifiable report<br><br>\n  \n              <input type=\"checkbox\" id=\"3\" name=\"rememberMe\"  >\n              <label for=\"3\" class=\"checkbox\"></label> Valid Case report found for data basing<br><br>\n  \n              <input type=\"checkbox\" id=\"4\" name=\"rememberMe\"  >\n              <label for=\"4\" class=\"checkbox\"></label> Toxicology / in vitro study<br><br>\n  \n              <input type=\"checkbox\" id=\"5\" name=\"rememberMe\"  >\n              <label for=\"5\" class=\"checkbox\"></label> Animal Study<br><br>\n  \n              <input type=\"checkbox\" id=\"6\" name=\"rememberMe\"  >\n              <label for=\"6\" class=\"checkbox\"></label> Suspected substance or medicinal product missing<br><br>\n  \n              <input type=\"checkbox\" id=\"7\" name=\"rememberMe\"  >\n              <label for=\"7\" class=\"checkbox\"></label> Suspected adverse reaction missing<br><br>\n  \n              <input type=\"checkbox\" id=\"8\" name=\"rememberMe\"  >\n              <label for=\"8\" class=\"checkbox\"></label> Termination of pregnancy – no ADR information<br><br>\n  \n              <input type=\"checkbox\" id=\"9\" name=\"rememberMe\"  >\n              <label for=\"9\" class=\"checkbox\"></label>   Pregnancy – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"10\" name=\"rememberMe\"  >\n              <label for=\"10\" class=\"checkbox\"></label> Paediatric  Or Elderly – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"11\" name=\"rememberMe\"  >\n              <label for=\"11\" class=\"checkbox\"></label> Overdose, Abuse , Off-label use , Misuse , Medication error , Occupational  \n              exposure – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"12\" name=\"rememberMe\"  >\n              <label for=\"12\" class=\"checkbox\"></label> Quality defect, Falsified medicines – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"13\" name=\"rememberMe\"  >\n              <label for=\"13\" class=\"checkbox\"></label>  Company holds a marketing authorisation but has never commercialised the      \n              medicinal product<br><br>\n  \n              <input type=\"checkbox\" id=\"14\" name=\"rememberMe\"  >\n              <label for=\"14\" class=\"checkbox\"></label>  Potential PV case<br><br>\n  \n              <input type=\"checkbox\" id=\"15\" name=\"rememberMe\"  >\n              <label for=\"15\" class=\"checkbox\"></label>  Safety data found for aggregate reports<br><br>\n  \n              <input type=\"checkbox\" id=\"16\" name=\"rememberMe\"  >\n              <label for=\"16\" class=\"checkbox\"></label>  Safety data not found for Aurobindo products<br><br>\n  \n              <input type=\"checkbox\" id=\"17\" name=\"rememberMe\"  >\n              <label for=\"17\" class=\"checkbox\"></label>  Suspect drug not belongs to Aurobindo products<br><br>\n  \n              <input type=\"checkbox\" id=\"18\" name=\"rememberMe\"  >\n              <label for=\"18\" class=\"checkbox\"></label>  Drug used for treatment<br><br>\n  \n              <input type=\"checkbox\" id=\"19\" name=\"rememberMe\"  >\n              <label for=\"19\" class=\"checkbox\"></label>  Brand drug mentioned<br><br>\n  \n              <input type=\"checkbox\" id=\"20\" name=\"rememberMe\"  >\n              <label for=\"20\" class=\"checkbox\"></label>  No MA (Marketing Authorization) in the country of ADE occurrence<br><br>\n  \n              <input type=\"checkbox\" id=\"21\" name=\"rememberMe\"  >\n              <label for=\"21\" class=\"checkbox\"></label>  No MA (Marketing Authorization) at the time of Publication<br><br>\n  \n              <input type=\"checkbox\" id=\"22\" name=\"rememberMe\"  >\n              <label for=\"22\" class=\"checkbox\"></label>  No MA (Marketing Authorization) for formulation of suspect drug<br><br>\n  \n              <input type=\"checkbox\" id=\"23\" name=\"rememberMe\"  >\n              <label for=\"23\" class=\"checkbox\"></label>  Therapy and/or event end dates prior to the grant of the approval in the country  of ADE occurrence<br><br>\n  \n              <input type=\"checkbox\" id=\"24\" name=\"rememberMe\"  >\n              <label for=\"24\" class=\"checkbox\"></label>  Publication study<br><br>\n  \n              <input type=\"checkbox\" id=\"25\" name=\"rememberMe\">\n              <label for=\"25\" class=\"checkbox\"></label>  No search found<br><br>\n  \n              <input type=\"checkbox\" id=\"26\" name=\"rememberMe\"  >\n              <label for=\"26\" class=\"checkbox\"></label> Publication study not containing information of importance<br><br>\n              <input type=\"checkbox\" id=\"27\" name=\"rememberMe\"  >\n              <!-- <input type=\"text\" id=\"28\" name=\"articleId\" formControlName=\"articleId\" value=\"asd\" hidden> -->\n              \n              <label for=\"3\" class=\"checkbox\"></label>  Brand drug mentioned?<br><br>\n              <input type=\"checkbox\" id=\"28\" name=\"rememberMe\"  >\n              <label for=\"28\" class=\"checkbox\"></label> Safety communication<br><br>\n              <div class=\"modal-footer\">\n\n\n               <button type=\"button\" class=\"btn btn-primary\" (click)=\"articleontriage(draftartData)\" data-dismiss=\"modal\">Submit for Triage</button>\n               <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"articleondraft(draftartData)\">Save as Draft</button>\n               <button type=\"button\" class=\"btn btn-default\"(click)=\"draftartreset()\" data-dismiss=\"modal\">Clear</button>\n       \n             </div>\n          </div>\n          <div role=\"tabpanel\" class=\"tab-pane text-center\" id=\"base-arti-req\">\n            <strong>Work in Progress </strong>\n          </div>\n          <div role=\"tabpanel\" class=\"tab-pane text-center\" id=\"base-tran\">\n            <strong>Work in Progress </strong>\n          </div>\n        \n       </form>\n        </div>      \n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"alertmodal \" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n        </button>\n        <p>Do you want to remove the article.?</p>\n      </div>\n      <div class=\"modal-body\">\n        \n      <div class=\"modal-footer\">\n         <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Agree</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Disagree</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n<div class=\"modal\" id=\"triagemodal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n      \n        <!-- Modal Header -->\n        <div class=\"modal-header  bg-white\">\n           <h5 class=\"modal-title\"><b>{{modaltitle}} </b>\n  </h5>\n          <button type=\"button\" class=\"close\" (click)=\"closemodal()\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        \n        <!-- Modal body -->\n         <div class=\"modal-body\">\n    <strong>Author Information:</strong> {{authordata}}<br><br>\n          <strong class=\"text-primary\" style=\"font-size:18px;\">Abstract</strong>\n          <p>{{abstractdata}}</p>\n        <br>\n  \n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" href=\"#submited-profile\" role=\"tab\" data-toggle=\"tab\">CheckList</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#submited-buzz\" role=\"tab\" data-toggle=\"tab\">Comments</a>\n          </li>\n        </ul>\n        <form [formGroup]=\"draftForm\"  class=\"tab-content\" style=\"padding:30px;border: 1px solid #e8ecef;\">\n          <div role=\"tabpanel\" class=\"tab-pane fadein active\" id=\"submited-profile\">\n  \n            <div class=\"row\">\n              <div class=\"col-md-3\">\n            <label> Does Drugs Belongs to Aurobindo</label>\n              </div>\n              <div class=\"col-md-4\">\n\n            <label class=\"\">\n                <input type=\"checkbox\" formControlName=\"belongstatus\" [(ngModel)]=\"drugsAurobindo\" [checked]=\"belongs\" (change)=\"belongs = !belongs\" class=\"switch-input\">\n               \n              </label>\n            </div>\n               </div>\n               <div class=\"row\">\n                  <div class=\"col-md-3\">\n                <label> Country of authorization</label>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"contryauth\" [(ngModel)]=\"reviewData['contryauth']\" name=\"contryauth\" id=\"contryauth\" readonly>\n                        </div>\n                </div>\n                   </div>\n <div class=\"row\">\n                  <div class=\"col-md-3\">\n                <label> id</label>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"id\" [(ngModel)]=\"reviewData['id']\" name=\"id\" id=\"id\" >\n                        </div>\n                </div>\n                   </div>\n\n                   <label class=\"text-primary\">Product</label>\n                   <div class=\"row\">\n                      <div class=\"col-md-3\">\n                    <label class=\"pl\"> Publication Date</label>\n                      </div>\n                      <div class=\"col-md-4\">\n                          <div class=\"form-group\">\n                              <input type=\"text\" class=\"form-control\" formControlName=\"Publication_Date\" [(ngModel)]=\"reviewData['Publication_Date']\" name=\"Publication_Date\" id=\"Publication_Date\" readonly>\n                            </div>\n                    </div>\n                       </div>\n                       <div class=\"row\">\n                          <div class=\"col-md-3\">\n                        <label class=\"pl\"> Approval Date</label>\n                          </div>\n                          <div class=\"col-md-4\">\n                              <div class=\"form-group\">\n                                  <input type=\"text\" class=\"form-control\" formControlName=\"Product_Approval_Date\" [(ngModel)]=\"reviewData['Product_Approval_Date']\" name=\"Product_Approval_Date\" id=\"Product_Approval_Date\" readonly>\n                                </div>\n                        </div>\n                           </div>\n                           <div class=\"row\">\n                              <div class=\"col-md-3\">\n                            <label class=\"pl\"> Withdrawn Date</label>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <div class=\"form-group\">\n                                      <input type=\"text\" class=\"form-control\" formControlName=\"Product_Withdrawn_Date\" [(ngModel)]=\"reviewData['Product_Withdrawn_Date']\" name=\"Product_Withdrawn_Date\" id=\"Product_Withdrawn_Date\" readonly>\n                                    </div>\n                            </div>\n                               </div>\n                               \n                                           <label class=\"text-primary\">Author Comments</label>\n                                           <div class=\"row\">\n                                              <div class=\"col-md-12\">\n                                                  <div class=\"form-group\">\n                                                      <textarea class=\"form-control\" rows=\"5\" id=\"comment\" formControlName=\"Author_Comments\" [(ngModel)]=\"reviewData['Author_Comments']\" name=\"Author_Comments\" id=\"Author_Comments\" readonly></textarea>\n                                                    </div>\n                                            </div>\n                                               </div>\n\n                                      </div>\n          <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"submited-buzz\">\n              <input type=\"checkbox\" id=\"1\" name=\"rememberMe\"  >\n              <label for=\"1\" class=\"checkbox\"></label>  Interventional study<br><br>\n  \n              <input type=\"checkbox\" id=\"2\" name=\"rememberMe\"  >\n              <label for=\"2\" class=\"checkbox\"></label>  Non-Valid Case report with unidentifiable patient/unidentifiable report<br><br>\n  \n              <input type=\"checkbox\" id=\"3\" name=\"rememberMe\"  >\n              <label for=\"3\" class=\"checkbox\"></label> Valid Case report found for data basing<br><br>\n  \n              <input type=\"checkbox\" id=\"4\" name=\"rememberMe\"  >\n              <label for=\"4\" class=\"checkbox\"></label> Toxicology / in vitro study<br><br>\n  \n              <input type=\"checkbox\" id=\"5\" name=\"rememberMe\"  >\n              <label for=\"5\" class=\"checkbox\"></label> Animal Study<br><br>\n  \n              <input type=\"checkbox\" id=\"6\" name=\"rememberMe\"  >\n              <label for=\"6\" class=\"checkbox\"></label> Suspected substance or medicinal product missing<br><br>\n  \n              <input type=\"checkbox\" id=\"7\" name=\"rememberMe\"  >\n              <label for=\"7\" class=\"checkbox\"></label> Suspected adverse reaction missing<br><br>\n  \n              <input type=\"checkbox\" id=\"8\" name=\"rememberMe\"  >\n              <label for=\"8\" class=\"checkbox\"></label> Termination of pregnancy – no ADR information<br><br>\n  \n              <input type=\"checkbox\" id=\"9\" name=\"rememberMe\"  >\n              <label for=\"9\" class=\"checkbox\"></label>   Pregnancy – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"10\" name=\"rememberMe\"  >\n              <label for=\"10\" class=\"checkbox\"></label> Paediatric  Or Elderly – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"11\" name=\"rememberMe\"  >\n              <label for=\"11\" class=\"checkbox\"></label> Overdose, Abuse , Off-label use , Misuse , Medication error , Occupational  \n              exposure – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"12\" name=\"rememberMe\"  >\n              <label for=\"12\" class=\"checkbox\"></label> Quality defect, Falsified medicines – no ADR<br><br>\n  \n              <input type=\"checkbox\" id=\"13\" name=\"rememberMe\"  >\n              <label for=\"13\" class=\"checkbox\"></label>  Company holds a marketing authorisation but has never commercialised the      \n              medicinal product<br><br>\n  \n              <input type=\"checkbox\" id=\"14\" name=\"rememberMe\"  >\n              <label for=\"14\" class=\"checkbox\"></label>  Potential PV case<br><br>\n  \n              <input type=\"checkbox\" id=\"15\" name=\"rememberMe\"  >\n              <label for=\"15\" class=\"checkbox\"></label>  Safety data found for aggregate reports<br><br>\n  \n              <input type=\"checkbox\" id=\"16\" name=\"rememberMe\"  >\n              <label for=\"16\" class=\"checkbox\"></label>  Safety data not found for Aurobindo products<br><br>\n  \n              <input type=\"checkbox\" id=\"17\" name=\"rememberMe\"  >\n              <label for=\"17\" class=\"checkbox\"></label>  Suspect drug not belongs to Aurobindo products<br><br>\n  \n              <input type=\"checkbox\" id=\"18\" name=\"rememberMe\"  >\n              <label for=\"18\" class=\"checkbox\"></label>  Drug used for treatment<br><br>\n  \n              <input type=\"checkbox\" id=\"19\" name=\"rememberMe\"  >\n              <label for=\"19\" class=\"checkbox\"></label>  Brand drug mentioned<br><br>\n  \n              <input type=\"checkbox\" id=\"20\" name=\"rememberMe\"  >\n              <label for=\"20\" class=\"checkbox\"></label>  No MA (Marketing Authorization) in the country of ADE occurrence<br><br>\n  \n              <input type=\"checkbox\" id=\"21\" name=\"rememberMe\"  >\n              <label for=\"21\" class=\"checkbox\"></label>  No MA (Marketing Authorization) at the time of Publication<br><br>\n  \n              <input type=\"checkbox\" id=\"22\" name=\"rememberMe\"  >\n              <label for=\"22\" class=\"checkbox\"></label>  No MA (Marketing Authorization) for formulation of suspect drug<br><br>\n  \n              <input type=\"checkbox\" id=\"23\" name=\"rememberMe\"  >\n              <label for=\"23\" class=\"checkbox\"></label>  Therapy and/or event end dates prior to the grant of the approval in the country  of ADE occurrence<br><br>\n  \n              <input type=\"checkbox\" id=\"24\" name=\"rememberMe\"  >\n              <label for=\"24\" class=\"checkbox\"></label>  Publication study<br><br>\n  \n              <input type=\"checkbox\" id=\"25\" name=\"rememberMe\">\n              <label for=\"25\" class=\"checkbox\"></label>  No search found<br><br>\n  \n              <input type=\"checkbox\" id=\"26\" name=\"rememberMe\"  >\n              <label for=\"26\" class=\"checkbox\"></label> Publication study not containing information of importance<br><br>\n              <input type=\"checkbox\" id=\"27\" name=\"rememberMe\"  >\n             \n              <label for=\"27\" class=\"checkbox\"></label> Safety communication<br><br>\n             \n          </div>\n        \n       </form>\n        </div>      \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_research_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/research.service */ "./src/app/services/research.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(researchdataService, toastr, spinner) {
        this.researchdataService = researchdataService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.data = [];
        this.tempdata = [];
        this.reviewdatas = [];
        //reviewdata=[];
        this.reviewData = {};
        this.draftartData = {};
        this.reviewdata = {};
        this.singleRecordData = [];
        //
        this.reseachViewData = {};
        this.draftForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            belongstatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            contryauth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Publication_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Product_Approval_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Product_Withdrawn_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            drug_Start_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            drugApproval_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            drugWithdrawn_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            administration_of_Drug: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Formulation_of_Drug: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Brand_drug_mentioned: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Author_Comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            product_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.reviewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            belongstatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            contryauth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Publication_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Product_Approval_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Product_Withdrawn_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            drug_Start_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            drugApproval_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            drugWithdrawn_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            administration_of_Drug: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Formulation_of_Drug: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Brand_drug_mentioned: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Author_Comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            product_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    UserComponent.prototype.showSuccessdraft = function () {
        this.toastr.success('Draft', 'Success!');
    };
    UserComponent.prototype.showSuccessreview = function () {
        this.toastr.success('review', 'Success!');
    };
    UserComponent.prototype.showError = function () {
        this.toastr.error('password or user not matching!', 'Error!');
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formCreate();
        console.log("calling----");
        this.spinner.show();
        this.researchdataService.getsearchArt()
            .subscribe(function (res) {
            console.log("--------here", res);
            /* for(var i=0;i<res.length();i++){
               console.log("filtter data is here",res[i])
             }*/
            _this.tempdata = res;
            /* this.tempdata.forEach(function(x){
               
               if(x.status=="submit for review"){
                 console.log("matching",x)
                
                this.datas.push(x)
                //this.data.push(x);
               }
               
             })*/
            for (var i = 0; i < _this.tempdata.length; i++) {
                if (_this.tempdata[i].status == "submit for review" || _this.tempdata[i].status == "saved as triage") {
                    console.log("matching", _this.tempdata[i]);
                    _this.data.push(_this.tempdata[i]);
                    //this.data.push(x);
                }
                if (_this.tempdata[i].status == "submit for review") {
                    _this.reviewdatas.push(_this.tempdata[i]);
                }
                console.log("----data--", _this.data);
            }
            _this.spinner.hide();
            _this.reviewdataValue = _this.reviewdatas.length;
        });
    };
    UserComponent.prototype.formCreate = function () {
        this.articleform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            belongstatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            contryauth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Publication_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Product_Approval_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Product_Withdrawn_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            drug_Start_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            drugApproval_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            drugWithdrawn_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            administration_of_Drug: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Formulation_of_Drug: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Brand_drug_mentioned: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            Author_Comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            articleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    };
    UserComponent.prototype.closemodal = function () {
        $('#basemodal').hide();
        $('#triagemodal').hide();
    };
    UserComponent.prototype.singleDaata = function (data) {
        this.articleform.patchValue({ articleId: data.id });
        this.singleRecordData = this.data[data.id];
        this.authordata = data.author;
        this.abstractdata = data.result_abstract;
        this.modaltitle = data.result_title;
        console.log("----data----", data);
        if (data.status == "saved as triage") {
            console.log("========save as triage");
            $('#triagemodal').show();
            this.draftartData['id'] = data.id;
            this.draftartData['belongstatus'] = data.belongstatus;
            this.draftartData['contryauth'] = data.contryauth;
            this.draftartData['Publication_Date'] = data.Publication_Date;
            this.draftartData['Product_Approval_Date'] = data.Product_Approval_Date;
            this.draftartData['Product_Withdrawn_Date'] = data.Product_Withdrawn_Date;
            this.draftartData['drug_Start_Date'] = data.drug_Start_Date;
            this.draftartData['drugApproval_Date'] = data.drugApproval_Date;
            this.draftartData['drugWithdrawn_Date'] = data.drugWithdrawn_Date;
            this.draftartData['administration_of_Drug'] = data.administration_of_Drug;
            this.draftartData['Formulation_of_Drug'] = data.Formulation_of_Drug;
            this.draftartData['Brand_drug_mentioned'] = data.Brand_drug_mentioned;
            this.draftartData['Author_Comments'] = data.Author_Comments;
        }
        else {
            $('#basemodal').show();
            this.draftartData['id'] = data.id;
            this.draftartData['belongstatus'] = data.belongstatus;
            this.draftartData['contryauth'] = data.contryauth;
            this.draftartData['Publication_Date'] = data.Publication_Date;
            this.draftartData['Product_Approval_Date'] = data.Product_Approval_Date;
            this.draftartData['Product_Withdrawn_Date'] = data.Product_Withdrawn_Date;
            this.draftartData['drug_Start_Date'] = data.drug_Start_Date;
            this.draftartData['drugApproval_Date'] = data.drugApproval_Date;
            this.draftartData['drugWithdrawn_Date'] = data.drugWithdrawn_Date;
            this.draftartData['administration_of_Drug'] = data.administration_of_Drug;
            this.draftartData['Formulation_of_Drug'] = data.Formulation_of_Drug;
            this.draftartData['Brand_drug_mentioned'] = data.Brand_drug_mentioned;
            this.draftartData['Author_Comments'] = data.Author_Comments;
        }
        // $('#basemodal').show();
        /*   else if(data.status=="submit for review"){
             console.log("submit for review")
        $('#basemodal').show();
  
        this.reviewData['belongstatus']=data.belongstatus;
        this.reviewData['contryauth']=data.contryauth;
        this.reviewData['Publication_Date']=data.Publication_Date;
        this.reviewData['Product_Approval_Date']=data.Product_Approval_Date;
        this.reviewData['Product_Withdrawn_Date']=data.Product_Withdrawn_Date;
        this.reviewData['drug_Start_Date']=data.drug_Start_Date;
        this.reviewData['drugApproval_Date']=data.drugApproval_Date;
        this.reviewData['drugWithdrawn_Date']=data.drugWithdrawn_Date;
        this.reviewData['administration_of_Drug']=data.administration_of_Drug;
        this.reviewData['Formulation_of_Drug']=data.Formulation_of_Drug;
        this.reviewData['Brand_drug_mentioned']=data.Brand_drug_mentioned;
        this.reviewData['Author_Comments']=data.Author_Comments;
  
  
  
  
           }*/
        /*  else if(data.status=="saved as drafted"){
            console.log("saved as drafted")
       $('#draftModal').show();
       this.draftartData['belongstatus']=data.belongstatus;
       this.draftartData['contryauth']=data.contryauth;
       this.draftartData['Publication_Date']=data.Publication_Date;
       this.draftartData['Product_Approval_Date']=data.Product_Approval_Date;
       this.draftartData['Product_Withdrawn_Date']=data.Product_Withdrawn_Date;
       this.draftartData['drug_Start_Date']=data.drug_Start_Date;
       this.draftartData['drugApproval_Date']=data.drugApproval_Date;
       this.draftartData['drugWithdrawn_Date']=data.drugWithdrawn_Date;
       this.draftartData['administration_of_Drug']=data.administration_of_Drug;
       this.draftartData['Formulation_of_Drug']=data.Formulation_of_Drug;
       this.draftartData['Brand_drug_mentioned']=data.Brand_drug_mentioned;
       this.draftartData['Author_Comments']=data.Author_Comments;
 
 
 
 
          }*/
    };
    UserComponent.prototype.draftData = function () {
        var obj = {
            'aurobindoDrug': this.drugsAurobindo,
            'authoriztionCounter': this.counterAuthorization,
            'publicationDate': this.publicationDate,
            'approvalDate': this.approvalDate,
            'withdrawnDate': this.withdrawDate,
            'administrationRoute': this.administrationRoute,
            'formulationDrug': this.formulationDrug,
            'brandDrug': this.brandDrag
        };
        this.researchdataService.sumbitreview(obj); /*.subscribe(
          (data: any) => {
            this.draftDataResponse = data;
          }, error => {
            console.log(error);
          });*/
    };
    UserComponent.prototype.next = function () {
        console.log("clicked");
    };
    UserComponent.prototype.articleonSubmit = function () {
        console.log("----", this.articleform.value);
        this.reviewdata = this.articleform.value;
        // TODO: Use EventEmitter with form value
        this.researchdataService.sumbitreview(this.reviewdata);
        console.warn(this.articleform.value);
        this.articleform.reset();
    };
    UserComponent.prototype.articleondraft = function (data) {
        this.showSuccessdraft();
        console.log("----articleondraft", data);
        this.researchdataService.sumbitdraft(data);
    };
    UserComponent.prototype.deleteRecord = function (id) {
        console.log("deleted id", id);
        this.researchdataService.removearticle(id);
    };
    UserComponent.prototype.articleontriage = function (data) {
        console.log("----articleondraft", data);
        this.researchdataService.sumbitdtriage(data);
    };
    UserComponent.prototype.draftartreset = function () {
        this.draftForm.reset();
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_research_service__WEBPACK_IMPORTED_MODULE_1__["ResearchdataService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing */ "./src/app/user/user-routing.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_4__["userRoute"]),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()],
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-user-user-module.js.map