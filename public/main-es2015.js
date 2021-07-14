(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n\n<!-- <app-dashboard></app-dashboard> -->\n\n<div class=\"wrapper\" *ngIf=\"false\">\n    <div class=\"parent\">\n        <div class=\"child\">\n            am child content\n        </div>\n    </div>\n</div>\n\n<div class=\"wrapper\" *ngIf=\"false\">\n\t<div class=\"notification_wrap\">\n\t\t<div class=\"notification_icon\">\n\t\t\t<i class=\"fa fa-bell\" (click)=\"open()\"></i>\n\t\t</div>\n\t\t<div class=\"dropdown\">\n\t\t\t<div class=\"notify_item\">\n\t\t\t\t<div class=\"notify_img\">\n\t\t\t\t\t<img src=\"/assets/images/user.png\" alt=\"profile_pic\" style=\"width: 50px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"notify_info\">\n\t\t\t\t\t<p>Alex commented on<span>Timeline Share</span></p>\n\t\t\t\t\t<span class=\"notify_time\">10 minutes ago</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"notify_item\">\n\t\t\t\t<div class=\"notify_img\">\n\t\t\t\t\t<img src=\"/assets/images/user.png\" alt=\"profile_pic\" style=\"width: 50px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"notify_info\">\n\t\t\t\t\t<p>Ben hur commented on your<span>Timeline Share</span></p>\n\t\t\t\t\t<span class=\"notify_time\">55 minutes ago</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"notify_item\">\n\t\t\t\t<div class=\"notify_img\">\n\t\t\t\t\t<img src=\"/assets/images/user.png\" alt=\"profile_pic\" style=\"width: 50px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"notify_info\">\n\t\t\t\t\t<p>Meryn trant liked your<span>Cover Picture</span></p>\n\t\t\t\t\t<span class=\"notify_time\">2 hours ago</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"notify_item\">\n\t\t\t\t<div class=\"notify_img\">\n\t\t\t\t\t<img src=\"/assets/images/user.png\" alt=\"profile_pic\" style=\"width: 50px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"notify_info\">\n\t\t\t\t\t<p>John wick commented on your<span>Profile Picture</span></p>\n\t\t\t\t\t<span class=\"notify_time\">6 hours ago</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-user/add-user.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-user/add-user.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid\">\n    <img class=\"wave\" src=\"assets/images/wave.png\">\n    <div class=\"container\">\n        <div class=\"img\">\n            <img src=\"assets/images/bg.svg\">\n        </div>\n        <div class=\"login-content\">\n            <form #loginForm=\"ngForm\">\n                <img src=\"assets/images/avatar.svg\">\n                <h2 class=\"title\">Welcome</h2>\n                   <div class=\"input-div one\">\n                      <div class=\"i\">\n                              <i class=\"fa fa-user\"></i>\n                      </div>\n                      <div class=\"div\">\n                              <!-- <h5>Username</h5> -->\n                              <input type=\"text\" name=\"username\" id=\"username\" [(ngModel)]=\"username\" class=\"input\" placeholder=\"username\" required>\n                      </div>\n                   </div>\n                   <div class=\"input-div pass\">\n                      <div class=\"i\"> \n                           <i class=\"fa fa-lock\"></i>\n                      </div>\n                      <div class=\"div\">\n                           <!-- <h5>Password</h5> -->\n                           <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" id=\"password\" placeholder=\"password\" class=\"input\" required>\n                   </div>\n                </div>\n                <a >Forgot Password?</a>\n                <button (click)=\"loginUser()\" type=\"submit\" class=\"btn\" > Login </button>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"container-fluid\" *ngIf=\"false\">\n    \n\n    <section >\n       <div class=\"main-content\">\n        <div class=\"panel\">\n            <div class=\"panel-heading\">\n                <h3> Login</h3>\n                <hr>\n                <span class=\"line\"></span>\n            </div>\n            <div class=\"panel-body\">\n                <form class=\"form-group\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Username\" required>\n    \n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Password\" required>\n                    </div>\n                    <div class=\"remember\">\n                        <input type=\"checkbox\" name=\"remember\" id=\" remember\" > Remember me\n                    </div>\n                    <div class=\"form-group form-btn mx-auto py-2\">\n                        <button class=\"btn btn-primary \" type=\"button\" >Login</button>\n                    </div>\n                    <div class=\"signup-link text-center\">\n                        <p> Not Member ? <a >Sign Up</a></p>\n                    </div>\n                </form>\n            </div>\n        </div> \n       </div>  \n    </section>       \n\n       \n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"container-fluid\" >\n<div class=\"wrapper\">\n    <!-- table section -->\n <section *ngIf=\"listGames\">\n  <div class=\"row\" id=\"main-content-body\" >\n    <div class=\"col\">\n      <div class=\"panel\">\n        <div class=\"panel-heading\">\n      \n         \n         \n          <hr />\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\" id=\"main-section\">\n            <div class=\"col col-sm-5 col-xs-12\">\n              <button  class=\"btn btn-primary btn-sm\"\n               (click)=\"openModal()\" ><i class=\"fa fa-plus\"></i> Add\n            </button> &nbsp;\n              <button (click)=\"selectedDelete()\" class=\"btn btn-danger delall btn-sm\"\n                ><i class=\"fa fa-minus\"></i> Del\n          </button>\n              <!-- <button class=\"btn btn-primary btn-sm ml-2\"> <i class=\"fa fa-hdd-o\"> </i> My Drive </button> -->\n            </div>\n            <div class=\"col col-sm-7 col-xs-12 \" >\n             <div class=\"sortsearch\">\n              <div class=\"sel\">\n                <select class=\"form-control mr-3\"  id=\"sel1\">\n                  <option [value]=\"undefined\" selected>Sort By</option>\n                  <option>Name</option>\n                  <option>Size</option>\n                  <option>status</option>\n                  <option>site</option>\n                </select>\n              </div>\n           \n            <div class=\"search-box\">\n              <i class=\"fa fa-search\"></i>\n              <input\n                type=\"search\" [(ngModel)]=\"searchQuery\"\n                class=\"form-control\"\n                placeholder=\"Search...\"\n              />\n            </div>\n             </div>\n                \n            </div>\n          </div>\n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th><input type=\"checkbox\" (change)=\"selectCheck($event)\"  name=\"\" id=\"\"></th>\n                <th>Name</th>\n                <th>Size</th>\n                <th>Status</th>\n                <th> Genres </th>\n                <th>Site</th>\n                <th>Progress</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of gamesData; let i = index\" >\n                <td><input type=\"checkbox\" [checked]=\"myChecks\" name=\"\" id=\"\"></td>\n                <td>{{ item.name }}</td>\n                <td>{{ item.size  }} GB</td>\n                <td [ngClass]=\"item.status == 0 ? ' text text-danger': 'text text-success'\">{{ item.status == 0 ? 'pending ':'completed' }}</td>\n                <td> {{item.genres}} </td>\n                <td>{{ item.site }}</td>\n                <td> \n                \n                  <div [ngSwitch]=\"item.progress\">\n                    <div *ngSwitchCase=\"10\">\n                       <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-striped active \" [style.width]=\"item.progress+'%'\"style=\"background-color: black;\" role=\"progressbar\" \n                       >\n                         {{item.progress}} % \n                      </div>\n                    </div></div>\n                    <div *ngSwitchCase=\"40\">\n                      <div class=\"progress\">\n                     <div class=\"progress-bar progress-bar-striped active bg-info\" [style.width]=\"item.progress+'%'\"  role=\"progressbar\" \n                      >\n                        {{item.progress}} % \n                     </div>\n                   </div></div>\n                   <div *ngSwitchCase=\"80\">\n                    <div class=\"progress\">\n                   <div class=\"progress-bar progress-bar-striped active bg-warning\" [style.width]=\"item.progress+'%'\" style=\"background-color: yellow;\" role=\"progressbar\" \n                    >\n                      {{item.progress}} % \n                   </div>\n                 </div></div>\n                 <div *ngSwitchCase=\" 100\">\n                  <div class=\"progress\">\n                 <div class=\"progress-bar progress-bar-striped active bg-success\" role=\"progressbar\" [style.width]=\"item.progress+'%'\"  style=\"background-color: green;\"\n                  >\n                    {{item.progress}} % \n                 </div>\n               </div></div>\n                    <div *ngSwitchDefault> <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-striped active bg-dark\" [style.width]=\"item.progress+'%'\" role=\"progressbar\" \n                       >\n                         {{item.progress}} % \n                      </div>\n                    </div></div>\n                  </div>\n                  \n                </td>\n\n                <td>\n                  <ul class=\"action-list\">\n                    <li>\n                      <a (click)=\"view(item)\" class=\"btn show\"\n                        ><em class=\"fa fa-eye\"></em\n                      ></a>\n                    </li>\n                    <li>\n                      <a (click)=\"makechange(item)\" class=\"btn edit\"\n                        ><em class=\"fa fa-edit\"></em\n                      ></a>\n                    </li>\n                    <li>\n                      <a  class=\"btn danger disable\"\n                        ><em class=\"fa fa-trash\"></em\n                      ></a>\n                    </li>\n                  </ul>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"panel-footer\">\n            <div class=\"row\">\n                <div class=\"col col-xs-6\">Showing <b>{{start}}</b> out of <b>{{end}}</b> entries</div>\n                <div class=\"col-xs-6\">\n                    <ul class=\"pagination  pull-right\" >\n                        <li  ><a [ngClass]=\"{'isDisable':page === 1}\" (click)=\"getPage(page-1)\"><</a></li>\n                        <ul *ngFor=\"let item of myList\">\n                          <li [ngClass]=\"{'active':page === item}\" ><a (click)=\"getPage(item)\" >  {{item}}  </a> </li>\n                        </ul>\n                        <li  ><a [ngClass]=\"{'isDisable':page === myList.length}\" (click)=\"getPage(page+1)\">></a></li>\n                    </ul>\n                    \n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n </section>\n\n <div class=\"modal fade\" id=\"addFormModal\" >\n  <div class=\"modal-dialog modal-dialog-centered\">\n<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Add Games</h5>\n    <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <section class=\"addgameFrm\">\n      <form #gameForm=\"ngForm\"  enctype=\"multipart/form-data\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" id=\"name\" class=\"form-control\" placeholder=\"Name of the Game\" required>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" name=\"size\" id=\"size\" [(ngModel)]=\"size\" placeholder=\"size of Game\"  class=\"form-control\" required>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" name=\"site\" id=\"site\" [(ngModel)]=\"site\" class=\"form-control\" placeholder=\"Site to Download\" required>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <select name=\"genres \" class=\"form-control\" [(ngModel)]=\"genres\" id=\"genres\" >\n                <option value=\"null\" selected disabled>Select Genre</option>\n                <option value=\"item\" *ngFor=\"let item of gameGenres\"> {{item}} </option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"file\" (change)=\"onSelectFile($event)\" name=\"game_img\" class=\"form-control\" accept=\"*\" id=\"game_img\" #fileInput required>\n            </div>\n            \n          </div>\n        </div>\n        <div class=\"form-add-btn \" >\n          <button class=\"btn btn-success mx-auto\" (click)=\"saveGameDetails()\"> Add Game</button>\n          <button class=\"btn btn-info ml-2\" (click)=\"resetForm()\"> reset</button>\n        </div>\n      </form>\n    </section>\n  </div>\n</div>\n  </div>\n </div>\n\n\n <!-- View Section -->\n \n\n  <section class=\"viewsection\"  *ngIf=\"viewSection\">\n   <div class=\"view_body\">\n    <div class=\"panel2\">\n      <div class=\"panel-heading\">\n        <h3 class=\"title\"> Game Details</h3>\n        <button class=\"btn btn-info\" (click)=\"backtoHome()\"> <i class=\"fa fa-arrow-left\n          \"></i> Back</button>\n      </div> <hr>\n      <div class=\"panel2-body\">\n        <div class=\"row no-gutters\">\n          <div class=\"col\">\n            <div class=\"game-img\">\n              <img src=\"/assets/images/gta5.jpg\" alt=\"game image\" width=\"400\" height=\"400\">\n            </div>\n          </div>\n          <div class=\"col\">\n           <table class=\"table table-hover  w-75\">\n             <tr > \n               <th>  Name</th>\n             <td> {{name}} </td>\n            </tr> <br>\n            <tr> \n              <th> Genres</th>\n            <td> {{genres}}</td>\n           </tr><br>\n           <tr> \n            <th>  Size </th>\n          <td> {{size}} GB </td>\n         </tr><br>\n         <tr> \n          <th> Status </th>\n        <td> {{ status == 0 ? 'pending ':'completed' }} </td>\n       </tr><br>\n       <tr> \n        <th> Site </th>\n      <td> {{site}} </td>\n     </tr><br>\n     <tr> \n      <th> Progress</th>\n    <td> <div class=\"progress\">\n      <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" [style.width]=\"progress+'%'\" ></div>\n    </div> </td>\n   </tr>\n           </table>\n          </div>\n        </div>\n      </div>\n    </div>\n   </div>\n  \n   </section>\n\n   <!-- Edit Section -->\n\n   <section class=\"editsection\" *ngIf=\"editSection\">\n<div class=\"edit_body\">\n  <div class=\"panel3\">\n    <div class=\"panel-heading\">\n      <h3 class=\"title\"> Edit Game Details</h3>\n      <button class=\"btn btn-info\" (click)=\"backtoHome()\"> <i class=\"fa fa-arrow-left\n        \"></i> Back</button>\n    </div> <hr>\n    <div class=\"panel3-body\">\n      <form #editgameForm=\"ngForm\" enctype=\"multipart/form-data\">\n        <div class=\"row\">\n          <div class=\"col\">\n           <div class=\"form-group\">\n             <label for=\"naem\">Name</label>\n            <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\" id=\"name\" required>\n\n           </div>\n           <div class=\"form-group\">\n             <label for=\"genres\">Genres</label>\n            <select name=\"genres\" [(ngModel)]=\"genres\" class=\"form-control\" id=\"genres\">\n              <option value=\"default\">Select one</option>\n              <option *ngFor=\"let g of gameGenres\" value=\"g\"> {{g}}</option>\n            </select>\n           </div>\n           <div class=\"form-group\">\n             <label for=\"size\">Size</label>\n             <input type=\"text\" name=\"size\" [(ngModel)]=\"size\" class=\"form-control\"  id=\"size\">\n           </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"site\"> Site</label>\n              <input type=\"text\" name=\"site\" class=\"form-control\" [(ngModel)]=\"site\" id=\"site\">\n            </div>\n                  <div class=\"form-group\">\n                    <label for=\"progress\"> Progress</label>\n                    <select name=\"progress\" [(ngModel)]=\"progress\" id=\"progress\" class=\"form-control\">\n                      <option value=\"10\">10</option>\n                      <option value=\"20\">20</option>\n                      <option value=\"20\">30</option>\n                      <option value=\"20\">40</option>\n                      <option value=\"20\">50</option>\n                      <option value=\"20\">60</option>\n                      <option value=\"20\">70</option>\n                      <option value=\"20\">80</option>\n                      <option value=\"20\">90</option>\n                      <option value=\"20\">100</option>\n                    </select>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"image\">Upload File</label>\n                    <input type=\"file\" class=\"form-control\" name=\"gameimg\" accept=\".jpg, .jpeg, .png\"id=\"\">\n                  </div>\n          </div>\n        </div>\n        <div class=\"form-edit-btn\">\n          <button class=\"btn btn-warning\">Save Changes</button>\n        </div> <br>\n        \n      </form>\n    </div>\n  </div>\n</div>\n   </section>\n \n</div>\n  \n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-form/edit-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-form/edit-form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>edit-form works!</p>\n<!-- view Section -->\n<div class=\"container-fluid\">\n    <section class=\"viewsection\" *ngIf=\"viewSection\">\n      <div class=\"row\">\n        <div class=\"col \">\n          <div class=\"panel2\">\n            <div class=\"panel-heading\">\n              <h3 class=\"title\"> Game Details</h3>\n              <button class=\"btn btn-info\" (click)=\"backtoHome()\"> <i class=\"fa fa-arrow-left\n                \"></i> Back</button>\n            </div> <hr>\n            <div class=\"panel2-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"game-img\">\n                    <img src=\"/assets/images/gta5.jpg\" alt=\"game image\" width=\"400\" height=\"400\">\n                  </div>\n                </div>\n                <div class=\"col\">\n                 <table>\n                   <tr class=\"w-100\"> \n                     <th>  Name</th>\n                   <td> {{name}} </td>\n                  </tr> <br>\n                  <tr> \n                    <th> Genres</th>\n                  <td> {{genres}}</td>\n                 </tr><br>\n                 <tr> \n                  <th>  Size </th>\n                <td> {{size}} GB </td>\n               </tr><br>\n               <tr> \n                <th> Status </th>\n              <td> {{ status == 0 ? 'pending ':'completed' }} </td>\n             </tr><br>\n             <tr> \n              <th> Site </th>\n            <td> {{site}} </td>\n           </tr><br>\n           <tr> \n            <th> Progress</th>\n          <td> <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" [style.width]=\"progress+'%'\" ></div>\n          </div> </td>\n         </tr>\n                 </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  \n    </section>\n  </div>\n\n<!-- edit section -->\n <div class=\"container-fluid\">\n  <section *ngIf=\"editSection\">\n    <div class=\"panel3\">\n      <div class=\"panel-heading\">\n        <h3 class=\"title\"> Edit Game Details</h3>\n        <button class=\"btn btn-info\" (click)=\"backtoHome()\"> <i class=\"fa fa-arrow-left\n          \"></i> Back</button>\n      </div> <hr>\n      <div class=\"panel3-body\">\n        <form #editgameForm=\"ngForm\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col\">\n             <div class=\"form-group\">\n               <label for=\"naem\">Name</label>\n              <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\" id=\"name\" required>\n  \n             </div>\n             <div class=\"form-group\">\n               <label for=\"genres\">Genres</label>\n              <select name=\"genres\" [(ngModel)]=\"genres\" class=\"form-control\" id=\"genres\">\n                <option value=\"default\">Select one</option>\n                <option *ngFor=\"let g of gameGenres\" value=\"g\"> {{g}}</option>\n              </select>\n             </div>\n             <div class=\"form-group\">\n               <label for=\"size\">Size</label>\n               <input type=\"text\" name=\"size\" [(ngModel)]=\"size\" class=\"form-control\"  id=\"size\">\n             </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"site\"> Site</label>\n                <input type=\"text\" name=\"site\" class=\"form-control\" [(ngModel)]=\"site\" id=\"site\">\n              </div>\n                    <div class=\"form-group\">\n                      <label for=\"progress\"> Progress</label>\n                      <select name=\"progress\" [(ngModel)]=\"progress\" id=\"progress\" class=\"form-control\">\n                        <option value=\"10\">10</option>\n                        <option value=\"20\">20</option>\n                        <option value=\"20\">30</option>\n                        <option value=\"20\">40</option>\n                        <option value=\"20\">50</option>\n                        <option value=\"20\">60</option>\n                        <option value=\"20\">70</option>\n                        <option value=\"20\">80</option>\n                        <option value=\"20\">90</option>\n                        <option value=\"20\">100</option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"image\">Upload File</label>\n                      <input type=\"file\" class=\"form-control\" name=\"gameimg\" accept=\".jpg, .jpeg, .png\"id=\"\">\n                    </div>\n            </div>\n          </div>\n          <div class=\"form-edit-btn mx-auto\">\n            <button class=\"btn btn-warning\">Save Changes</button>\n          </div>\n        </form>\n      </div>\n    </div>\n\n  </section>\n </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-light bg-faded\">\n    <a class=\"navbar-brand abs display-2\" >\n      <img src=\"assets/icon2.png\" class=\"img-fluid \" width=\"40\" alt=\"\">\n      Games List</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsingNavbar\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-collapse collapse\" id=\"collapsingNavbar\">\n        <ul class=\"navbar-nav\">\n            \n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#myAlert\" data-toggle=\"collapse\"></a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#\" class=\"nav-link\"> Home</a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link label label-success\"> <i class=\"fa fa-comments-o\"></i> <span class=\"badge\">5</span> </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link dropdown \" data-toggle=\"dropdown\"> <i class=\"fa fa-bell\"></i><span class=\"badge badge-primary\">5</span> </a>\n          <div class=\"dropdown-menu\">\n            <ul >\n              <li class=\"head-dropdown\">\n                <div class=\"row\">\n                  <div class=\"col-lg-12 col-sm-12 col-12\">\n                      <span>Notifications (5)</span>\n                      <a class=\"float-right text-success\">Mark All Read</a>\n                  </div>\n                </div>\n              </li>\n              <li class=\"notification-box\">\n                  <strong class=\"text-info\">VEnu</strong>\n                  <p> venu has added new game</p>\n                  <small class=\"text-primary\"> 27.10.2021, 15:00</small>\n              </li>\n              <li class=\"notification-box\">\n                <strong class=\"text-info\">VEnu</strong>\n                <p> venu has added new game</p>\n                <small class=\"text-primary\"> 27.10.2021, 15:00</small>\n            </li><li class=\"notification-box\">\n              <strong class=\"text-info\">VEnu</strong>\n              <p> venu has added new game</p>\n              <small class=\"text-primary\"> 27.10.2021, 15:00</small>\n          </li><li class=\"notification-box\">\n            <strong class=\"text-info\">VEnu</strong>\n            <p> venu has added new game</p>\n            <small class=\"text-primary\"> 27.10.2021, 15:00</small>\n        </li>\n        <li class=\"footer bg-dark text-center\">\n          <a class=\"text-light\">View All</a>\n\n        </li>\n            </ul>\n          </div>\n      </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"auth.logout()\"> <i class=\"fa fa-sign-out\"></i> </a>\n            </li>\n        </ul>\n    </div>\n</nav> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <section>\n        <div class=\"container\">\n            <div class=\"card\">\n                <div class=\"register-main\">\n                    <div class=\"img\">\n                        <img src=\"assets/images/login.png\" alt=\"\">\n                    </div>\n                    <div class=\"register-content\">\n                        <form>\n                            <img class=\"avatar\" src=\"assets/images/avatar.svg\" alt=\"\">\n                    <h2 class=\"title\">Welcome</h2>\n    \n                            <div class=\"input-div one\">\n                                <div class=\"i\">\n                                        <i class=\"fa fa-user\"></i>\n                                </div>\n                                <div class=\"div\">\n                                        \n                                        <input type=\"text\" name=\"username\" id=\"username\"class=\"input\" placeholder=\"username\" required>\n                                </div>\n                             </div>\n                            <div class=\"input-div two\">\n                                <div class=\"i\">\n                                    <i class=\"fa fa-envelope\"></i>\n                                </div>\n                                <div class=\"div\">\n                                    <input type=\"email\" name=\"email\" placeholder=\"Email-id\" class=\"input\" id=\"email\">\n                                </div>\n                            </div>\n                            <div class=\"input-div pass\">\n                                <div class=\"i\"> \n                                     <i class=\"fa fa-lock\"></i>\n                                </div>\n                                <div class=\"div\">\n                                    \n                                     <input type=\"password\" name=\"password\"  id=\"password\" placeholder=\"password\" class=\"input\" required>\n                             </div>\n                          </div>\n                            <a href=\"#\">Click to login</a>\n                            <button class=\"btn\">Register</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-form/view-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-form/view-form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>view-form works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-user/add-user.component */ "./src/app/components/add-user/add-user.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");







const routes = [
    {
        path: 'login',
        component: _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]
    },
    {
        path: 'home',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\r\n\r\n.wrapper{\r\n   \r\n    position: absolute;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.parent{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: #2980b9;\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    /* display: grid;\r\n    place-content: center; */\r\n}\r\n\r\n.child\r\n{\r\n    width: 40vw;\r\n    height: 30vh;\r\n    background: brown;\r\n}\r\n\r\n/* \r\n.wrapper{\r\n\r\n}\r\n\r\n.notification_wrap{\r\n    width: 500px;\r\n    margin: 120px auto 0;\r\n}\r\n\r\n.notification_wrap .notification_icon\r\n{\r\nposition: relative;\r\nwidth: 50px;\r\nheight: 50px;\r\nfont-size: 32px;\r\nmargin: 0 auto;\r\ntext-align: center;\r\ncolor: #605dff;\r\n}\r\n.notification_wrap .notification_icon .fa-bell{\r\n\tcursor: pointer;\r\n}\r\n\r\n.notification_wrap .dropdown{\r\n    width: 350px;\r\n    height: auto;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.125);\r\n    margin: 15px auto 0;\r\n    padding: 15px;\r\n    position: relative;\r\n    display: none;\r\n\r\n}\r\n\r\n.notification_wrap .dropdown .notify_item{\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px 0;\r\n    border-bottom:1px solid #dbdaff ;\r\n}\r\n\r\n.notification_wrap .dropdown .notify_item:last-child{\r\n    border-bottom: 0px;\r\n\r\n}\r\n\r\n.notification_wrap .dropdown .notify_item .notify_img{\r\n\tmargin-right: 15px;\r\n}\r\n\r\n.notification_wrap .dropdown .notify_item .notify_info p{\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.notification_wrap .dropdown .notify_item .notify_info p span{\r\n\tcolor: #605dff;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n.notification_wrap .dropdown .notify_item .notify_info .notify_time{\r\n\tcolor: #c5c5e6;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.notification_wrap .dropdown:before{\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\ttop: -30px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n\tborder: 15px solid;\r\n\tborder-color: transparent transparent #fff transparent;\r\n}\r\n\r\n.notification_wrap .dropdown.active{\r\n\tdisplay: block;\r\n}\r\n\r\n\r\n */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDhFQUE4RTs7QUFFOUU7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25COzRCQUN3QjtBQUM1Qjs7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtGRSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi53cmFwcGVye1xyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ucGFyZW50e1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyOyAqL1xyXG59XHJcbi5jaGlsZFxyXG57XHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIGJhY2tncm91bmQ6IGJyb3duO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFxyXG4ud3JhcHBlcntcclxuXHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb25fd3JhcHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMTIwcHggYXV0byAwO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uX3dyYXAgLm5vdGlmaWNhdGlvbl9pY29uXHJcbntcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogNTBweDtcclxuaGVpZ2h0OiA1MHB4O1xyXG5mb250LXNpemU6IDMycHg7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmNvbG9yOiAjNjA1ZGZmO1xyXG59XHJcbi5ub3RpZmljYXRpb25fd3JhcCAubm90aWZpY2F0aW9uX2ljb24gLmZhLWJlbGx7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uX3dyYXAgLmRyb3Bkb3due1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gMDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbl93cmFwIC5kcm9wZG93biAubm90aWZ5X2l0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkYmRhZmYgO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uX3dyYXAgLmRyb3Bkb3duIC5ub3RpZnlfaXRlbTpsYXN0LWNoaWxke1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG5cclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbl93cmFwIC5kcm9wZG93biAubm90aWZ5X2l0ZW0gLm5vdGlmeV9pbWd7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uX3dyYXAgLmRyb3Bkb3duIC5ub3RpZnlfaXRlbSAubm90aWZ5X2luZm8gcHtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb25fd3JhcCAuZHJvcGRvd24gLm5vdGlmeV9pdGVtIC5ub3RpZnlfaW5mbyBwIHNwYW57XHJcblx0Y29sb3I6ICM2MDVkZmY7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbl93cmFwIC5kcm9wZG93biAubm90aWZ5X2l0ZW0gLm5vdGlmeV9pbmZvIC5ub3RpZnlfdGltZXtcclxuXHRjb2xvcjogI2M1YzVlNjtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb25fd3JhcCAuZHJvcGRvd246YmVmb3Jle1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTMwcHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRib3JkZXI6IDE1cHggc29saWQ7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uX3dyYXAgLmRyb3Bkb3duLmFjdGl2ZXtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbiAqL1xyXG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'myProject';
    }
    open() {
        $(document).ready(function () {
            $(".notification_icon .fa-bell").click(function () {
                $(".dropdown").toggleClass("active");
            });
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-user/add-user.component */ "./src/app/components/add-user/add-user.component.ts");
/* harmony import */ var _components_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/edit-form/edit-form.component */ "./src/app/components/edit-form/edit-form.component.ts");
/* harmony import */ var _components_view_form_view_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/view-form/view-form.component */ "./src/app/components/view-form/view-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_authservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/authservice.service */ "./src/app/services/authservice.service.ts");
/* harmony import */ var _services_tokeninspecter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/tokeninspecter.service */ "./src/app/services/tokeninspecter.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/games.service */ "./src/app/services/games.service.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"],
            _components_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_7__["EditFormComponent"],
            _components_view_form_view_form_component__WEBPACK_IMPORTED_MODULE_8__["ViewFormComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [_services_authservice_service__WEBPACK_IMPORTED_MODULE_12__["AuthserviceService"], _services_games_service__WEBPACK_IMPORTED_MODULE_15__["GamesService"], {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                useClass: _services_tokeninspecter_service__WEBPACK_IMPORTED_MODULE_13__["TokeninspecterService"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/add-user/add-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-user/add-user.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n    padding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n    font-family: 'Poppins', sans-serif;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n\r\n.wave{\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\theight: 100%;\r\n\tz-index: -1;\r\n}\r\n\r\n\r\n\r\n.container{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-gap :7rem;\r\n    padding: 0 2rem;\r\n}\r\n\r\n\r\n\r\n.img{\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n.login-content{\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n.img img{\r\n\twidth: 500px;\r\n}\r\n\r\n\r\n\r\nform{\r\n\twidth: 360px;\r\n}\r\n\r\n\r\n\r\n.login-content img{\r\n    height: 100px;\r\n}\r\n\r\n\r\n\r\n.login-content h2{\r\n\tmargin: 15px 0;\r\n\tcolor: #333;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 2.9rem;\r\n}\r\n\r\n\r\n\r\n.login-content .input-div{\r\n\tposition: relative;\r\n    display: grid;\r\n    grid-template-columns: 7% 93%;\r\n    margin: 25px 0;\r\n    padding: 5px 0;\r\n    border-bottom: 2px solid #d9d9d9;\r\n}\r\n\r\n\r\n\r\n.login-content .input-div.one{\r\n\tmargin-top: 0;\r\n}\r\n\r\n\r\n\r\n.i{\r\n\tcolor: #d9d9d9;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n.i i{\r\n\ttransition: .3s;\r\n}\r\n\r\n\r\n\r\n.input-div  div{\r\n    position: relative;\r\n\theight: 45px;\r\n}\r\n\r\n\r\n\r\n.input-div  div  h5{\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n\tcolor: #999;\r\n\tfont-size: 18px;\r\n\ttransition: .3s;\r\n}\r\n\r\n\r\n\r\n.input-div:before, .input-div:after{\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tbottom: -2px;\r\n\twidth: 0%;\r\n\theight: 2px;\r\n\tbackground-color: #38d39f;\r\n\ttransition: .4s;\r\n}\r\n\r\n\r\n\r\n.input-div:before{\r\n\tright: 50%;\r\n}\r\n\r\n\r\n\r\n.input-div:after{\r\n\tleft: 50%;\r\n}\r\n\r\n\r\n\r\n.input-div.focus:before, .input-div.focus:after{\r\n\twidth: 50%;\r\n}\r\n\r\n\r\n\r\n.input-div.focus  div  h5{\r\n\ttop: -5px;\r\n\tfont-size: 15px;\r\n}\r\n\r\n\r\n\r\n.input-div.focus  .i  i{\r\n\tcolor: #38d39f;\r\n}\r\n\r\n\r\n\r\n.input-div  div  input{\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: none;\r\n\tpadding: 0.5rem 0.7rem;\r\n\tfont-size: 1.2rem;\r\n\tcolor: #555;\r\n\tfont-family: 'poppins', sans-serif;\r\n}\r\n\r\n\r\n\r\n.input-div.pass{\r\n\tmargin-bottom: 4px;\r\n}\r\n\r\n\r\n\r\na{\r\n\tdisplay: block;\r\n\ttext-align: right;\r\n\ttext-decoration: none;\r\n\tcolor: #999;\r\n\tfont-size: 0.9rem;\r\n\ttransition: .3s;\r\n}\r\n\r\n\r\n\r\na:hover{\r\n\tcolor: #38d39f;\r\n}\r\n\r\n\r\n\r\n.btn{\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\tborder-radius: 25px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);\r\n\tbackground-size: 200%;\r\n\tfont-size: 1.2rem;\r\n\tcolor: #fff;\r\n\tfont-family: 'Poppins', sans-serif;\r\n\ttext-transform: uppercase;\r\n\tmargin: 1rem 0;\r\n\tcursor: pointer;\r\n\ttransition: .5s;\r\n}\r\n\r\n\r\n\r\n.btn:hover{\r\n\tbackground-position: right;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1050px){\r\n\t.container{\r\n\t\tgrid-gap: 5rem;\r\n\t}\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1000px){\r\n\tform{\r\n\t\twidth: 290px;\r\n\t}\r\n\r\n\t.login-content h2{\r\n        font-size: 2.4rem;\r\n        margin: 8px 0;\r\n\t}\r\n\r\n\t.img img{\r\n\t\twidth: 400px;\r\n\t}\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 900px){\r\n\t.container{\r\n\t\tgrid-template-columns: 1fr;\r\n\t}\r\n\r\n\t.img{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.wave{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.login-content{\r\n\t\tjustify-content: center;\r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtDQUNiLFNBQVM7Q0FDVCxzQkFBc0I7SUFDbkIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtBQUNwQjs7OztBQUlBO0NBQ0MsZUFBZTtDQUNmLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsWUFBWTtDQUNaLFdBQVc7QUFDWjs7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxlQUFlO0FBQ25COzs7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQjs7OztBQUVBO0NBQ0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25COzs7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7Ozs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7OztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOzs7O0FBRUE7Q0FDQyxrQkFBa0I7SUFDZixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOzs7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7Ozs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7OztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7OztBQUVBO0lBQ0ksa0JBQWtCO0NBQ3JCLFlBQVk7QUFDYjs7OztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixRQUFRO0NBQ1IsMkJBQTJCO0NBQzNCLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osU0FBUztDQUNULFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsZUFBZTtBQUNoQjs7OztBQUVBO0NBQ0MsVUFBVTtBQUNYOzs7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7Ozs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7OztBQUVBO0NBQ0MsU0FBUztDQUNULGVBQWU7QUFDaEI7Ozs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7OztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE9BQU87Q0FDUCxNQUFNO0NBQ04sV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZO0NBQ1osYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxrQ0FBa0M7QUFDbkM7Ozs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7OztBQUVBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixlQUFlO0FBQ2hCOzs7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7Ozs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsWUFBWTtDQUNaLHNFQUFzRTtDQUN0RSxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxrQ0FBa0M7Q0FDbEMseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7OztBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCOzs7O0FBR0E7Q0FDQztFQUNDLGNBQWM7Q0FDZjtBQUNEOzs7O0FBRUE7Q0FDQztFQUNDLFlBQVk7Q0FDYjs7Q0FFQTtRQUNPLGlCQUFpQjtRQUNqQixhQUFhO0NBQ3BCOztDQUVBO0VBQ0MsWUFBWTtDQUNiO0FBQ0Q7Ozs7QUFFQTtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCOztDQUVBO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsdUJBQXVCO0NBQ3hCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgcGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuXHJcbi53YXZle1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBncmlkLWdhcCA6N3JlbTtcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxufVxyXG5cclxuLmltZ3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRlbnR7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWcgaW1ne1xyXG5cdHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuZm9ybXtcclxuXHR3aWR0aDogMzYwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250ZW50IGltZ3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250ZW50IGgye1xyXG5cdG1hcmdpbjogMTVweCAwO1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiAyLjlyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1jb250ZW50IC5pbnB1dC1kaXZ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNyUgOTMlO1xyXG4gICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDlkOWQ5O1xyXG59XHJcblxyXG4ubG9naW4tY29udGVudCAuaW5wdXQtZGl2Lm9uZXtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uaXtcclxuXHRjb2xvcjogI2Q5ZDlkOTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pIGl7XHJcblx0dHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2ICBkaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4uaW5wdXQtZGl2ICBkaXYgIGg1e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAxMHB4O1xyXG5cdHRvcDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHRjb2xvcjogIzk5OTtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0dHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2OmJlZm9yZSwgLmlucHV0LWRpdjphZnRlcntcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiAtMnB4O1xyXG5cdHdpZHRoOiAwJTtcclxuXHRoZWlnaHQ6IDJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzhkMzlmO1xyXG5cdHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLmlucHV0LWRpdjpiZWZvcmV7XHJcblx0cmlnaHQ6IDUwJTtcclxufVxyXG5cclxuLmlucHV0LWRpdjphZnRlcntcclxuXHRsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYuZm9jdXM6YmVmb3JlLCAuaW5wdXQtZGl2LmZvY3VzOmFmdGVye1xyXG5cdHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYuZm9jdXMgIGRpdiAgaDV7XHJcblx0dG9wOiAtNXB4O1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmlucHV0LWRpdi5mb2N1cyAgLmkgIGl7XHJcblx0Y29sb3I6ICMzOGQzOWY7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYgIGRpdiAgaW5wdXR7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XHJcblx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0Y29sb3I6ICM1NTU7XHJcblx0Zm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmlucHV0LWRpdi5wYXNze1xyXG5cdG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuYXtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0Zm9udC1zaXplOiAwLjlyZW07XHJcblx0dHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG5cdGNvbG9yOiAjMzhkMzlmO1xyXG59XHJcblxyXG4uYnRue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzMyYmU4ZiwgIzM4ZDM5ZiwgIzMyYmU4Zik7XHJcblx0YmFja2dyb3VuZC1zaXplOiAyMDAlO1xyXG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRtYXJnaW46IDFyZW0gMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5idG46aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpe1xyXG5cdC5jb250YWluZXJ7XHJcblx0XHRncmlkLWdhcDogNXJlbTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcblx0Zm9ybXtcclxuXHRcdHdpZHRoOiAyOTBweDtcclxuXHR9XHJcblxyXG5cdC5sb2dpbi1jb250ZW50IGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcblx0fVxyXG5cclxuXHQuaW1nIGltZ3tcclxuXHRcdHdpZHRoOiA0MDBweDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuXHQuY29udGFpbmVye1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblx0fVxyXG5cclxuXHQuaW1ne1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC53YXZle1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC5sb2dpbi1jb250ZW50e1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/add-user/add-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-user/add-user.component.ts ***!
  \***********************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_authservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authservice.service */ "./src/app/services/authservice.service.ts");




let AddUserComponent = class AddUserComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    loginUser() {
        let loginPayload = {
            username: this.username,
            password: this.password
        };
        console.log("user Login Data is ", loginPayload);
        this.auth.loginUser(loginPayload).subscribe(result => {
            console.log(result);
            if (result['success'] == true) {
                console.log('Login Successfull');
                this.saveToken(result['token']);
                this.router.navigate(['home']);
            }
        }, err => {
            console.log(err);
        });
    }
    saveToken(token) {
        sessionStorage.setItem('token', token);
    }
};
AddUserComponent.ctorParameters = () => [
    { type: src_app_services_authservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-user/add-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-user.component.css */ "./src/app/components/add-user/add-user.component.css")).default]
    })
], AddUserComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\n\nhtml{\n    background: linear-gradient(to right top, #44ddd0, #27d7a1);\n}\n\nhtml{\n    height: 100%;\n}\n\n.container-fluid{\r\n    position: absolute;\r\n    \r\n}\n\n.wrapper{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\n\n.main-title{\r\n    display: flex;\r\n   \r\n}\n\n.navbar-brand {\r\n    font-size: 1.2em;\r\n    font-weight: 400;\r\n    color: lightseagreen;\r\n}\n\n.dropdown-menu{\r\n    top: 60px;\r\n    right: 43px;\r\n    left: unset;\r\n    width: 440px;\r\n    box-shadow: 0 5px 7px -1px #c1c1c1;\r\n    padding-bottom: 0px;\r\n    padding: 0px;\r\n}\n\n.dropdown-menu ul  {\r\n    text-decoration: none;\r\n    list-style: none;\r\n    margin-left: 0%;\r\n}\n\n.dropdown-menu ul:before{\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -20px;\r\n    right: 22px;\r\n    border: 10px solid #343a40;\r\n    border-color: transparent transparent #343a40;\r\n}\n\n.head-dropdown{\r\n    /* padding: 5px 15px; */\r\n    border-radius: 3px 3px 0px 0px;\r\n}\n\n.footer{\r\n    /* padding: 5px 15px; */\r\n    border-radius: 0px 0px 3px 3px;\r\n}\n\n#main-section button{\r\n    box-shadow: none;\r\n    outline: none;\r\n    border: 0;\r\n}\n\n#main-section button:last-child{\r\n    background: cornflowerblue;\r\n    box-shadow: none;\r\n    outline: none;\r\n    border: 0;\r\n}\n\n#main-section button:hover{\r\n    opacity: 0.8;\r\n}\n\n#sortsearch{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\n\n.panel{\r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 0;\r\n    \r\n    box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);\r\n    background: #fff;\r\n   border-radius: 15px;\r\n   margin-top: 15px;\r\n}\n\n.panel .panel-heading, .panel2 .panel-heading , .panel3 .panel-heading {\r\n    background: #fff;\r\n    padding: 25px 25px 10px;\r\n    border-radius: 0;\r\n}\n\n.panel .panel-heading .title{\r\n    color: lightseagreen;\r\n    font-size: 28px;\r\n    font-weight: 400;\r\n    line-height: 30px;\r\n    text-transform: capitalize;\r\n    margin: 0;\r\n}\n\n/* .panel .panel-body .table thead tr th:last-child{ width: 120px; } */\n\n#main-section{\r\n    margin-bottom: 15px;\r\n}\n\n.panel .panel-body{\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\n\n.panel .panel-body , .panel-footer{\r\n    margin-left: 15px;\r\n}\n\n.panel-body .btn{\r\n    font-size: 15px;\r\n    padding: 6px 15px;\r\n    border-radius: 50px;\r\n    border:none;\r\n    background: lightseagreen;\r\n    transition: all 0.3s ease 0s;\r\n    box-shadow: none;\r\n}\n\n.panel-body .delall{\r\n    background-color: crimson;\r\n}\n\n.panel .panel-body .btn:hover{\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n}\n\n.panel .panel-body .sortsearch{\r\n   \r\n   display: flex;\r\n   justify-content: flex-end;\r\n}\n\n.panel .panel-body .search-box{ \r\n    position: relative; width: 30%;\r\n    right: 0px;\r\n    \r\n    \r\n}\n\n.panel .panel-body .search-box i{\r\n\r\n    color: #a0a5b1;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    top: 11px;\r\n    left: 15px;\r\n}\n\n.panel .panel-body .search-box .form-control{\r\n    padding: 0 0 0 40px;\r\n    border-color: #ddd;\r\n    border-radius: 20px;\r\n}\n\n.panel .panel-body .search-box .form-control:focus{\r\n    border-color: lightseagreen;\r\n    box-shadow: none;\r\n    /* box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25); */\r\n }\n\n.panel .panel-body .table tbody tr td{\r\n    color: #555;\r\n    background: #fff;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n    vertical-align: middle;\r\n    border-color: #e7e7e7;\r\n}\n\n.panel .panel-body .table tbody td span.label{ font-size: 13px; }\n\n.panel .panel-body .table tbody .action-list{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\n\n.panel .panel-body .table tbody .action-list li{\r\n    margin: 0 3px;\r\n    display: inline-block;\r\n}\n\n.panel .panel-body .table tbody .action-list li a{\r\n    color: #f41127;\r\n    background-color: rgb(244 17 39 / 0.11);\r\n    font-size: 18px;\r\n    border: none;\r\n    background: transparent;\r\n    transition: all 0.3s ease;\r\n}\n\n.panel .panel-body .table tbody .action-list li  .edit {\r\n    color: rgba(241, 241, 69, 0.986);\r\n    background-color: #FFFFCA;\r\n}\n\n.panel .panel-body .table tbody .action-list li  .danger {\r\n    color: crimson;\r\n    background-color: rgb(244 17 39 / 0.11);\r\n}\n\n.panel .panel-body .table tbody .action-list li  .show {\r\n    color: #0d6efd;\r\n    background-color: rgb(13 110 253 / 0.11);\r\n}\n\n.panel .panel-body .table tbody .action-list li a:hover{ box-shadow: 0 0 5px rgba(0,0,0,0.3); }\n\n.panel .panel-footer{\r\n    color: #999;\r\n    background-color: transparent;\r\n    padding: 15px 0 0;\r\n    border: none;\r\n}\n\n/* .panel .panel-footer .col{ line-height: 35px; } */\n\n.pagination{ margin: 0; padding: 5px;\r\n    margin-bottom: 15px; \r\n}\n\n.pagination li a{\r\n    color: #999;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    line-height: 32px;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    padding: 6px;\r\n    margin: 0 3px;\r\n    margin-right: 35px;\r\n    text-decoration: none;\r\n    border: none;\r\n}\n\n.pagination li ul li {\r\n    list-style: none;\r\n}\n\n.pagination li:first-child a,\r\n.pagination li:last-child a{\r\n    border-radius: 35px;\r\n}\n\n.pagination li a:hover{\r\n    color: #999;\r\n    background: #e9ecef;\r\n}\n\n.pagination li a:focus,\r\n.pagination li.active a{\r\n    color: #fff;\r\n    background-color: lightseagreen;\r\n}\n\n.empty-state-text{\r\n    font-size: 20px;\r\n    color: #777;\r\n    text-align: center;\r\n}\n\n/* View Section start */\n\n.viewsection{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 100%;\r\n    \r\n}\n\n.view_body{\r\n    width: 75vw;\r\n    height: 65vh;\r\n\r\n}\n\n.panel2{\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    \r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 0;\r\n  \r\n    box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);\r\n    background: #fff;\r\n   border-radius: 15px;\r\n}\n\n.panel2 .panel-heading , .panel3 .panel-heading{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\n\n.panel2 .panel-heading .title, .panel3 .panel-heading .title{\r\n    font-size: 28px;\r\n    color: lightseagreen;\r\n    font-weight: 400;\r\n    line-height: 30px;\r\n    text-transform: capitalize;\r\n    margin: 0;\r\n    padding: 5px 0px 5px auto;\r\n    margin: 15px;\r\n    margin-left: 35px;\r\n\r\n}\n\n.panel2 .panel-heading button, .panel3 .panel-heading button{\r\n    width: 10%;\r\n    height: 40px;\r\n    color: #fff;\r\n    margin: 15px 5px 5px 15px;\r\n\r\n}\n\n.game-img{\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    /* margin-top: 25px; */\r\n    margin-bottom: 15px;\r\n}\n\n.panel2 table {\r\n   outline: hidden;\r\n   border: 0;\r\n}\n\n.panel2 table tr {\r\n    padding: 1px auto;\r\n    margin-left: 10px;\r\n    background-color: lightcyan;\r\n    width: 100%;\r\n    white-space: nowrap;\r\n}\n\n.panel2 table tr th {\r\n    border-left: 3px solid lightseagreen;\r\n    background-color: transparent;\r\n    height: 40px;\r\n    margin-left: 25px;\r\n    margin-top: 15px;\r\n    padding: 10px;\r\n    font-weight: bold;\r\n    font-size: 0.9em;\r\n}\n\n/* view section End */\n\n/* Edit Section Start */\n\n.editsection{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 100%;\r\n    \r\n}\n\n.edit_body{\r\n    width: 75vw;\r\n    height: 65vh;\r\n    \r\n}\n\n.panel3{\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    \r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 0;\r\n   \r\n    box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);\r\n    background: #fff;\r\n   border-radius: 15px;\r\n    \r\n}\n\n.panel3-body{\r\n    margin: 5px 25px 5px 25px;\r\n}\n\n.form-edit-btn button {\r\n    width: 40%;\r\n    border-radius: 55px;\r\n    box-shadow: none;\r\n    color: #fff;\r\n    cursor:  pointer;\r\n    display: block; margin: 0 auto;\r\n    margin-bottom: 15px;\r\n}\n\n.form-edit-btn button :hover{\r\n    opacity: 0.9;\r\n}\n\n/* Edit section End */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7O0FBRTlFO0lBQ0ksMkRBQTJEO0FBQy9EOztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7QUNOQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLDBCQUEwQjtJQUMxQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsVUFBVTs7SUFFViw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0dBQ2pCLG1CQUFtQjtHQUNuQixnQkFBZ0I7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUNBLHNFQUFzRTs7QUFDdEU7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBOztHQUVHLGFBQWE7R0FDYix5QkFBeUI7QUFDNUI7O0FBRUM7SUFDRyxrQkFBa0IsRUFBRSxVQUFVO0lBQzlCLFVBQVU7OztBQUdkOztBQUNBOztJQUVJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIscURBQXFEO0NBQ3hEOztBQUNEO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBLCtDQUErQyxlQUFlLEVBQUU7O0FBQ2hFO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVDQUF1QztBQUMzQzs7QUFDQTtJQUNJLGNBQWM7SUFDZCx3Q0FBd0M7QUFDNUM7O0FBRUEseURBQXlELG1DQUFtQyxFQUFFOztBQUU5RjtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBQ0Esb0RBQW9EOztBQUNwRCxhQUFhLFNBQVMsRUFBRSxZQUFZO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTs7QUFFbkI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixpQ0FBaUM7SUFDakMsVUFBVTs7SUFFViw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0dBQ2pCLG1CQUFtQjtBQUN0Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjs7QUFFckI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7O0FBRTdCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0dBQ0csZUFBZTtHQUNmLFNBQVM7QUFDWjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBLHFCQUFxQjs7QUFFckIsdUJBQXVCOztBQUN2QjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTs7QUFFbkI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixpQ0FBaUM7SUFDakMsVUFBVTs7SUFFViw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0dBQ2pCLG1CQUFtQjs7QUFFdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBRSxjQUFjO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0EscUJBQXFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbmh0bWx7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzQ0ZGRkMCwgIzI3ZDdhMSk7XG59XG5cblxuaHRtbHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuXG4iLCJcclxuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLmNzcyc7XHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgXHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubWFpbi10aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIFxyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcclxufVxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIHRvcDogNjBweDtcclxuICAgIHJpZ2h0OiA0M3B4O1xyXG4gICAgbGVmdDogdW5zZXQ7XHJcbiAgICB3aWR0aDogNDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA3cHggLTFweCAjYzFjMWMxO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4uZHJvcGRvd24tbWVudSB1bCAge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxufVxyXG4uZHJvcGRvd24tbWVudSB1bDpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIHJpZ2h0OiAyMnB4O1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICMzNDNhNDA7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMzNDNhNDA7XHJcbn1cclxuXHJcbi5oZWFkLWRyb3Bkb3due1xyXG4gICAgLyogcGFkZGluZzogNXB4IDE1cHg7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDBweCAwcHg7XHJcbn1cclxuLmZvb3RlcntcclxuICAgIC8qIHBhZGRpbmc6IDVweCAxNXB4OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAzcHggM3B4O1xyXG59XHJcbiNtYWluLXNlY3Rpb24gYnV0dG9ue1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuI21haW4tc2VjdGlvbiBidXR0b246bGFzdC1jaGlsZHtcclxuICAgIGJhY2tncm91bmQ6IGNvcm5mbG93ZXJibHVlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuI21haW4tc2VjdGlvbiBidXR0b246aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbiNzb3J0c2VhcmNoe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wYW5lbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDAgLjNyZW0gLjhyZW0gcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4ucGFuZWwgLnBhbmVsLWhlYWRpbmcsIC5wYW5lbDIgLnBhbmVsLWhlYWRpbmcgLCAucGFuZWwzIC5wYW5lbC1oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDI1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLnBhbmVsIC5wYW5lbC1oZWFkaW5nIC50aXRsZXtcclxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLyogLnBhbmVsIC5wYW5lbC1ib2R5IC50YWJsZSB0aGVhZCB0ciB0aDpsYXN0LWNoaWxkeyB3aWR0aDogMTIwcHg7IH0gKi9cclxuI21haW4tc2VjdGlvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnBhbmVsIC5wYW5lbC1ib2R5e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnBhbmVsIC5wYW5lbC1ib2R5ICwgLnBhbmVsLWZvb3RlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5wYW5lbC1ib2R5IC5idG57XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ucGFuZWwtYm9keSAuZGVsYWxse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxufVxyXG4ucGFuZWwgLnBhbmVsLWJvZHkgLmJ0bjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLnBhbmVsIC5wYW5lbC1ib2R5IC5zb3J0c2VhcmNoe1xyXG4gICBcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuIC5wYW5lbCAucGFuZWwtYm9keSAuc2VhcmNoLWJveHsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAzMCU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4ucGFuZWwgLnBhbmVsLWJvZHkgLnNlYXJjaC1ib3ggaXtcclxuXHJcbiAgICBjb2xvcjogI2EwYTViMTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTFweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbn1cclxuLnBhbmVsIC5wYW5lbC1ib2R5IC5zZWFyY2gtYm94IC5mb3JtLWNvbnRyb2x7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ucGFuZWwgLnBhbmVsLWJvZHkgLnNlYXJjaC1ib3ggLmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgLjI1KTsgKi9cclxuIH0gXHJcbi5wYW5lbCAucGFuZWwtYm9keSAudGFibGUgdGJvZHkgdHIgdGR7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItY29sb3I6ICNlN2U3ZTc7XHJcbn1cclxuXHJcbi5wYW5lbCAucGFuZWwtYm9keSAudGFibGUgdGJvZHkgdGQgc3Bhbi5sYWJlbHsgZm9udC1zaXplOiAxM3B4OyB9XHJcbi5wYW5lbCAucGFuZWwtYm9keSAudGFibGUgdGJvZHkgLmFjdGlvbi1saXN0e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnBhbmVsIC5wYW5lbC1ib2R5IC50YWJsZSB0Ym9keSAuYWN0aW9uLWxpc3QgbGl7XHJcbiAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5wYW5lbCAucGFuZWwtYm9keSAudGFibGUgdGJvZHkgLmFjdGlvbi1saXN0IGxpIGF7XHJcbiAgICBjb2xvcjogI2Y0MTEyNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQgMTcgMzkgLyAwLjExKTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnBhbmVsIC5wYW5lbC1ib2R5IC50YWJsZSB0Ym9keSAuYWN0aW9uLWxpc3QgbGkgIC5lZGl0IHtcclxuICAgIGNvbG9yOiByZ2JhKDI0MSwgMjQxLCA2OSwgMC45ODYpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZDQTtcclxufVxyXG5cclxuLnBhbmVsIC5wYW5lbC1ib2R5IC50YWJsZSB0Ym9keSAuYWN0aW9uLWxpc3QgbGkgIC5kYW5nZXIge1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0IDE3IDM5IC8gMC4xMSk7XHJcbn1cclxuLnBhbmVsIC5wYW5lbC1ib2R5IC50YWJsZSB0Ym9keSAuYWN0aW9uLWxpc3QgbGkgIC5zaG93IHtcclxuICAgIGNvbG9yOiAjMGQ2ZWZkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzIDExMCAyNTMgLyAwLjExKTtcclxufVxyXG5cclxuLnBhbmVsIC5wYW5lbC1ib2R5IC50YWJsZSB0Ym9keSAuYWN0aW9uLWxpc3QgbGkgYTpob3ZlcnsgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuMyk7IH1cclxuXHJcbi5wYW5lbCAucGFuZWwtZm9vdGVye1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi8qIC5wYW5lbCAucGFuZWwtZm9vdGVyIC5jb2x7IGxpbmUtaGVpZ2h0OiAzNXB4OyB9ICovXHJcbi5wYWdpbmF0aW9ueyBtYXJnaW46IDA7IHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IFxyXG59XHJcbi5wYWdpbmF0aW9uIGxpIGF7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luOiAwIDNweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucGFnaW5hdGlvbiBsaSB1bCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5wYWdpbmF0aW9uIGxpOmZpcnN0LWNoaWxkIGEsXHJcbi5wYWdpbmF0aW9uIGxpOmxhc3QtY2hpbGQgYXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbn1cclxuLnBhZ2luYXRpb24gbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxufVxyXG4ucGFnaW5hdGlvbiBsaSBhOmZvY3VzLFxyXG4ucGFnaW5hdGlvbiBsaS5hY3RpdmUgYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxufVxyXG4uZW1wdHktc3RhdGUtdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBWaWV3IFNlY3Rpb24gc3RhcnQgKi9cclxuXHJcbi52aWV3c2VjdGlvbntcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuLnZpZXdfYm9keXtcclxuICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgaGVpZ2h0OiA2NXZoO1xyXG5cclxufVxyXG5cclxuLnBhbmVsMntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIFxyXG4gICAgYm94LXNoYWRvdzogMCAuM3JlbSAuOHJlbSByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5wYW5lbDIgLnBhbmVsLWhlYWRpbmcgLCAucGFuZWwzIC5wYW5lbC1oZWFkaW5ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSBcclxuXHJcbi5wYW5lbDIgLnBhbmVsLWhlYWRpbmcgLnRpdGxlLCAucGFuZWwzIC5wYW5lbC1oZWFkaW5nIC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCBhdXRvO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcblxyXG59XHJcbi5wYW5lbDIgLnBhbmVsLWhlYWRpbmcgYnV0dG9uLCAucGFuZWwzIC5wYW5lbC1oZWFkaW5nIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMTVweCA1cHggNXB4IDE1cHg7XHJcblxyXG59XHJcbi5nYW1lLWltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgLyogbWFyZ2luLXRvcDogMjVweDsgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnBhbmVsMiB0YWJsZSB7XHJcbiAgIG91dGxpbmU6IGhpZGRlbjtcclxuICAgYm9yZGVyOiAwO1xyXG59XHJcbi5wYW5lbDIgdGFibGUgdHIge1xyXG4gICAgcGFkZGluZzogMXB4IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnBhbmVsMiB0YWJsZSB0ciB0aCB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi8qIHZpZXcgc2VjdGlvbiBFbmQgKi9cclxuXHJcbi8qIEVkaXQgU2VjdGlvbiBTdGFydCAqL1xyXG4uZWRpdHNlY3Rpb257XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcbi5lZGl0X2JvZHl7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICAgIGhlaWdodDogNjV2aDtcclxuICAgIFxyXG59XHJcbi5wYW5lbDN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgXHJcbiAgICBib3gtc2hhZG93OiAwIC4zcmVtIC44cmVtIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLnBhbmVsMy1ib2R5e1xyXG4gICAgbWFyZ2luOiA1cHggMjVweCA1cHggMjVweDtcclxufVxyXG5cclxuLmZvcm0tZWRpdC1idG4gYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiAgcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWVkaXQtYnRuIGJ1dHRvbiA6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcblxyXG4vKiBFZGl0IHNlY3Rpb24gRW5kICovIl19 */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authservice.service */ "./src/app/services/authservice.service.ts");
/* harmony import */ var src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/games.service */ "./src/app/services/games.service.ts");




let DashboardComponent = class DashboardComponent {
    constructor(auth, gameService) {
        this.auth = auth;
        this.gameService = gameService;
        this.viewSection = false;
        this.listGames = true;
        this.editSection = false;
        this.name = "";
        this.genres = "";
        this.progress = "";
        this.site = "";
        this.size = "";
        this.game_img = null;
        this.myChecks = false;
        this.limit = 6;
        this.page = 1;
        this.total = 0;
        this.rowsOnpage = 6;
        this.searchQuery = "";
        this.gamesData = [];
        //  = [
        //   {
        //     name: "gta5",
        //     size: "45gb",
        //     genres: "[openworld,action,adventure]",
        //     status: 0,
        //     site: "thepcgames.net",
        //     progress: 40,
        //   },
        //   {
        //     name: "gta5",
        //     size: "45gb",
        //     genres: "action",
        //     status: 0,
        //     site: "thepcgames.net",
        //     progress: 80,
        //   },
        //   {
        //     name: "gta5",
        //     size: "45gb",
        //     genres: "shooting",
        //     status: 1,
        //     site: "thepcgames.net",
        //     progress: 100,
        //   },
        //   {
        //     name: "Call Of Duty new warriors ",
        //     size: "45gb",
        //     genres: "Action RPG",
        //     status: 0,
        //     site: "thepcgames.net",
        //     progress: 20,
        //   },
        //   {
        //     name: "farming simulators  2019",
        //     size: "45gb",
        //     genres: "Simulator",
        //     status: 0,
        //     site: "thepcgames.net",
        //     progress: 10,
        //   },
        //   {
        //     name: "gta5",
        //     size: "45gb",
        //     genres: "realworld",
        //     status: 0,
        //     site: "thepcgames.net",
        //     progress: 10,
        //   },
        // ];
        this.gameGenres = [
            "Action",
            "Action-adventure",
            "Survival Games",
            "Fighting Games",
            "Shooter Games",
            "Role-Play",
            "Action RPG",
            "Simulation",
            "Construction and Management Simulaton",
            "Life Simulation",
            "Racing",
            "Sports",
            "Competitive",
            "Horror Games",
            "Casual games",
            "Open World",
            "Real World",
            "Creative",
            "18+",
        ];
    }
    ngOnInit() {
        this.viewSection = false;
        this.listGames = true;
        this.editSection = false;
        this.getAllGames();
        this.createPager();
    }
    onSelectFile(event) {
        console.log("Form data is ", event);
        this.game_img = event.target.files[0];
    }
    getAllGames() {
        let payload = {
            limit: this.limit,
            page: this.page,
            query: this.searchQuery
        };
        this.gameService.getGames(payload).subscribe((result) => {
            console.log(result);
            this.gamesData = result['data'];
            this.total = result['count'];
            this.createPager();
        }, (err) => {
            this.createPager();
            console.log(err);
        });
    }
    // this.pager.startCount = this.beautyParlours.length > 0 && Number(this.page) === 1 ? 1 : this.beautyParlours.length > 0 ? (Number(this.rowsOnPage) * Number(this.page - 1)) + 1 : 0;
    // this.pager.endCount = Number(this.rowsOnPage) === this.beautyParlours.length ? Number(this.rowsOnPage) * Number(this.page) : Number(this.count);
    createPager() {
        this.start = this.gamesData.length > 0 && Number(this.page) === 1 ? 1 : this.gamesData.length > 0 ? (Number(this.rowsOnpage) * Number(this.page - 1)) + 1 : 0;
        this.end = Number(this.rowsOnpage) === this.gamesData.length ? Number(this.rowsOnpage) * Number(this.page) : Number(this.total);
        let endpage = Math.round(this.total / this.limit);
        this.myList = [];
        for (let i = 1; i <= Number(endpage); i++) {
            this.myList.push(i);
        }
        console.log("start ", this.start, "end", this.end);
    }
    getPage(event) {
        this.page = event;
        this.getAllGames();
    }
    saveGameDetails() {
        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("genres", this.genres);
        formData.append("site", this.site);
        formData.append("size", this.size);
        formData.append("file", this.game_img, this.game_img.name);
        console.log("Post Add game payload is", formData.get("file"));
    }
    resetForm() {
        this.gameForm.resetForm();
    }
    openNotification() {
        $(".fa-bell").click(function () {
            $(".dropdown").toggleClass("active");
        });
    }
    openModal() {
        $("#addFormModal").modal("show");
    }
    closeModal() {
        $("#addFormModal").modal("hide");
    }
    selectCheck(event) {
        if (event.target.checked == true) {
            this.myChecks = true;
        }
        else {
            this.myChecks = false;
        }
    }
    selectedDelete() {
        alert("Please select at least one to delete ?");
    }
    backtoHome() {
        this.viewSection = false;
        this.listGames = true;
        this.editSection = false;
    }
    view(data) {
        this.listGames = false;
        this.viewSection = true;
        this.editSection = false;
        console.log(data);
        this.name = data.name;
        this.genres = data.genres;
        this.progress = data.progress;
        this.site = data.site;
        this.status = data.status;
    }
    addGame(data) {
        console.log(data);
    }
    makechange(data) {
        this.listGames = false;
        this.editSection = true;
        console.log(data);
        this.name = data.name;
        this.genres = data.genres;
        this.progress = data.progress;
        this.site = data.site;
        this.status = data.status;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_services_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"] },
    { type: src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("gameForm", { static: false })
], DashboardComponent.prototype, "gameForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileInput", { static: false })
], DashboardComponent.prototype, "fileInputRef", void 0);
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/edit-form/edit-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/edit-form/edit-form.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n/* view panel styles */\r\n.viewsection{\r\n    display: block;\r\n    margin: auto;\r\n}\r\n.panel2{\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    height: 650px; \r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 0;\r\n    width: 80%;\r\n    box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);\r\n    background: #fff;\r\n   border-radius: 15px;\r\n   margin-top: 15px;  \r\n}\r\n.panel2 .panel-heading , .panel3 .panel-heading{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.panel2 .panel-heading .title, .panel3 .panle-heading .title{\r\n    font-size: 28px;\r\n    color: lightseagreen;\r\n    font-weight: 400;\r\n    line-height: 30px;\r\n    text-transform: capitalize;\r\n    margin: 0;\r\n    padding: 5px 0px 5px auto;\r\n    margin: 15px;\r\n    margin-left: 35px;\r\n\r\n}\r\n.panel2 .panel-heading button, .panel3 .panel-heading button{\r\n    width: 10%;\r\n    height: 40px;\r\n    color: #fff;\r\n    margin: 15px 5px 5px 15px;\r\n\r\n}\r\n.game-img{\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    margin-top: 25px;\r\n}\r\n.panel2 table {\r\n    margin-top: 25px;\r\n}\r\n.panel2 table tr {\r\n    padding: 1px auto;\r\n    margin-left: 10px;\r\n    background-color: lightcyan;\r\n    width: 100%;\r\n    white-space: nowrap;\r\n}\r\n.panel2 table tr th {\r\n    border-left: 3px solid lightseagreen;\r\n    background-color: transparent;\r\n    height: 50px;\r\n    margin-left: 5px;\r\n    padding: 2px;\r\n    font-weight: bold;\r\n    font-size: 1em;\r\n}\r\n/* edit section */\r\n.panel3{\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    height: 450px; \r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 0;\r\n    width: 80%;\r\n    box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12);\r\n    background: #fff;\r\n   border-radius: 15px;\r\n   margin-top: 15px;  \r\n}\r\n.panel3-body{\r\n    margin: 5px 25px 5px 25px;\r\n}\r\n.form-edit-btn button {\r\n    width: 40%;\r\n    border-radius: 55px;\r\n    box-shadow: none;\r\n    color: #fff;\r\n    cursor:  pointer;\r\n    display: block; margin: 0 auto;\r\n}\r\n.form-edit-btn button :hover{\r\n    opacity: 0.8;\r\n}\r\n/* add form */\r\n.addgameFrm  \r\n{\r\n    display: block;\r\n    margin: 0 auto;\r\n    \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWZvcm0vZWRpdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHNCQUFzQjtBQUN0QjtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLFVBQVU7SUFDViw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0dBQ2pCLG1CQUFtQjtHQUNuQixnQkFBZ0I7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsU0FBUztJQUNULHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCOztBQUU3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUdBLGlCQUFpQjtBQUNqQjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsVUFBVTtJQUNWLDRDQUE0QztJQUM1QyxnQkFBZ0I7R0FDakIsbUJBQW1CO0dBQ25CLGdCQUFnQjtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBRSxjQUFjO0FBQ2xDO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBUUEsYUFBYTtBQUNiOztJQUVJLGNBQWM7SUFDZCxjQUFjOztBQUVsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1mb3JtL2VkaXQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIHZpZXcgcGFuZWwgc3R5bGVzICovXHJcbi52aWV3c2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5wYW5lbDJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGhlaWdodDogNjUwcHg7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIC4zcmVtIC44cmVtIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgIG1hcmdpbi10b3A6IDE1cHg7ICBcclxufVxyXG4ucGFuZWwyIC5wYW5lbC1oZWFkaW5nICwgLnBhbmVsMyAucGFuZWwtaGVhZGluZ3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0gXHJcbi5wYW5lbDIgLnBhbmVsLWhlYWRpbmcgLnRpdGxlLCAucGFuZWwzIC5wYW5sZS1oZWFkaW5nIC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCBhdXRvO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcblxyXG59XHJcbi5wYW5lbDIgLnBhbmVsLWhlYWRpbmcgYnV0dG9uLCAucGFuZWwzIC5wYW5lbC1oZWFkaW5nIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMTVweCA1cHggNXB4IDE1cHg7XHJcblxyXG59XHJcbi5nYW1lLWltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4ucGFuZWwyIHRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLnBhbmVsMiB0YWJsZSB0ciB7XHJcbiAgICBwYWRkaW5nOiAxcHggYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5wYW5lbDIgdGFibGUgdHIgdGgge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuXHJcbi8qIGVkaXQgc2VjdGlvbiAqL1xyXG4ucGFuZWwze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4OyBcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAuM3JlbSAuOHJlbSByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICBtYXJnaW4tdG9wOiAxNXB4OyAgXHJcbn1cclxuLnBhbmVsMy1ib2R5e1xyXG4gICAgbWFyZ2luOiA1cHggMjVweCA1cHggMjVweDtcclxufVxyXG5cclxuLmZvcm0tZWRpdC1idG4gYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiAgcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZvcm0tZWRpdC1idG4gYnV0dG9uIDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogYWRkIGZvcm0gKi9cclxuLmFkZGdhbWVGcm0gIFxyXG57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/edit-form/edit-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-form/edit-form.component.ts ***!
  \*************************************************************/
/*! exports provided: EditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function() { return EditFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditFormComponent = class EditFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-form/edit-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-form.component.css */ "./src/app/components/edit-form/edit-form.component.css")).default]
    })
], EditFormComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand {\r\n    font-size: 1.2em;\r\n    font-weight: 400;\r\n    color: lightseagreen;\r\n\r\n}\r\n\r\nnav{\r\n    background: transparent !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcclxuXHJcbn1cclxuXHJcbm5hdntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    /* position: absolute; */\r\n    background-color: #fff;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n.container\r\n{\r\n    \r\noverflow: hidden;\r\nscroll-behavior: smooth;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    \r\n   \r\n}\r\n\r\n\r\nsection{\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 120px;\r\n\r\n}\r\n\r\n\r\n.register-main{\r\n    display: grid;\r\n    grid-template-columns: repeat(2,1fr);\r\n    grid-gap: 7rem;\r\n    padding: 0 ;\r\n   \r\n    background: #fff;\r\n   border-radius: 15px;\r\n    \r\n}\r\n\r\n\r\n.card{\r\n\t\r\n    \r\n    box-shadow: 0 .1rem .3rem .8rem rgba(0, 0, 0, .12);\r\n    background: #fff;\r\n   border-radius: 15px;\r\n  \r\n}\r\n\r\n\r\n.img{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.img img{\r\n    width: 700px;\r\n    height: 500px;\r\n}\r\n\r\n\r\n.avatar{\r\n    width: 100px;\r\n}\r\n\r\n\r\n.register-content{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n\r\nform{\r\n    width: 360px;\r\n}\r\n\r\n\r\n.register-content .input-div{\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: 7%  93%;\r\n    margin: 5px 0;\r\n    padding: 5px 0;\r\n    border-bottom: 2px solid #d9d9d9;\r\n}\r\n\r\n\r\n.register-content .input-div .one{\r\n    margin-top: 0;\r\n\r\n}\r\n\r\n\r\n.i{\r\n    color: #d9d9d9;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.i i{\r\n    transition: 0.3s;\r\n}\r\n\r\n\r\n.input-div  div{\r\n    position: relative;\r\n\theight: 45px;\r\n}\r\n\r\n\r\n.input-div  div  h5{\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n\tcolor: #999;\r\n\tfont-size: 18px;\r\n\ttransition: .3s;\r\n}\r\n\r\n\r\n.input-div:before, .input-div:after{\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tbottom: -2px;\r\n\twidth: 0%;\r\n\theight: 2px;\r\n\tbackground-color: #38d39f;\r\n\ttransition: .4s;\r\n}\r\n\r\n\r\n.input-div:before{\r\n\tright: 50%;\r\n}\r\n\r\n\r\n.input-div:after{\r\n\tleft: 50%;\r\n}\r\n\r\n\r\n.input-div.focus:before, .input-div.focus:after{\r\n\twidth: 50%;\r\n}\r\n\r\n\r\n.input-div.focus  div  h5{\r\n\ttop: -5px;\r\n\tfont-size: 15px;\r\n}\r\n\r\n\r\n.input-div.focus  .i  i{\r\n\tcolor: #38d39f;\r\n}\r\n\r\n\r\n.input-div  div  input{\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: #fff;\r\n\tpadding: 0.5rem 0.7rem;\r\n\tfont-size: 1.2rem;\r\n\tcolor: #555;\r\n\tfont-family: 'poppins', sans-serif;\r\n}\r\n\r\n\r\n.input-div.pass{\r\n\tmargin-bottom: 4px;\r\n}\r\n\r\n\r\na{\r\n    display: block;\r\n    text-align: right;\r\n    color: #999;\r\n    font-size: 0.9rem;\r\n    transition: .3s;\r\ntext-decoration: none;\r\n}\r\n\r\n\r\na:hover{\r\n    color: #38d39f;\r\n}\r\n\r\n\r\n.btn{\r\ndisplay: block;\r\nwidth: 100%;\r\nheight: 50px;\r\noutline: none;\r\nborder: none;\r\nbackground-image: linear-gradient(to right, #32be8f,#38d39f, #32be8f);\r\nbackground-size: 200%;\r\nfont-size: 1.2rem;\r\ncolor: #fff;\r\ntext-transform: uppercase;\r\nmargin: 1rem 0;\r\ncursor: pointer;\r\ntransition: .5s;\r\n}\r\n\r\n\r\n.btn:hover{\r\n    background-position: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7OztBQUdBOzs7QUFHQSxnQkFBZ0I7QUFDaEIsdUJBQXVCO0lBQ25CLFlBQVk7SUFDWixhQUFhOzs7QUFHakI7OztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7QUFFckI7OztBQUNBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsV0FBVzs7SUFFWCxnQkFBZ0I7R0FDakIsbUJBQW1COztBQUV0Qjs7O0FBQ0E7OztJQUdJLGtEQUFrRDtJQUNsRCxnQkFBZ0I7R0FDakIsbUJBQW1COztBQUV0Qjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOzs7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOzs7QUFDQTtJQUNJLGFBQWE7O0FBRWpCOzs7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksa0JBQWtCO0NBQ3JCLFlBQVk7QUFDYjs7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFFBQVE7Q0FDUiwyQkFBMkI7Q0FDM0IsV0FBVztDQUNYLGVBQWU7Q0FDZixlQUFlO0FBQ2hCOzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFNBQVM7Q0FDVCxXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7OztBQUVBO0NBQ0MsVUFBVTtBQUNYOzs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7OztBQUVBO0NBQ0MsU0FBUztDQUNULGVBQWU7QUFDaEI7OztBQUVBO0NBQ0MsY0FBYztBQUNmOzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsTUFBTTtDQUNOLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsa0NBQWtDO0FBQ25DOzs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQixxQkFBcUI7QUFDckI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7QUFDQSxjQUFjO0FBQ2QsV0FBVztBQUNYLFlBQVk7QUFDWixhQUFhO0FBQ2IsWUFBWTtBQUNaLHFFQUFxRTtBQUNyRSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWCx5QkFBeUI7QUFDekIsY0FBYztBQUNkLGVBQWU7QUFDZixlQUFlO0FBQ2Y7OztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lclxyXG57XHJcbiAgICBcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG5zZWN0aW9ue1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcblxyXG59XHJcbi5yZWdpc3Rlci1tYWlue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcclxuICAgIGdyaWQtZ2FwOiA3cmVtO1xyXG4gICAgcGFkZGluZzogMCA7XHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIFxyXG59XHJcbi5jYXJke1xyXG5cdFxyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAwIC4xcmVtIC4zcmVtIC44cmVtIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgXHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmltZyBpbWd7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbi5hdmF0YXJ7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLnJlZ2lzdGVyLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIHdpZHRoOiAzNjBweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWNvbnRlbnQgLmlucHV0LWRpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDclICA5MyU7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q5ZDlkOTtcclxufVxyXG4ucmVnaXN0ZXItY29udGVudCAuaW5wdXQtZGl2IC5vbmV7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG5cclxufVxyXG4uaXtcclxuICAgIGNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaSBpe1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmlucHV0LWRpdiAgZGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogNDVweDtcclxufVxyXG5cclxuLmlucHV0LWRpdiAgZGl2ICBoNXtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMTBweDtcclxuXHR0b3A6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLmlucHV0LWRpdjpiZWZvcmUsIC5pbnB1dC1kaXY6YWZ0ZXJ7XHJcblx0Y29udGVudDogJyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogLTJweDtcclxuXHR3aWR0aDogMCU7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM4ZDM5ZjtcclxuXHR0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXY6YmVmb3Jle1xyXG5cdHJpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXY6YWZ0ZXJ7XHJcblx0bGVmdDogNTAlO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2LmZvY3VzOmJlZm9yZSwgLmlucHV0LWRpdi5mb2N1czphZnRlcntcclxuXHR3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2LmZvY3VzICBkaXYgIGg1e1xyXG5cdHRvcDogLTVweDtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYuZm9jdXMgIC5pICBpe1xyXG5cdGNvbG9yOiAjMzhkMzlmO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2ICBkaXYgIGlucHV0e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xyXG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cdGNvbG9yOiAjNTU1O1xyXG5cdGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYucGFzc3tcclxuXHRtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzM4ZDM5ZjtcclxufVxyXG5cclxuLmJ0bntcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDUwcHg7XHJcbm91dGxpbmU6IG5vbmU7XHJcbmJvcmRlcjogbm9uZTtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzJiZThmLCMzOGQzOWYsICMzMmJlOGYpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IDIwMCU7XHJcbmZvbnQtc2l6ZTogMS4ycmVtO1xyXG5jb2xvcjogI2ZmZjtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxubWFyZ2luOiAxcmVtIDA7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxudHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4uYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/view-form/view-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/view-form/view-form.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1mb3JtL3ZpZXctZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/view-form/view-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/view-form/view-form.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFormComponent", function() { return ViewFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewFormComponent = class ViewFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-form/view-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-form.component.css */ "./src/app/components/view-form/view-form.component.css")).default]
    })
], ViewFormComponent);



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authservice.service */ "./src/app/services/authservice.service.ts");




let AuthGuard = class AuthGuard {
    constructor(_auth, router) {
        this._auth = _auth;
        this.router = router;
    }
    canActivate() {
        if (this._auth.isLoggedIn()) {
            return true;
        }
        this.router.navigateByUrl('/login');
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _authservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/services/authservice.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/authservice.service.ts ***!
  \*************************************************/
/*! exports provided: AuthserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthserviceService", function() { return AuthserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let AuthserviceService = class AuthserviceService {
    constructor(_http, router) {
        this._http = _http;
        this.router = router;
        this.api = `http://localhost:8080/api`;
    }
    registernewUser(data) {
        return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl + `${"/user/register"}`, data);
    }
    loginUser(data) {
        return this._http.post(this.api + `${'/user/login'}`, data);
    }
    isLoggedIn() {
        const user = this.getDetails();
        if (user) {
            user.exp > Date.now();
            return true;
        }
    }
    getToken() {
        sessionStorage.getItem("token");
    }
    getDetails() {
        const token = sessionStorage.getItem("token");
        if (token) {
            let payload = window.atob(token.split(".")[1]);
            return JSON.parse(payload);
        }
    }
    logout() {
        sessionStorage.clear();
        this.router.navigate(['login']);
    }
};
AuthserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], AuthserviceService);



/***/ }),

/***/ "./src/app/services/games.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/games.service.ts ***!
  \*******************************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let GamesService = class GamesService {
    constructor(_http) {
        this._http = _http;
        this.api = `http://localhost:8080/api`;
    }
    getGames(data) {
        return this._http.post(this.api + `${'/game/game-list'}`, data);
        console.log(this.api + `${'/game/game-list'}`);
    }
};
GamesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
GamesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], GamesService);



/***/ }),

/***/ "./src/app/services/tokeninspecter.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/tokeninspecter.service.ts ***!
  \****************************************************/
/*! exports provided: TokeninspecterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokeninspecterService", function() { return TokeninspecterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authservice.service */ "./src/app/services/authservice.service.ts");



let TokeninspecterService = class TokeninspecterService {
    constructor(_auth) {
        this._auth = _auth;
    }
    intercept(request, next) {
        let accesstoken = this._auth.getToken();
        request = request.clone({
            setHeaders: {
                Authorization: `JWT${accesstoken}`
            }
        });
        return next.handle(request);
    }
};
TokeninspecterService.ctorParameters = () => [
    { type: _authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"] }
];
TokeninspecterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokeninspecterService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiurl: `http://localhost:8080/api`
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular Applications\myProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map